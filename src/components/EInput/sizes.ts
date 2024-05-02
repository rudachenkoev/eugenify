import size from '@configs/sizes'

const { 'x-small': xSmall, small, medium, large, 'x-large': xLarge } = size

export default {
  'x-small': {
    wrapper: `min-w-32 ${xSmall.height}`,
    field: `text-xs ${xSmall.padding}`,
    prependIcon: xSmall.marginLeft,
    appendIcon: xSmall.marginRight
  },
  small: {
    wrapper: `min-w-36 ${small.height}`,
    field: `text-sm ${small.padding}`,
    prependIcon: small.marginLeft,
    appendIcon: small.marginRight
  },
  medium: {
    wrapper: `min-w-40 ${medium.height}`,
    field: `text-base ${medium.padding}`,
    prependIcon: medium.marginLeft,
    appendIcon: medium.marginRight
  },
  large: {
    wrapper: `min-w-44 ${large.height}`,
    field: `text-lg ${large.padding}`,
    prependIcon: large.marginLeft,
    appendIcon: large.marginRight
  },
  'x-large': {
    wrapper: `min-w-48 ${xLarge.height}`,
    field: `text-xl ${xLarge.padding}`,
    prependIcon: xLarge.marginLeft,
    appendIcon: xLarge.marginRight
  }
}
