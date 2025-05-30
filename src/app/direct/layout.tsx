import { Navbar } from '@/components/Layout/Navbar/Navbar'

export default function Layout({ children }: any) {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <Navbar />
      {children}
    </div>
  )
}
