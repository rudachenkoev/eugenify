export default {
  primary: {
    default: {
      initial: 'bg-primary/[.06] dark:bg-primary-dark/[.06] rounded',
      focused: 'outline outline-primary/50 dark:outline-primary-dark/50',
      unfocused: 'hover:bg-primary/10 dark:hover:bg-primary-dark/10'
    },
    outlined: {
      initial: 'bg-transparent border border-secondary/70 dark:border-secondary-dark/70 rounded',
      focused: 'outline outline-primary/50 dark:outline-primary-dark/50',
      unfocused:
        'hover:bg-primary/[.03] dark:hover:bg-primary-dark/[.03] hover:border-secondary/50 dark:hover:border-secondary-dark/50'
    },
    text: {
      initial: 'bg-transparent border-b',
      focused: 'border-primary/50 dark:border-primary-dark/50',
      unfocused:
        'border-secondary/70 dark:border-secondary-dark/70 hover:border-secondary/50 dark:hover:border-secondary-dark/50'
    }
  },

  secondary: {
    default: {
      initial: 'bg-secondary/[.06] dark:bg-secondary-dark/[.06] rounded',
      focused: 'outline outline-secondary/50 dark:outline-secondary-dark/50',
      unfocused: 'hover:bg-secondary/10 dark:hover:bg-secondary-dark/10'
    },
    outlined: {
      initial: 'bg-transparent border border-secondary/70 dark:border-secondary-dark/70 rounded',
      focused: 'outline outline-secondary/50 dark:outline-secondary-dark/50',
      unfocused:
        'hover:bg-secondary/[.03] dark:hover:bg-secondary-dark/[.03] hover:border-secondary/50 dark:hover:border-secondary-dark/50'
    },
    text: {
      initial: 'bg-transparent border-b',
      focused: 'border-secondary/50 dark:border-secondary-dark/50',
      unfocused:
        'border-secondary/70 dark:border-secondary-dark/70 hover:border-secondary/50 dark:hover:border-secondary-dark/50'
    }
  },
  success: {
    default: {
      initial: 'bg-success/[.06] dark:bg-success-dark/[.06] rounded',
      focused: 'outline outline-success/50 dark:outline-success-dark/50',
      unfocused: 'hover:bg-success/10 dark:hover:bg-success-dark/10'
    },
    outlined: {
      initial: 'bg-transparent border border-success/70 dark:border-success-dark/70 rounded',
      focused: 'outline outline-success/50 dark:outline-success-dark/50',
      unfocused:
        'hover:bg-success/[.03] dark:hover:bg-success-dark/[.03] hover:border-success/50 dark:hover:border-success-dark/50'
    },
    text: {
      initial: 'bg-transparent border-b',
      focused: 'border-success/50 dark:border-success-dark/50',
      unfocused:
        'border-success/70 dark:border-success-dark/70 hover:border-success/50 dark:hover:border-success-dark/50'
    }
  },
  error: {
    default: {
      initial: 'bg-error/[.06] dark:bg-error-dark/[.06] rounded',
      focused: 'outline outline-error/50 dark:outline-error-dark/50',
      unfocused: 'hover:bg-error/10 dark:hover:bg-error-dark/10'
    },
    outlined: {
      initial: 'bg-transparent border border-error/70 dark:border-error-dark/70 rounded',
      focused: 'outline outline-error/50 dark:outline-error-dark/50',
      unfocused:
        'hover:bg-error/[.03] dark:hover:bg-error-dark/[.03] hover:border-error/50 dark:hover:border-error-dark/50'
    },
    text: {
      initial: 'bg-transparent border-b',
      focused: 'border-error/50 dark:border-error-dark/50',
      unfocused: 'border-error/70 dark:border-error-dark/70 hover:border-error/50 dark:hover:border-error-dark/50'
    }
  }
}
