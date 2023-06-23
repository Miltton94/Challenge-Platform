'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { BiLinkExternal } from 'react-icons/bi'
import Button from './Button'
import { IChallenge } from '@/types/challenge'
import { useRouter } from 'next/navigation'
import { MouseEvent } from 'react'

interface ChallengeCardProps {
  challenge: IChallenge
}

const ChallengeCard = ({ challenge }: ChallengeCardProps) => {
  const { push } = useRouter()

  function navigateToTag(e: MouseEvent, tag: string) {
    e.preventDefault()
    push(`/challenges/tag/${tag}`)
  }

  return (
    <Link
      href={`/challenges/${challenge.slug}`}
      className="w-full rounded-md border border-solid border-[transparent] bg-shape px-6 py-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl"
    >
      <header className="flex w-full items-center justify-between">
        <span
          className={clsx('rounded-sm px-3 py-1 font-fira text-background', {
            'bg-primary': challenge.difficulty === 'Easy',
            'bg-orange': challenge.difficulty === 'Medium',
            'bg-red': challenge.difficulty === 'Hard',
          })}
        >
          {challenge.difficulty}
        </span>

        <BiLinkExternal className="text-2xl transition-colors hover:text-primary" />
      </header>

      <h3 className="mt-5 text-xl text-title">{challenge.title}</h3>

      <p className="mt-2 text-sm">{challenge.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        {challenge.tags.map((tag) => {
          return (
            <Button
              key={tag.id}
              title={tag.name}
              onClick={(event) => navigateToTag(event, tag.slug)}
            />
          )
        })}
      </div>
    </Link>
  )
}

export default ChallengeCard
