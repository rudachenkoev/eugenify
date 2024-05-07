import { tw } from '@/helpers'

export default {
  primary: {
    default: {
      initial: tw`rounded border-b border-secondary-200 bg-primary-50`,
      focused: tw`bg-primary-75 outline outline-primary-300`,
      unfocused: tw`hover:bg-primary-75 hover:placeholder:text-secondary-300`
    },
    outlined: {
      initial: tw`rounded border border-secondary-200 bg-transparent`,
      focused: tw`border-primary-300 outline outline-primary-300`,
      unfocused: tw`hover:border-primary-300`
    },
    text: {
      initial: tw`border-b bg-transparent`,
      focused: tw`border-primary-300`,
      unfocused: tw`border-secondary-200 hover:border-primary-300`
    }
  },
  secondary: {
    default: {
      initial: tw`rounded border-b border-secondary-200 bg-secondary-50`,
      focused: tw`bg-secondary-75 outline outline-secondary-300`,
      unfocused: tw`hover:bg-secondary-75 hover:placeholder:text-secondary-300`
    },
    outlined: {
      initial: tw`rounded border border-secondary-200 bg-transparent`,
      focused: tw`border-secondary-300 outline outline-secondary-300`,
      unfocused: tw`hover:border-secondary-300`
    },
    text: {
      initial: tw`border-b bg-transparent`,
      focused: tw`border-secondary-300`,
      unfocused: tw`border-secondary-200 hover:border-secondary-300`
    }
  },
  success: {
    default: {
      initial: tw`rounded border-b border-secondary-200 bg-success-50`,
      focused: tw`bg-success-75 outline outline-success-300`,
      unfocused: tw`hover:bg-success-75 hover:placeholder:text-secondary-300`
    },
    outlined: {
      initial: tw`rounded border border-secondary-200 bg-transparent`,
      focused: tw`border-success-300 outline outline-success-300`,
      unfocused: tw`hover:border-success-300`
    },
    text: {
      initial: tw`border-b bg-transparent`,
      focused: tw`border-success-300`,
      unfocused: tw`border-secondary-200 hover:border-success-300`
    }
  },
  error: {
    default: {
      initial: tw`rounded border-b border-secondary-200 bg-error-50`,
      focused: tw`bg-error-75 outline outline-error-300`,
      unfocused: tw`hover:bg-error-75 hover:placeholder:text-secondary-300`
    },
    outlined: {
      initial: tw`rounded border border-secondary-200 bg-transparent`,
      focused: tw`border-error-300 outline outline-error-300`,
      unfocused: tw`hover:border-error-300`
    },
    text: {
      initial: tw`border-b bg-transparent`,
      focused: tw`border-error-300`,
      unfocused: tw`border-secondary-200 hover:border-error-300`
    }
  }
}
