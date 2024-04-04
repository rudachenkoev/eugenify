import size from '@configs/sizes'

const { 'x-small': xSmall, small, medium, large, 'x-large': xLarge } = size

export default {
  'x-small': {
    wrapper: xSmall.height,
    input: `text-xs placeholder:text-xs ${xSmall.padding}`,
    label: 'text-[0.625em] leading-3',
    prependIcon: xSmall.marginLeft,
    appendIcon: xSmall.marginRight
  },
  small: {
    wrapper: small.height,
    input: `text-sm placeholder:text-sm ${small.padding}`,
    label: 'text-xs',
    prependIcon: small.marginLeft,
    appendIcon: small.marginRight
  },
  medium: {
    wrapper: medium.height,
    input: `text-sm placeholder:text-sm ${medium.padding}`,
    label: 'text-xs',
    prependIcon: medium.marginLeft,
    appendIcon: medium.marginRight
  },
  large: {
    wrapper: large.height,
    input: `text-base placeholder:text-base ${large.padding}`,
    label: 'text-sm',
    prependIcon: large.marginLeft,
    appendIcon: large.marginRight
  },
  'x-large': {
    wrapper: xLarge.height,
    input: `text-base placeholder:text-base ${xLarge.padding}`,
    label: 'text-sm',
    prependIcon: xLarge.marginLeft,
    appendIcon: xLarge.marginRight
  }
}
