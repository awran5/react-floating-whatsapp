type State = {
  isOpen: boolean
  isDelay: boolean
  isNotification: boolean
  message: string
}

type Action =
  | { type: 'open' }
  | { type: 'close' }
  | { type: 'delay' }
  | { type: 'notification' }
  | { type: 'message'; payload: string }

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'open':
      return {
        ...state,
        isOpen: true,
        isNotification: false
      }
    case 'close':
      return {
        ...state,
        isOpen: false
      }

    case 'delay':
      return {
        ...state,
        isDelay: false
      }
    case 'notification':
      return {
        ...state,
        isNotification: true
      }
    case 'message':
      return {
        ...state,
        message: action.payload
      }
    default:
      return state
  }
}
