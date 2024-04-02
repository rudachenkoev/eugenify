import size from '@/configs/sizes'

const { 'x-small': xSmall, small, medium, large, 'x-large': xLarge } = size

export default {
  'x-small': {
    btn: `${xSmall.height} text-xs ${xSmall.padding}`,
    icon: `${xSmall.iconSize} bg-cover`,
    prependIcon: `${xSmall.marginRight} ${xSmall.iconSize} bg-cover`,
    appendIcon: `${xSmall.marginLeft} ${xSmall.iconSize} bg-cover`
  },
  small: {
    btn: `${small.height} text-sm ${small.padding}`,
    icon: `${small.iconSize} bg-cover`,
    prependIcon: `${small.marginRight} ${small.iconSize} bg-cover`,
    appendIcon: `${small.marginLeft} ${small.iconSize} bg-cover`
  },
  medium: {
    btn: `${medium.height} text-base ${medium.padding}`,
    icon: `${medium.iconSize} bg-cover`,
    prependIcon: `${medium.marginRight} ${medium.iconSize} bg-cover`,
    appendIcon: `${medium.marginLeft} ${medium.iconSize} bg-cover`
  },
  large: {
    btn: `${large.height} text-lg ${large.padding}`,
    icon: `${large.iconSize} bg-cover`,
    prependIcon: `${large.marginRight} ${large.iconSize} bg-cover`,
    appendIcon: `${large.marginLeft} ${large.iconSize} bg-cover`
  },
  'x-large': {
    btn: `${xLarge.height} text-xl ${xLarge.padding}`,
    icon: `${xLarge.iconSize} bg-cover`,
    prependIcon: `${xLarge.marginRight} ${xLarge.iconSize} bg-cover`,
    appendIcon: `${xLarge.marginLeft} ${xLarge.iconSize} bg-cover`
  }
}
