import { Spotlight } from 'lucide-react'
import { Link, useRouteContext } from '@tanstack/react-router'
import { Fragment } from 'react/jsx-runtime'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import DropdownMenuUserProfileDemo from './user-dropdown'
import type { ButtonVariantProps } from './ui/button'
import type { LinkOptions } from '@tanstack/react-router'

type AppLink = LinkOptions & { label: string; variant: ButtonVariantProps }
const publicLinks: Array<AppLink> = [
  {
    to: '/login',
    label: 'Log in',
    variant: 'outline',
  },
  {
    to: '/register',
    label: 'Sign up',
    variant: 'default',
  },
]
const privateLinks: Array<AppLink> = [
  {
    to: '/',
    label: 'Home',
    variant: 'secondary',
  },
]

function LinkItems({ links }: { links: Array<AppLink> }) {
  return (
    <div className="flex items-center gap-3 ">
      {links.map(({ label, ...link }, index) => (
        <Fragment key={link.to}>
          <Link
            type="button"
            to={link.to}
            activeProps={{
              className: '!shadow-md  shadow-foreground/30',
            }}
          >
            <Button {...link} key={link.to} size="lg">
              {label}
            </Button>
          </Link>
          {index !== links.length - 1 && <Separator orientation="vertical" />}
        </Fragment>
      ))}
    </div>
  )
}

function UserSection() {
  const { user } = useRouteContext({ from: '__root__' })

  if (user) {
    return <DropdownMenuUserProfileDemo user={user} />
  } else return <LinkItems links={publicLinks} />
}

function Navbar() {
  return (
    <header className=" py-2 bg-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-1">
            <Spotlight />
            <span className="font-bold text-black">Auth Demo</span>
          </Link>

          <LinkItems links={privateLinks} />
        </div>
        <UserSection />
      </div>
    </header>
  )
}

export default Navbar
