import { InstructionsContext } from '@/context/InstructionsContext'
import { useContext } from 'react'

export const useInstructions = () => {
  return useContext(InstructionsContext)
}
