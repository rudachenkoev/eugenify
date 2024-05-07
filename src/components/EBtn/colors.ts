import { tw } from '@/helpers'

export default {
  primary: {
    default: tw`border-none bg-primary-500 text-neutral-100 hover:bg-primary-400 dark:bg-primary-200 dark:text-neutral-950 dark:hover:bg-primary-100`,
    outlined: tw`border border-primary-500 bg-transparent text-primary-500 hover:border-primary-400 hover:text-primary-400 dark:border-primary-200 dark:text-primary-200 dark:hover:border-primary-100 dark:hover:text-primary-100`,
    text: tw`border-none bg-transparent text-primary-500 hover:text-primary-400 dark:text-primary-200 dark:hover:text-primary-100`
  },
  secondary: {
    default: tw`border-none bg-secondary-500 text-neutral-100 hover:bg-secondary-400 dark:bg-secondary-200 dark:text-neutral-950 dark:hover:bg-secondary-100`,
    outlined: tw`border border-secondary-500 bg-transparent text-secondary-500 hover:border-secondary-400 hover:text-secondary-400 dark:border-secondary-200 dark:text-secondary-200 dark:hover:border-secondary-100 dark:hover:text-secondary-100`,
    text: tw`border-none bg-transparent text-secondary-500 hover:text-secondary-400 dark:text-secondary-200 dark:hover:text-secondary-100`
  },
  success: {
    default: tw`border-none bg-success-500 text-neutral-100 hover:bg-success-400 dark:bg-success-200 dark:text-neutral-950 dark:hover:bg-success-100`,
    outlined: tw`border border-success-500 bg-transparent text-success-500 hover:border-success-400 hover:text-success-400 dark:border-success-200 dark:text-success-200 dark:hover:border-success-100 dark:hover:text-success-100`,
    text: tw`border-none bg-transparent text-success-500 hover:text-success-400 dark:text-success-200 dark:hover:text-success-100`
  },
  error: {
    default: tw`border-none bg-error-500 text-neutral-100 hover:bg-error-400 dark:bg-error-200 dark:text-neutral-950 dark:hover:bg-error-100`,
    outlined: tw`border border-error-500 bg-transparent text-error-500 hover:border-error-400 hover:text-error-100 hover:text-error-400 dark:border-error-200 dark:text-error-200 dark:hover:border-error-100`,
    text: tw`border-none bg-transparent text-error-500 hover:text-error-400 dark:text-error-200 dark:hover:text-error-100`
  }
}
