import { tw } from '@/helpers'

export default {
  primary: {
    default: {
      initial: tw`rounded border-b border-secondary-200 bg-primary-50 outline-primary-300`,
      focused: tw`bg-primary-75 outline`,
      unfocused: tw`hover:bg-primary-75 hover:placeholder:text-secondary-300`
    },
    outlined: {
      initial: tw`rounded border border-secondary-200 bg-transparent outline-primary-300`,
      focused: tw`border-primary-300 outline`,
      unfocused: tw`hover:border-primary-300`
    },
    text: {
      initial: tw`border-b bg-transparent outline-primary-300`,
      focused: tw`border-primary-300`,
      unfocused: tw`border-secondary-200 hover:border-primary-300`
    }
  },
  secondary: {
    default: {
      initial: tw`rounded border-b border-secondary-200 bg-secondary-50 outline-secondary-300`,
      focused: tw`bg-secondary-75 outline`,
      unfocused: tw`hover:bg-secondary-75 hover:placeholder:text-secondary-300`
    },
    outlined: {
      initial: tw`rounded border border-secondary-200 bg-transparent outline-secondary-300`,
      focused: tw`border-secondary-300 outline`,
      unfocused: tw`hover:border-secondary-300`
    },
    text: {
      initial: tw`border-b bg-transparent outline-secondary-300`,
      focused: tw`border-secondary-300`,
      unfocused: tw`border-secondary-200 hover:border-secondary-300`
    }
  },
  success: {
    default: {
      initial: tw`rounded border-b border-secondary-200 bg-success-50 outline-success-300`,
      focused: tw`bg-success-75 outline`,
      unfocused: tw`hover:bg-success-75 hover:placeholder:text-secondary-300`
    },
    outlined: {
      initial: tw`rounded border border-secondary-200 bg-transparent outline-success-300`,
      focused: tw`border-success-300 outline`,
      unfocused: tw`hover:border-success-300`
    },
    text: {
      initial: tw`border-b bg-transparent outline-success-300`,
      focused: tw`border-success-300`,
      unfocused: tw`border-secondary-200 hover:border-success-300`
    }
  },
  error: {
    default: {
      initial: tw`rounded border-b border-secondary-200 bg-error-50 outline-error-300`,
      focused: tw`bg-error-75 outline`,
      unfocused: tw`hover:bg-error-75 hover:placeholder:text-secondary-300`
    },
    outlined: {
      initial: tw`rounded border border-secondary-200 bg-transparent outline-error-300`,
      focused: tw`border-error-300 outline`,
      unfocused: tw`hover:border-error-300`
    },
    text: {
      initial: tw`border-b bg-transparent outline-error-300`,
      focused: tw`border-error-300`,
      unfocused: tw`border-secondary-200 hover:border-error-300`
    }
  }
}
