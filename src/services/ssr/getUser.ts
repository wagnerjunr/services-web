import { cookies } from 'next/headers'

export const getUser = async () => {
  // const cookies = cookies().get('refreshToken')?.value
  // if (!cookies) return null

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: { Cookie: cookies().toString() },
    cache: 'no-cache',
  })

  const data = await res.json()

  if (res.status !== 200) {
    return null
  }

  console.log(data)
  return data
}
