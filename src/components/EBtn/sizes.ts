import size from '@configs/sizes'

const { 'x-small': xSmall, small, medium, large, 'x-large': xLarge } = size

export default {
  'x-small': {
    btn: `${xSmall.height} text-xs ${xSmall.padding}`,
    icon: xSmall.iconSize,
    prependIcon: `${xSmall.marginRight} ${xSmall.iconSize}`,
    appendIcon: `${xSmall.marginLeft} ${xSmall.iconSize}`
  },
  small: {
    btn: `${small.height} text-sm ${small.padding}`,
    icon: small.iconSize,
    prependIcon: `${small.marginRight} ${small.iconSize}`,
    appendIcon: `${small.marginLeft} ${small.iconSize}`
  },
  medium: {
    btn: `${medium.height} text-base ${medium.padding}`,
    icon: medium.iconSize,
    prependIcon: `${medium.marginRight} ${medium.iconSize}`,
    appendIcon: `${medium.marginLeft} ${medium.iconSize}`
  },
  large: {
    btn: `${large.height} text-lg ${large.padding}`,
    icon: large.iconSize,
    prependIcon: `${large.marginRight} ${large.iconSize}`,
    appendIcon: `${large.marginLeft} ${large.iconSize}`
  },
  'x-large': {
    btn: `${xLarge.height} text-xl ${xLarge.padding}`,
    icon: xLarge.iconSize,
    prependIcon: `${xLarge.marginRight} ${xLarge.iconSize}`,
    appendIcon: `${xLarge.marginLeft} ${xLarge.iconSize}`
  }
}
