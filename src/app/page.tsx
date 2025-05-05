import { Navbar } from '@/components/Layout/Navbar/Navbar'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      <Navbar />

      <div className="flex flex-col w-full min-h-full items-center justify-center px-5 py-6 gap-4 max-w-[1324px] mt-[80px]">
        <h1 className="font-header text-xl font-semibold w-full">
          Encontre sua vibe
        </h1>
      </div>
    </main>
  )
}
