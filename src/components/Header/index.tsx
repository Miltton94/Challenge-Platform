import Link from 'next/link'
import AvatarWithMenu from './AvatarWithMenu'

const Header = () => {
  return (
    <header className="flex h-24 items-center justify-between px-6 shadow-shadow">
      <Link href="/" className="font-fira text-2xl font-normal text-primary">
        upskill.code
      </Link>

      <AvatarWithMenu />
    </header>
  )
}

export default Header
