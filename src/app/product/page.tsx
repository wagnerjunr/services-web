'use client'
import { useUpdateImage } from '@/hooks/mediaFile/useUpdateMediafile'
import { useAuthStore } from '@/store/useAuthStore'
import { useState } from 'react'

export default function Product() {
  const { user } = useAuthStore()
  const { mutateAsync } = useUpdateImage()
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedImage(file)

      // Criar URL para preview da imagem
      const fileUrl = URL.createObjectURL(file)
      setPreviewUrl(fileUrl)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedImage) {
      return
    }

    mutateAsync({
      data: {
        file: selectedImage,
      },
    })
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Página de Produto</h1>

      {user?.name && <p className="mb-4">Olá, {user.name}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <label className="block cursor-pointer">
            <span className="text-sm text-gray-500">
              Clique para selecionar uma imagem ou arraste e solte aqui
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          {previewUrl && (
            <div className="mt-4">
              <img
                src={previewUrl}
                alt="Preview"
                className="max-h-64 mx-auto rounded-lg"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
          disabled={!selectedImage}
        >
          Enviar Imagem
        </button>
      </form>
    </div>
  )
}
