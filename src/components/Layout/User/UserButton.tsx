'use client'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Building2, DoorOpen, Ticket, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { UserProps } from '@/types/databaseTypes'
import { useLogoutUser } from '@/hooks/Auth/useLogoutUser'

interface UserTagProps {
  user: UserProps
}
export const UserButton = ({ user }: UserTagProps) => {
  const router = useRouter()
 const { mutateAsync,isPending } = useLogoutUser()
  const handleLogout = async () => {
    try {
      await mutateAsync()
      router.push('/login')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus-visible:outline-none cursor-pointer">
        <Avatar>
          <AvatarFallback>W</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px] mt-2">
        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <Link href="/profile">
          <DropdownMenuItem className="hover:bg-surface-off">
            <User height={18} />
            Perfil
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="hover:bg-surface-off"
          onClick={handleLogout}
        >
          <DoorOpen height={18} />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
