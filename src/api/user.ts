import { createContext, useContext } from 'react'

export type UserData = {
  profile: {
    name: string
    email: string
  }
  billingProfile: {
    address: string
  }
}

type AuthorizedUserContext = {
  isLoggedIn: true
  data: UserData
  logout: () => void
}

type AnonymousUserContext = {
  isLoggedIn: false
  login: () => void
}

export type UserContext = AuthorizedUserContext | AnonymousUserContext

export const User = createContext<UserContext>({
  isLoggedIn: false,
  login: () => {
    throw new Error('UserContext not provided')
  },
})

export const useUser = () => {
  return useContext(User)
}

export enum UserPermission {
  Basic = 'User.Basic',
}
