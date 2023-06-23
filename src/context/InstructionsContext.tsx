'use client'

import { createContext, ReactNode, useState } from 'react'

interface InstructionsContextType {
  instructions: string
  setInstructions: (instructions: string) => void
}

export const InstructionsContext = createContext({} as InstructionsContextType)

interface InstructionsContextProviderProps {
  children: ReactNode
}

export function InstructionsContextProvider({
  children,
}: InstructionsContextProviderProps) {
  const [instructions, setInstructions] = useState('')

  return (
    <InstructionsContext.Provider value={{ instructions, setInstructions }}>
      {children}
    </InstructionsContext.Provider>
  )
}
