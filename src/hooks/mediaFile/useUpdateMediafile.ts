import api from '@/services/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'sonner'

export interface UpdateImageReq {
  file: File
}

export type UpdateImageRes = {
  url: string
  message?: string
}

export const useUpdateImage = () => {
  const UpdateImageFn = async ({
    data,
  }: {
    data: UpdateImageReq
  }): Promise<UpdateImageRes | undefined> => {
    try {
      const formData = new FormData()
      formData.append('file', data.file)
      console.log(formData)
      const response = await api.post(`/mediafile/update`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response.data as UpdateImageRes
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error('Erro!', {
          description:
            (error.response?.data as UpdateImageRes)?.message ||
            'Erro interno do servidor',
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
    mutationKey: ['UpdateImage'],
    mutationFn: UpdateImageFn,
  })
}
