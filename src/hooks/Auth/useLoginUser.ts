import api from '@/services/api'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { z } from 'zod'
import { AxiosError } from 'axios'

const loginZod = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export interface LoginRequest {
  email: string
  password: string
}

type ResponseData = {
  message: string
}

export const useLoginUser = () => {
  const LoginUserFn = async ({ data }: { data: LoginRequest }) => {
    try {
      const response = await api.post('/auth/login', data)
      toast.success('Sucesso', {
        description: response.data.message,
        action: {
          label: 'OK',
          onClick: () => toast.dismiss(),
        },
      })
      if (response.status === 200) {
        return response.data as ResponseData
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error('Erro!', {
          description:
            error.response?.data.message || 'Erro interno do servidor.',
          action: {
            label: 'OK',
            onClick: () => toast.dismiss(),
          },
        })
      }
      throw error
    }
  }

  return useMutation({
    mutationKey: ['LoginUser'],
    mutationFn: LoginUserFn,
  })
}
