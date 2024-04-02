export default {
  primary: {
    default: {
      initial: 'bg-primary/[.06] rounded',
      focused: 'outline outline-primary/50',
      unfocused: 'hover:bg-primary/10'
    },
    outlined: {
      initial: 'bg-transparent border border-secondary/70 rounded',
      focused: 'outline outline-primary/50',
      unfocused: 'hover:bg-primary/[.03] hover:border-secondary/50'
    },
    text: {
      initial: 'bg-transparent border-b',
      focused: 'border-primary/50',
      unfocused: 'border-secondary/70 hover:border-secondary/50'
    }
  },

  secondary: {
    default: {
      initial: 'bg-secondary/[.06] rounded',
      focused: 'outline outline-secondary/50',
      unfocused: 'hover:bg-secondary/10'
    },
    outlined: {
      initial: 'bg-transparent border border-secondary/70 rounded',
      focused: 'outline outline-secondary/50',
      unfocused: 'hover:bg-secondary/[.03] hover:border-secondary/50'
    },
    text: {
      initial: 'bg-transparent border-b',
      focused: 'border-secondary/50',
      unfocused: 'border-secondary/70 hover:border-secondary/50'
    }
  },
  success: {
    default: {
      initial: 'bg-success/[.06] rounded',
      focused: 'outline outline-success/50',
      unfocused: 'hover:bg-success/10'
    },
    outlined: {
      initial: 'bg-transparent border border-secondary/70 rounded',
      focused: 'outline outline-success/50',
      unfocused: 'hover:bg-success/[.03] hover:border-secondary/50'
    },
    text: {
      initial: 'bg-transparent border-b',
      focused: 'border-success/50',
      unfocused: 'border-secondary/70 hover:border-secondary/50'
    }
  },
  error: {
    default: {
      initial: 'bg-error/[.06] rounded',
      focused: 'outline outline-error/50',
      unfocused: 'hover:bg-error/10'
    },
    outlined: {
      initial: 'bg-transparent border border-secondary/70 rounded',
      focused: 'outline outline-error/50',
      unfocused: 'hover:bg-error/[.03] hover:border-secondary/50'
    },
    text: {
      initial: 'bg-transparent border-b',
      focused: 'border-error/50',
      unfocused: 'border-secondary/70 hover:border-secondary/50'
    }
  }
}
