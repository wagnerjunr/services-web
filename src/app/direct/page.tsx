'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { socket } from './_components/socket'
import { PageLayout } from '@/components/Layout/PageLayout/PageLayout'

export default function Home() {
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(event: any) {
    event.preventDefault()
    setIsLoading(true)
    console.log(value)
    socket.emit('message', value)

    setIsLoading(false)
  }

  const onButton = () => {
    socket.emit('room', true)
  }

  return (
    <PageLayout>
      <Button onClick={onButton}>Entrar</Button>

      <form onSubmit={onSubmit}>
        <input onChange={(e) => setValue(e.target.value)} />

        <button type="submit" disabled={isLoading}>
          Submit
        </button>
      </form>
    </PageLayout>
  )
}
