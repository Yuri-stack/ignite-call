import { setCookie } from 'nookies'
import { prisma } from '@/src/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, username } = req.body

  const userExists = await prisma.user.findUnique({
    where: { username },
  })

  if (userExists)
    return res.status(400).json({
      message: 'Usuário já cadastrado',
    })

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  setCookie({ res }, '@ignite-call:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 dias
    path: '/',
  })

  return res.status(201).json(user)
}
