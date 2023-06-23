'use client'

import { redirect } from 'next/navigation'
import ChallengeSideBar from '../ChallengeSideBar'
import CodeEditor from '../CodeEditor'
import { Challenge } from '@prisma/client'
import { useSession } from 'next-auth/react'

interface ChallengePageProps {
  embedId: Challenge | null
}

const ChallengePage = ({ embedId }: ChallengePageProps) => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/')
    },
  })

  if (!embedId) {
    redirect('/')
  }

  return (
    <main className="flex h-screen w-full">
      <CodeEditor projectId={embedId.embedId} />
      <ChallengeSideBar title={embedId.title} />
    </main>
  )
}

export default ChallengePage
