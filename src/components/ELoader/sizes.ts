import size from '@configs/sizes'

const { 'x-small': xSmall, small, medium, large, 'x-large': xLarge } = size

export default {
  'x-small': {
    spinner: xSmall.iconSize,
    text: `text-xs ${xSmall.marginLeft}`
  },
  small: {
    spinner: small.iconSize,
    text: `text-sm ${small.marginLeft}`
  },
  medium: {
    spinner: medium.iconSize,
    text: `text-base ${medium.marginLeft}`
  },
  large: {
    spinner: large.iconSize,
    text: `text-lg ${large.marginLeft}`
  },
  'x-large': {
    spinner: xLarge.iconSize,
    text: `text-xl ${xLarge.marginLeft}`
  }
}
