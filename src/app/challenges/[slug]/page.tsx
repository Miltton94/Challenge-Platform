import ChallengePage from '@/components/ChallengePage'
import { getChallengeWithEmbedId } from '@/lib/get-challenge-with-embedId'
import { prisma } from '@/lib/prisma'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

type ChallengeProps = {
  params: {
    slug: string
  }
}

const Challenge = async ({ params: { slug } }: ChallengeProps) => {
  if (!slug) {
    redirect('/')
  }
  const embedId = await getChallengeWithEmbedId(slug)

  return <ChallengePage embedId={embedId} />
}

export default Challenge

export async function generateMetadata({
  params: { slug },
}: ChallengeProps): Promise<Metadata> {
  const embedId = await prisma.challenge.findUnique({
    where: {
      slug,
    },
  })

  return {
    title: `${embedId?.title} | upskill.code`,
    description: embedId?.description,
  }
}
