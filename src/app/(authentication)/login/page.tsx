'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLoginUser } from '@/hooks/Auth/useLoginUser'
import { ArrowBigLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { mutateAsync: loginUser, isPending } = useLoginUser()
  const router = useRouter()

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleLogin = async () => {
    if (!isValidEmail) return
    await loginUser({
      data: {
        email,
        password,
      },
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start md:justify-center mt-12 md:mt-0">
      <div className="flex flex-col md:border rounded-xl p-10 gap-4 w-full md:max-w-[420px]">
        <div className="flex gap-2 items-center justify-center mb-7 relative">
          <Button
            variant="ghost"
            className="w-fit absolute left-0 opacity-60"
            onClick={() => router.back()}
          >
            <ArrowBigLeft size={18} />
          </Button>
        </div>
        <p className="text-lg w-full text-center leading-tight text-neutral font-semibold">
          Seu Passaporte para experiências incríveis
        </p>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs text-neutral/70">
            Email
          </label>
          <Input
            placeholder="Insira seu endereço de email"
            id="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-xs text-neutral/70">
            Senha
          </label>
          <Input
            placeholder="Insira sua senha"
            id="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          className="w-full mt-0"
          disabled={!isValidEmail || isPending}
          onClick={handleLogin}
        >
          Entrar
        </Button>
      </div>
    </main>
  )
}
