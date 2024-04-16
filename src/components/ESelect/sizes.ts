import size from '@configs/sizes'

const { 'x-small': xSmall, small, medium, large, 'x-large': xLarge } = size

export default {
  'x-small': {
    wrapper: xSmall.height,
    field: `text-xs ${xSmall.padding}`,
    checklist: 'max-h-32',
    checklistItem: `text-xs ${xSmall.padding}`,
    label: 'text-[0.625em] leading-3',
    prependIcon: xSmall.marginLeft,
    appendIcon: xSmall.marginRight
  },
  small: {
    wrapper: small.height,
    field: `text-sm ${small.padding}`,
    checklist: 'max-h-36',
    checklistItem: `text-sm ${small.padding}`,
    label: 'text-xs',
    prependIcon: small.marginLeft,
    appendIcon: small.marginRight
  },
  medium: {
    wrapper: medium.height,
    field: `text-sm ${medium.padding}`,
    checklist: 'max-h-40',
    checklistItem: `text-sm ${medium.padding}`,
    label: 'text-xs',
    prependIcon: medium.marginLeft,
    appendIcon: medium.marginRight
  },
  large: {
    wrapper: large.height,
    field: `text-base ${large.padding}`,
    checklist: 'max-h-44',
    checklistItem: `text-base ${large.padding}`,
    label: 'text-sm',
    prependIcon: large.marginLeft,
    appendIcon: large.marginRight
  },
  'x-large': {
    wrapper: xLarge.height,
    field: `text-base ${xLarge.padding}`,
    checklist: 'max-h-48',
    checklistItem: `text-base ${xLarge.padding}`,
    label: 'text-sm',
    prependIcon: xLarge.marginLeft,
    appendIcon: xLarge.marginRight
  }
}
