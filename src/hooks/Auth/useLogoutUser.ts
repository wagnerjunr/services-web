import api from '@/services/api'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { z } from 'zod'

type ResponseData = {
  message: string
}

export const useLogoutUser = () => {
  const LogoutUserFn = async () => {
    try {
      const response = await api.post('/auth/logout')
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
      toast.error('Erro!', {
        description: 'Erro ao enviar email.',
        action: {
          label: 'OK',
          onClick: () => toast.dismiss(),
        },
      })
      throw new Error('Erro ao enviar email')
    }
  }

  return useMutation({
    mutationKey: ['LogoutUser'],
    mutationFn: LogoutUserFn,
  })
}
