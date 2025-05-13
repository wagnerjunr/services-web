'use client'
import { useAuthStore } from '@/store/useAuthStore'

export default function Product() {
  const { user } = useAuthStore()
  console.log(user)
  return <div>
    {user?.name}
  </div>
}
