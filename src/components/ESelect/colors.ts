export default {
  primary: {
    default: {
      initial: 'bg-primary-50 border-b border-secondary-200 rounded',
      focused: 'bg-primary-75 outline outline-primary-300',
      unfocused: 'hover:bg-primary-75 hover:placeholder:text-secondary-300'
    },
    outlined: {
      initial: 'bg-transparent border border-secondary-200 rounded',
      focused: 'border-primary-300 outline outline-primary-300',
      unfocused: 'hover:border-primary-300'
    },
    text: {
      initial: 'bg-transparent border-b',
      focused: 'border-primary-300',
      unfocused: 'border-secondary-200 hover:border-primary-300'
    }
  },
  secondary: {
    default: {
      initial: 'bg-secondary-50 border-b border-secondary-200 rounded',
      focused: 'bg-secondary-75 outline outline-secondary-300',
      unfocused: 'hover:bg-secondary-75 hover:placeholder:text-secondary-300'
    },
    outlined: {
      initial: 'bg-transparent border border-secondary-200 rounded',
      focused: 'border-secondary-300 outline outline-secondary-300',
      unfocused: 'hover:border-secondary-300'
    },
    text: {
      initial: 'bg-transparent border-b',
      focused: 'border-secondary-300',
      unfocused: 'border-secondary-200 hover:border-secondary-300'
    }
  },
  success: {
    default: {
      initial: 'bg-success-50 border-b border-secondary-200 rounded',
      focused: 'bg-success-75 outline outline-success-300',
      unfocused: 'hover:bg-success-75 hover:placeholder:text-secondary-300'
    },
    outlined: {
      initial: 'bg-transparent border border-secondary-200 rounded',
      focused: 'border-success-300 outline outline-success-300',
      unfocused: 'hover:border-success-300'
    },
    text: {
      initial: 'bg-transparent border-b',
      focused: 'border-success-300',
      unfocused: 'border-secondary-200 hover:border-success-300'
    }
  },
  error: {
    default: {
      initial: 'bg-error-50 border-b border-secondary-200 rounded',
      focused: 'bg-error-75 outline outline-error-300',
      unfocused: 'hover:bg-error-75 hover:placeholder:text-secondary-300'
    },
    outlined: {
      initial: 'bg-transparent border border-secondary-200 rounded',
      focused: 'border-error-300 outline outline-error-300',
      unfocused: 'hover:border-error-300'
    },
    text: {
      initial: 'bg-transparent border-b',
      focused: 'border-error-300',
      unfocused: 'border-secondary-200 hover:border-error-300'
    }
  }
}
