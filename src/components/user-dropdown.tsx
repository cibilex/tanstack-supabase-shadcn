import { LogOut } from 'lucide-react'
import { toast } from 'sonner'
import { useNavigate } from '@tanstack/react-router'
import type { IUser } from '@/server/user.server'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLogoutMutation } from '@/queries/user.queries'
import { emailAbbreviation } from '@/utils/formatter'

function UserAvatar({ email }: { email: string }) {
  return (
    <Avatar>
      <AvatarImage
        src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png"
        alt={email}
      />
      <AvatarFallback className="text-xs">
        {emailAbbreviation(email)}
      </AvatarFallback>
    </Avatar>
  )
}

function UserLogoutItem() {
  const { mutateAsync, isPending } = useLogoutMutation()

  const navigate = useNavigate()
  const handleLogout = () => {
    if (isPending) return
    toast.promise(
      mutateAsync().then(() => {
        navigate({ to: '/login' })
      }),
      {
        loading: 'Logging out...',
        success: 'Logged out successfully',
        error: 'Failed to logout',
      },
    )
  }
  return (
    <DropdownMenuGroup>
      <DropdownMenuItem onClick={handleLogout}>
        <LogOut />
        Logout
      </DropdownMenuItem>
    </DropdownMenuGroup>
  )
}
const DropdownMenuUserProfileDemo = ({ user }: { user: IUser }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost">
            <UserAvatar email={user.email} />{' '}
          </Button>
        }
      ></DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto">
        <div className="flex items-center gap-2 px-2 py-1.5">
          <UserAvatar email={user.email} />
          <div className="flex flex-1 flex-col">
            <span className="text-muted-foreground text-xs ml-auto">
              {new Date(user.createdAt).toLocaleDateString()}
            </span>
            <span className="text-popover-foreground">{user.email}</span>
          </div>
        </div>
        <DropdownMenuSeparator />
        <UserLogoutItem />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuUserProfileDemo
