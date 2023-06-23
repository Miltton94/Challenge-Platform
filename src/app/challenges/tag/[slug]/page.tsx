import Challenges from '@/components/Challenges'
import Header from '@/components/Header'
import { prisma } from '@/lib/prisma'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

type TagProps = {
  params: {
    slug: string
  }
}

const Tag = async ({ params: { slug } }: TagProps) => {
  const tag = await prisma.tag.findUnique({
    where: {
      slug,
    },
  })

  if (!tag) {
    redirect('/')
  }

  const challenges = await prisma.challenge.findMany({
    where: {
      tags: {
        some: {
          tagId: tag?.id,
        },
      },
    },
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
      <Challenges
        title={`${tag?.name} challenges`}
        challenges={parsedChallenges}
      />
    </main>
  )
}

export default Tag

export async function generateMetadata({
  params: { slug },
}: TagProps): Promise<Metadata> {
  const tag = await prisma.tag.findUnique({
    where: {
      slug,
    },
  })

  return {
    title: `${tag?.name} | upskill.code`,
    description: `Desafios de ${slug}`,
  }
}
