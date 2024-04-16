import { StoryFn, Meta } from '@storybook/vue3'
import eSelect from './ESelect.vue'
import { ColorValues, IconTypeValues, SizeValues, VariantValues } from '@/configs'

const defaultItems = [
  'First option',
  'Second option',
  'Third option',
  'Fourth option',
  'Fifth option',
  'Sixth option',
  'Seventh option',
  'Eighth option',
  'Ninth option',
  'Tenth option',
  'Eleventh option',
  'The title is too long to fit everything on one line without hyphenation.'
]

export default {
  title: 'e-select',
  component: eSelect,
  tags: ['autodocs'],
  parameters: {
    docs: {
      controls: {
        sort: 'alpha'
      }
    }
  },
  args: {
    label: 'Label text',
    placeholder: 'Placeholder text',
    variant: 'default',
    color: 'primary',
    size: 'medium',
    prependIconType: 'filled',
    appendIconType: 'filled',
    disabled: false,
    flat: false,
    errorMessages: [],
    messages: [],
    displayedMessages: 1,
    items: defaultItems
  },
  argTypes: {
    modelValue: { control: false },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: SizeValues },
    color: { control: 'select', options: ColorValues },
    variant: { control: 'select', options: VariantValues },
    prependIcon: { name: 'prepend-icon', control: 'text' },
    prependIconType: {
      name: 'prepend-icon-type',
      control: 'select',
      options: IconTypeValues,
      if: { arg: 'prependIcon' }
    },
    prependIconColor: {
      name: 'prepend-icon-color',
      control: 'color',
      if: { arg: 'prependIcon' }
    },
    appendIcon: { name: 'append-icon', control: 'text' },
    appendIconType: {
      name: 'append-icon-type',
      control: 'select',
      options: IconTypeValues,
      if: { arg: 'appendIcon' }
    },
    appendIconColor: {
      name: 'append-icon-color',
      control: 'color',
      if: { arg: 'appendIcon' }
    },
    backgroundColor: { name: 'background-color', control: 'color', if: { arg: 'variant', eq: 'default' } },
    borderColor: { name: 'border-color', control: 'color', if: { arg: 'variant', eq: 'outlined' } },
    errorMessages: { name: 'error-messages', control: 'object' },
    messages: { control: 'object' },
    displayedMessages: { name: 'displayed-messages', control: { type: 'number', min: 1 } },
    items: { control: 'object' }
  }
} as Meta<typeof eSelect>

const Template: StoryFn<typeof eSelect> = args => ({
  components: { eSelect },
  setup() {
    return { args }
  },
  template: `<div class="max-w-48 min-h-64">
    <e-select v-bind="args" />
  </div>`
})

export const Default = Template.bind({})

// export const Variants = () => ({
//   components: { eSelect },
//   template: `
//     <div class="flex gap-3">
//       <e-select variant="default" label="Default" />
//       <e-select variant="outlined" label="Outlined" />
//       <e-select variant="text" label="Text" />
//     </div>
//   `
// })
//
// export const Colors = () => ({
//   components: { eSelect },
//   template: `
//     <div class="flex gap-3">
//       <e-select color="primary" label="Primary" />
//       <e-select color="secondary" label="Secondary" />
//       <e-select color="success" label="Success" />
//       <e-select color="error" label="Error" />
//     </div>
//   `
// })
//
// export const Sizes = () => ({
//   components: { eSelect },
//   template: `
//     <div class="flex gap-3">
//       <e-select size="x-large" label="X-large" />
//       <e-select size="large" label="Large" />
//       <e-select size="medium" label="Medium" />
//       <e-select size="small" label="Small" />
//       <e-select size="x-small" label="X-small" />
//     </div>
//   `
// })
//
// export const Icons = () => ({
//   components: { eSelect },
//   template: `
//     <div class="flex gap-3">
//       <div class="flex flex-col gap-y-3">
//         <e-select prepend-icon="call" label="Prepend icon" />
//         <e-select prepend-icon="call" prepend-icon-type="outlined" label="Prepend outlined icon" />
//       </div>
//       <div class="flex flex-col gap-y-3">
//         <e-select append-icon="paid" label="Append icon" />
//         <e-select append-icon="paid" append-icon-type="outlined" label="Append two-tone icon" />
//       </div>
//     </div>
//   `
// })

// export const Messages = () => ({
//   components: { eSelect },
//   setup() {
//     const messages = ref(['First message', 'Second message'])
//     return { messages }
//   },
//   template: `
//     <div class="flex gap-3">
//       <e-select label="Default messages" :messages="messages" />
//       <e-select label="Multiple messages" :messages="messages" :displayed-messages="2" />
//       <e-select label="Error messages" :error-messages="messages" />
//     </div>
//   `
// })
