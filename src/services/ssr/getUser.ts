import { cookies } from 'next/headers'

export const getUser = async () => {
  const cookiesRefreshToken = (await cookies()).get('refreshToken')?.value
  const cookiesUser = (await cookies()).toString()

  if (!cookiesRefreshToken) return null

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: { Cookie: cookiesUser },
    cache: 'no-cache',
  })

  const data = await res.json()

  if (res.status !== 200) {
    return null
  }

  console.log(data)
  return data
}
