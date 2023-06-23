'use client'

import { useCallback, useEffect, useRef } from 'react'
import sdk, { VM } from '@stackblitz/sdk'
import { useInstructions } from '@/hooks/useInstructions'

const AUTOSAVE_IN_MS = 10000

interface CodeEditorProps {
  projectId: string
}

const CodeEditor = ({ projectId }: CodeEditorProps) => {
  const { setInstructions } = useInstructions()

  const vm = useRef<VM | null>(null)
  const loadVM = useCallback(async () => {
    vm.current = await sdk.embedProjectId('embed', projectId, {
      openFile: 'src/App.tsx',
    })

    const snapshot = await vm.current.getFsSnapshot()

    if (snapshot) {
      const instructions = snapshot['README.md']
      setInstructions(instructions)
    }

    const storageData = localStorage.getItem(`savedData:${projectId}`)

    if (storageData) {
      await new Promise((resolve) => setTimeout(resolve, 5000))

      const parsed = JSON.parse(storageData)
      await vm.current.applyFsDiff({
        create: {
          ...parsed,
        },
        destroy: [],
      })
    }
  }, [projectId, setInstructions])

  useEffect(() => {
    loadVM()
  }, [loadVM])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!vm.current) return

      const snapshot = vm.current.getFsSnapshot()

      if (!snapshot) return

      localStorage.setItem(`savedData:${projectId}`, JSON.stringify(snapshot))
    }, AUTOSAVE_IN_MS)

    return () => clearInterval(interval)
  }, [projectId])

  return <iframe className="h-full w-full border-none" id="embed" />
}

export default CodeEditor
