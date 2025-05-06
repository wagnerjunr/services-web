'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRegisterUser } from '@/hooks/Auth/useRegisterUser'
import { ArrowBigLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function RegisterPage() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [name, setName] = useState<string>('')

  const { mutateAsync: registerUser, isPending } = useRegisterUser()
  const router = useRouter()

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleLogin = async () => {
    if (!isValidEmail) return

    const res = await registerUser({
      data: {
        email,
        password,
        name,
      },
    })
    if (res) {
      router.push('/login')
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start md:justify-center mt-12 md:mt-0">
      <div className="flex flex-col md:border rounded-xl p-10 gap-4 w-full md:max-w-[420px]">
        <div className="flex gap-2 items-center justify-center mb-7 relative">
          <Button
            variant="ghost"
            className="w-fit absolute left-0 opacity-60 rounded-full border border-border"
            onClick={() => router.back()}
          >
            <ArrowBigLeft size={18} />
          </Button>
        </div>
        <p className="text-lg w-full text-center leading-tight text-neutral font-semibold">
          Faça login para continuar!
        </p>
        <div className="flex flex-col gap-2 mt-6">
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
          <label htmlFor="name" className="text-xs text-neutral/70">
            Nome
          </label>
          <Input
            placeholder="Insira seu nome"
            id="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <div className="flex flex-col gap-2">
          <label htmlFor="confirmPassword" className="text-xs text-neutral/70">
            Confirme a Senha
          </label>
          <Input
            placeholder="Confirme sua senha"
            id="confirmPassword"
            type="password"
            autoComplete="current-password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <Button
          className="w-full mt-4"
          disabled={
            !isValidEmail ||
            isPending ||
            password !== confirmPassword ||
            !name ||
            !password ||
            !confirmPassword ||
            !email
          }
          onClick={handleLogin}
        >
          Entrar
        </Button>
        <p className="text-sm">
          Já possui conta?
          <span
            onClick={() => router.push('/login')}
            className="hover:underline text-primary cursor-pointer"
          >
            {' '}
            Entrar
          </span>
        </p>
      </div>
    </main>
  )
}
