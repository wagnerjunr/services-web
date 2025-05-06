import api from '@/services/api'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { z } from 'zod'
import { AxiosError } from 'axios'

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional()
});

export type RegisterRequest = z.infer<typeof bodySchema>;

type ResponseData = {
  message: string
}

export const useRegisterUser = () => {
  const RegisterUserFn = async ({ data }: { data: RegisterRequest }) => {
    try {
      const response = await api.post('/auth/register', data)
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
    mutationKey: ['RegisterUser'],
    mutationFn: RegisterUserFn,
  })
}
