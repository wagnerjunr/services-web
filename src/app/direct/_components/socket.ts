import { io } from 'socket.io-client'

export const socket = io('ws://localhost:3008', {
  reconnectionDelayMax: 10000,

  // auth: {
  //   token: "123"
  // },
})