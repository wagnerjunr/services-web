"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from 'sonner'
import { CheckCheck, OctagonX, MessageSquareText, TriangleAlert } from 'lucide-react'

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
<Sonner
  theme={theme as ToasterProps['theme']}
  className="toaster group"
  toastOptions={{
    unstyled: true,
    classNames: {
      success: 'group-[.toaster]:bg-surface-success group-[.toaster]:text-success group-[.toaster]:border-success',
      error: 'group-[.toaster]:bg-surface-error group-[.toaster]:text-error group-[.toaster]:border-error',
      info: 'group-[.toaster]:bg-surface-info group-[.toaster]:text-info group-[.toaster]:border-info',
      warning: 'group-[.toaster]:bg-surface-warning group-[.toaster]:text-warning group-[.toaster]:border-warning',

      toast: 'group toast flex items-center gap-4 border-l-2 py-3 px-4 rounded-lg w-[340px]',
      title: 'text-sm font-bold',
      description: 'text-xs group-[.toast]:text-neutral w-[235px]',
      actionButton: 'text-xs w-7 group-[.toast]:bg-none',
    },
  }}
  icons={{
    success: <CheckCheck className="w-6 h-6" />,
    error: <OctagonX className="w-6 h-6" />,
    info: <MessageSquareText className="w-6 h-6" />,
    warning: <TriangleAlert className="w-6 h-6" />,
  }}
  {...props}
/>
  )
}

export { Toaster }
