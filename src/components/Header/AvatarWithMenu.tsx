'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

const AvatarWithMenu = () => {
  const { data, status } = useSession()

  console.log(data, status)
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="h-14 w-14 overflow-hidden rounded-full border-2 border-text outline-none hover:border-primary">
          <Image
            src={data?.user?.image ? data.user.image : '/placeholder-user.svg'}
            alt="avatar"
            width={100}
            height={100}
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="flex flex-col gap-4 rounded-md bg-shape py-2 shadow-lg">
          {status === 'authenticated' ? (
            <DropdownMenu.Item
              onClick={() => signOut()}
              className="cursor-pointer px-4 outline-none"
            >
              Sair
            </DropdownMenu.Item>
          ) : (
            <DropdownMenu.Item
              onClick={() => signIn('github')}
              className="cursor-pointer px-4 outline-none"
            >
              Entrar
            </DropdownMenu.Item>
          )}

          <DropdownMenu.Arrow className="fill-shape" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default AvatarWithMenu
