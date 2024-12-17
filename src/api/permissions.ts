import { createContext, useContext } from 'react'

export type Permissions = {
  granted: (permission: string) => boolean
  request: (permission: string | string[]) => Promise<boolean>
  revoke: (permission: string) => void
  assert: (permission: string) => void
}

export const Permissions = createContext<Permissions>({
  granted: () => {
    throw new Error('PermissionContext not provided')
  },
  request: () => {
    throw new Error('PermissionContext not provided')
  },
  revoke: () => {
    throw new Error('PermissionContext not provided')
  },
  assert: () => {
    throw new Error('PermissionContext not provided')
  },
})

export const usePermissions = () => {
  return useContext(Permissions)
}
