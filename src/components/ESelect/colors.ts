export default {
  primary: {
    default: {
      initial: 'bg-primary-500/[.06] dark:bg-primary-200/[.06] rounded',
      focused: 'outline outline-primary-500/50 dark:outline-primary-200/50',
      unfocused: 'hover:bg-primary-500/10 dark:hover:bg-primary-200/10'
    },
    outlined: {
      initial: 'bg-transparent border border-secondary-500/70 dark:border-secondary-200/70 rounded',
      focused: 'outline outline-primary-500/50 dark:outline-primary-200/50',
      unfocused:
        'hover:bg-primary-500/[.03] dark:hover:bg-primary-200/[.03] hover:border-secondary-500/50 dark:hover:border-secondary-200/50'
    },
    text: {
      initial: 'bg-transparent border-b',
      focused: 'border-primary-500/50 dark:border-primary-200/50',
      unfocused:
        'border-secondary-500/70 dark:border-secondary-200/70 hover:border-secondary-500/50 dark:hover:border-secondary-200/50'
    }
  },

  secondary: {
    default: {
      initial: 'bg-secondary-500/[.06] dark:bg-secondary-200/[.06] rounded',
      focused: 'outline outline-secondary-500/50 dark:outline-secondary-200/50',
      unfocused: 'hover:bg-secondary-500/10 dark:hover:bg-secondary-200/10'
    },
    outlined: {
      initial: 'bg-transparent border border-secondary-500/70 dark:border-secondary-200/70 rounded',
      focused: 'outline outline-secondary-500/50 dark:outline-secondary-200/50',
      unfocused:
        'hover:bg-secondary-500/[.03] dark:hover:bg-secondary-200/[.03] hover:border-secondary-500/50 dark:hover:border-secondary-200/50'
    },
    text: {
      initial: 'bg-transparent border-b',
      focused: 'border-secondary-500/50 dark:border-secondary-200/50',
      unfocused:
        'border-secondary-500/70 dark:border-secondary-200/70 hover:border-secondary-500/50 dark:hover:border-secondary-200/50'
    }
  },
  success: {
    default: {
      initial: 'bg-success-500/[.06] dark:bg-success-200/[.06] rounded',
      focused: 'outline outline-success-500/50 dark:outline-success-200/50',
      unfocused: 'hover:bg-success-500/10 dark:hover:bg-success-200/10'
    },
    outlined: {
      initial: 'bg-transparent border border-success-500/70 dark:border-success-200/70 rounded',
      focused: 'outline outline-success-500/50 dark:outline-success-200/50',
      unfocused:
        'hover:bg-success-500/[.03] dark:hover:bg-success-200/[.03] hover:border-success-500/50 dark:hover:border-success-200/50'
    },
    text: {
      initial: 'bg-transparent border-b',
      focused: 'border-success-500/50 dark:border-success-200/50',
      unfocused:
        'border-success-500/70 dark:border-success-200/70 hover:border-success-500/50 dark:hover:border-success-200/50'
    }
  },
  error: {
    default: {
      initial: 'bg-error-500/[.06] dark:bg-error-200/[.06] rounded',
      focused: 'outline outline-error-500/50 dark:outline-error-200/50',
      unfocused: 'hover:bg-error-500/10 dark:hover:bg-error-200/10'
    },
    outlined: {
      initial: 'bg-transparent border border-error-500/70 dark:border-error-200/70 rounded',
      focused: 'outline outline-error-500/50 dark:outline-error-200/50',
      unfocused:
        'hover:bg-error-500/[.03] dark:hover:bg-error-200/[.03] hover:border-error-500/50 dark:hover:border-error-200/50'
    },
    text: {
      initial: 'bg-transparent border-b',
      focused: 'border-error-500/50 dark:border-error-200/50',
      unfocused: 'border-error-500/70 dark:border-error-200/70 hover:border-error-500/50 dark:hover:border-error-200/50'
    }
  }
}
