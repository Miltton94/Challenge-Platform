import Challenges from '@/components/Challenges'
import Header from '@/components/Header'
import { prisma } from '@/lib/prisma'

export default async function Home() {
  const challenges = await prisma.challenge.findMany({
    include: {
      tags: {
        include: {
          tag: true,
        },
      },
    },
  })

  const parsedChallenges = challenges.map((challenge) => ({
    ...challenge,
    tags: [...challenge.tags.map((tag) => tag.tag)],
  }))

  return (
    <main>
      <Header />
      <Challenges title="All Challenges" challenges={parsedChallenges} />
    </main>
  )
}
