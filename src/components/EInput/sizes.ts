import size from '@configs/sizes'

const { 'x-small': xSmall, small, medium, large, 'x-large': xLarge } = size

export default {
  'x-small': {
    wrapper: xSmall.height,
    field: `text-xs placeholder:text-xs ${xSmall.padding}`,
    prependIcon: xSmall.marginLeft,
    appendIcon: xSmall.marginRight
  },
  small: {
    wrapper: small.height,
    field: `text-sm placeholder:text-sm ${small.padding}`,
    prependIcon: small.marginLeft,
    appendIcon: small.marginRight
  },
  medium: {
    wrapper: medium.height,
    field: `text-sm placeholder:text-sm ${medium.padding}`,
    prependIcon: medium.marginLeft,
    appendIcon: medium.marginRight
  },
  large: {
    wrapper: large.height,
    field: `text-base placeholder:text-base ${large.padding}`,
    prependIcon: large.marginLeft,
    appendIcon: large.marginRight
  },
  'x-large': {
    wrapper: xLarge.height,
    field: `text-base placeholder:text-base ${xLarge.padding}`,
    prependIcon: xLarge.marginLeft,
    appendIcon: xLarge.marginRight
  }
}
