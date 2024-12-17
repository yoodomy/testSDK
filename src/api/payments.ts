import { createContext, useContext } from 'react'

export type Payments = {
  charge: (amount: number) => Promise<void>
}

export const Payments = createContext<Payments>({
  charge: () => {
    throw new Error('PaymentsContext not provided')
  },
})

export const usePayments = () => {
  return useContext(Payments)
}

export enum PaymentsPermission {
  Charge = 'Payments.Charge',
}
