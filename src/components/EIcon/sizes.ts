import size from '@configs/sizes'

const { 'x-small': xSmall, small, medium, large, 'x-large': xLarge } = size

export default {
  'x-small': `${xSmall.iconSize} text-xs`,
  small: `${small.iconSize} text-sm`,
  medium: `${medium.iconSize} text-base`,
  large: `${large.iconSize} text-lg`,
  'x-large': `${xLarge.iconSize} text-xl`
}
