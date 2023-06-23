'use client'

import { SessionProvider } from 'next-auth/react'
import { InstructionsContextProvider } from '@/context/InstructionsContext'
import { ReactNode } from 'react'

interface ProviderProps {
  children: ReactNode
}

export default function Provider({ children }: ProviderProps) {
  return (
    <SessionProvider>
      <InstructionsContextProvider>{children}</InstructionsContextProvider>
    </SessionProvider>
  )
}
