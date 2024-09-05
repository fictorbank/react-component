import { User } from '@/types/user'
import { StateCreator, create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface Session {
  user: User
  token: string
}

interface AuthState {
  isAuthenticated: boolean
  session?: Session
  setSession: (user?: Session) => void
  resetSessionStorage: () => void
  logout: () => void
}

const authStateCreator: StateCreator<AuthState> = set => ({
  isAuthenticated: false,
  sesssion: undefined,
  setSession: session => set({ session: session, isAuthenticated: !!session }),
  resetSessionStorage: () =>
    set({ session: undefined, isAuthenticated: false }),
  logout: () => set({ session: undefined, isAuthenticated: false })
})

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(authStateCreator, {
      name: 'fictorpay-operational-backoffice@auth-store'
    })
  )
)
