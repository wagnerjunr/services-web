import { Input } from '@/components/ui/input'
import { getUser } from '@/services/ssr/getUser'
import { SyncAuthStore } from '@/store/synchAuthStore'
import { UserButton } from '../User/UserButton'
import { Button } from '@/components/ui/button'

export const Navbar = async () => {
  const user = await getUser()

  return (
    <nav className="min-h-[80px] max-h-[80px] min-w-full border-b flex items-center justify-center fixed top-0 bg-background backdrop-blur-xl z-30">
      <SyncAuthStore user={user || null} />
      <div className="flex w-full max-w-[1324px] items-center justify-between px-5">
        <div className="flex gap-4">
          <Input
            id="partySearch"
            placeholder="Procurar por Rolês..."
            className="h-9 w-[450px] hidden md:block rounded-[41px]"
          />
        </div>
        {user ? (
          <div className="flex items-center gap-4">
            <a href="/product">
              <Button>Adicionar Foto</Button>
            </a>
            <UserButton user={user} />
          </div>
        ) : (
          <>
            <a href="/login">Entrar</a>
          </>
        )}
      </div>
    </nav>
  )
}

export const dynamic = 'force-dynamic'
