import { Spotlight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import type { ButtonVariantProps } from './ui/button'
import type { LinkOptions } from '@tanstack/react-router'

type AppLink = LinkOptions & { label: string; variant: ButtonVariantProps }
const appLinks: Array<AppLink> = [
  {
    to: '/login',
    label: 'Login',
    variant: 'outline',
  },
  {
    to: '/register',
    label: 'Register',
    variant: 'default',
  },
]

function Navbar() {
  return (
    <header className=" py-2 bg-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-1">
          <Spotlight />
          <span className="font-bold text-black">Auth Demo</span>
        </Link>

        <div className="flex items-center gap-3 ">
          {appLinks.map(({ label, ...link }, index) => (
            <>
              <Button
                {...link}
                key={link.to}
                size="lg"
                render={
                  <Link
                    to={link.to}
                    activeProps={{
                      className: '!shadow-md  shadow-foreground/30',
                    }}
                  >
                    {label}
                  </Link>
                }
              />
              {index !== appLinks.length - 1 && (
                <Separator orientation="vertical" />
              )}
            </>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar
