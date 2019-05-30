import { notifierAction } from '../../components/ui/DismissSnackbarAction'

export const typePending = name => `${name}_PENDING`
export const typeFulfilled = name => `${name}_FULFILLED`
export const typeRejected = name => `${name}_REJECTED`

export const errorNotification = ({ message, options }) => ({
  message,
  options: {
    persist: true,
    variant: 'error',
    action: notifierAction,
    ...options
  }
})

export const successNotification = (message, options = {}) => ({
  message,
  options: {
    variant: 'success',
    ...options
  }
})

export default {
  typePending,
  typeFulfilled,
  typeRejected
}