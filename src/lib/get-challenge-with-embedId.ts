import { prisma } from './prisma'

export async function getChallengeWithEmbedId(slug: string) {
  const embedId = await prisma.challenge.findUnique({
    where: {
      slug,
    },
  })

  return embedId
}
