import size from '@configs/sizes'

const { 'x-small': xSmall, small, medium, large, 'x-large': xLarge } = size

export default {
  'x-small': {
    btn: `${xSmall.height} text-xs ${xSmall.padding}`,
    prependIcon: xSmall.marginRight,
    appendIcon: xSmall.marginLeft
  },
  small: {
    btn: `${small.height} text-sm ${small.padding}`,
    prependIcon: small.marginRight,
    appendIcon: small.marginLeft
  },
  medium: {
    btn: `${medium.height} text-base ${medium.padding}`,
    prependIcon: medium.marginRight,
    appendIcon: medium.marginLeft
  },
  large: {
    btn: `${large.height} text-lg ${large.padding}`,
    prependIcon: large.marginRight,
    appendIcon: large.marginLeft
  },
  'x-large': {
    btn: `${xLarge.height} text-xl ${xLarge.padding}`,
    prependIcon: xLarge.marginRight,
    appendIcon: xLarge.marginLeft
  }
}
