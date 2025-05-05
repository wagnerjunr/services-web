import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_HOST_URL: z.string().url(),
  NEXT_PUBLIC_API_URL: z.string().url(),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_HOST_URL: process.env.NEXT_PUBLIC_HOST_URL,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
});
