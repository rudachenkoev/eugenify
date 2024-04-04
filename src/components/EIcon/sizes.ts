import size from '@configs/sizes'

const { 'x-small': xSmall, small, medium, large, 'x-large': xLarge } = size

export default {
  'x-small': `${xSmall.iconSize} text-xs leading-none`,
  small: `${small.iconSize} text-sm leading-none`,
  medium: `${medium.iconSize} text-base leading-none`,
  large: `${large.iconSize} text-lg leading-none`,
  'x-large': `${xLarge.iconSize} text-xl leading-none`,
}
