import { IChallenge } from '@/types/challenge'
import ChallengeCard from './ChallengeCard'

interface ChallengesProps {
  challenges: IChallenge[]
  title?: string
}

const Challenges = ({ challenges, title }: ChallengesProps) => {
  return (
    <section className="mx-auto mb-8 mt-12 w-full max-w-7xl px-4">
      <h2 className="mb-8 font-sans text-[2rem] font-semibold text-title">
        {title}
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-4">
        {challenges.map((challenge) => {
          return <ChallengeCard key={challenge.id} challenge={challenge} />
        })}
      </div>
    </section>
  )
}

export default Challenges
