import size from '@configs/sizes'

const { 'x-small': xSmall, small, medium, large, 'x-large': xLarge } = size

export default {
  'x-small': {
    wrapper: xSmall.height,
    input: `text-xs placeholder:text-xs ${xSmall.padding}`,
    label: 'text-[0.625em] leading-3',
    prependIcon: `${xSmall.marginLeft} ${xSmall.iconSize}`,
    appendIcon: `${xSmall.marginRight} ${xSmall.iconSize}`
  },
  small: {
    wrapper: small.height,
    input: `text-sm placeholder:text-sm ${small.padding}`,
    label: 'text-xs',
    prependIcon: `${small.marginLeft} ${small.iconSize}`,
    appendIcon: `${small.marginRight} ${small.iconSize}`
  },
  medium: {
    wrapper: medium.height,
    input: `text-sm placeholder:text-sm ${medium.padding}`,
    label: 'text-xs',
    prependIcon: `${medium.marginLeft} ${medium.iconSize}`,
    appendIcon: `${medium.marginRight} ${medium.iconSize}`
  },
  large: {
    wrapper: large.height,
    input: `text-base placeholder:text-base ${large.padding}`,
    label: 'text-sm',
    prependIcon: `${large.marginLeft} ${large.iconSize}`,
    appendIcon: `${large.marginRight} ${large.iconSize}`
  },
  'x-large': {
    wrapper: xLarge.height,
    input: `text-base placeholder:text-base ${xLarge.padding}`,
    label: 'text-sm',
    prependIcon: `${xLarge.marginLeft} ${xLarge.iconSize}`,
    appendIcon: `${xLarge.marginRight} ${xLarge.iconSize}`
  }
}
