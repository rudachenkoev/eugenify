export default {
  primary: {
    default: {
      initial: 'bg-primary-50 border-b border-secondary-200 rounded outline-primary-300',
      focused: 'bg-primary-75 outline',
      unfocused: 'hover:bg-primary-75 hover:placeholder:text-secondary-300'
    },
    outlined: {
      initial: 'bg-transparent border border-secondary-200 rounded outline-primary-300',
      focused: 'border-primary-300 outline',
      unfocused: 'hover:border-primary-300'
    },
    text: {
      initial: 'bg-transparent border-b outline-primary-300',
      focused: 'border-primary-300',
      unfocused: 'border-secondary-200 hover:border-primary-300'
    }
  },
  secondary: {
    default: {
      initial: 'bg-secondary-50 border-b border-secondary-200 rounded outline-secondary-300',
      focused: 'bg-secondary-75 outline',
      unfocused: 'hover:bg-secondary-75 hover:placeholder:text-secondary-300'
    },
    outlined: {
      initial: 'bg-transparent border border-secondary-200 rounded outline-secondary-300',
      focused: 'border-secondary-300 outline',
      unfocused: 'hover:border-secondary-300'
    },
    text: {
      initial: 'bg-transparent border-b outline-secondary-300',
      focused: 'border-secondary-300',
      unfocused: 'border-secondary-200 hover:border-secondary-300'
    }
  },
  success: {
    default: {
      initial: 'bg-success-50 border-b border-secondary-200 rounded outline-success-300',
      focused: 'bg-success-75 outline',
      unfocused: 'hover:bg-success-75 hover:placeholder:text-secondary-300'
    },
    outlined: {
      initial: 'bg-transparent border border-secondary-200 rounded outline-success-300',
      focused: 'border-success-300 outline',
      unfocused: 'hover:border-success-300'
    },
    text: {
      initial: 'bg-transparent border-b outline-success-300',
      focused: 'border-success-300',
      unfocused: 'border-secondary-200 hover:border-success-300'
    }
  },
  error: {
    default: {
      initial: 'bg-error-50 border-b border-secondary-200 rounded outline-error-300',
      focused: 'bg-error-75 outline',
      unfocused: 'hover:bg-error-75 hover:placeholder:text-secondary-300'
    },
    outlined: {
      initial: 'bg-transparent border border-secondary-200 rounded outline-error-300',
      focused: 'border-error-300 outline',
      unfocused: 'hover:border-error-300'
    },
    text: {
      initial: 'bg-transparent border-b outline-error-300',
      focused: 'border-error-300',
      unfocused: 'border-secondary-200 hover:border-error-300'
    }
  }
}
