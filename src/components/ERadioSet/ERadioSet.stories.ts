import { ColorValues, IconTypeValues, SizeValues } from '@/configs'
import { Meta, StoryFn } from '@storybook/vue3'
import eRadioSet from './ERadioSet.vue'

const defaultItems = [
  // { id: 1, name: 'First option' },
  // { id: 2, name: 'Second option' },
  // { id: 3, name: 'Third option' },
  // { id: 4, name: 'Fourth option' },
  // { id: 5, name: 'Fifth option' },
  // { id: 6, name: 'Sixth option' },
  // { id: 7, name: 'Seventh option' },
  // { id: 8, name: 'Eighth option' },
  // { id: 9, name: 'Ninth option' },
  // { id: 10, name: 'Tenth option' },
  // { id: 11, name: 'Eleventh option' },
  // // 'Some data',
  // // 'Some data',
  // // null,
  // { id: 12, name: 'The title is too long to fit everything on one line without hyphenation.' }
  // // { id: 12, name: 'Duplicate' }
  'First option',
  'Second option',
  'Third option'
]

export default {
  title: 'e-radio-set',
  component: eRadioSet,
  tags: ['autodocs'],
  parameters: {
    docs: {
      controls: {
        sort: 'alpha'
      }
    }
  },
  args: {
    disabled: false,
    color: 'primary',
    size: 'medium',
    items: defaultItems,
    trueIcon: 'adjust',
    trueIconType: 'outlined',
    falseIconType: 'outlined',
    errorMessages: [],
    messages: [],
    displayedMessages: 1,
    direction: 'inline'
  },
  argTypes: {
    modelValue: { control: false },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    color: { control: 'select', options: ColorValues },
    size: { control: 'select', options: SizeValues },
    items: { control: 'object' },
    trueIcon: { name: 'true-icon', control: 'text' },
    trueIconType: {
      name: 'true-icon-type',
      control: 'select',
      options: IconTypeValues,
      if: { arg: 'trueIcon' }
    },
    trueIconColor: {
      name: 'true-icon-color',
      control: 'color',
      if: { arg: 'trueIcon' }
    },
    falseIcon: { name: 'false-icon', control: 'text' },
    falseIconType: {
      name: 'false-icon-type',
      control: 'select',
      options: IconTypeValues,
      if: { arg: 'falseIcon' }
    },
    falseIconColor: {
      name: 'false-icon-color',
      control: 'color',
      if: { arg: 'falseIcon' }
    },
    errorMessages: { name: 'error-messages', control: 'object' },
    messages: { control: 'object' },
    displayedMessages: { name: 'displayed-messages', control: { type: 'number', min: 1 } },
    direction: { control: 'select', options: ['inline', 'column'] }
  }
} as Meta<typeof eRadioSet>

const Template: StoryFn<typeof eRadioSet> = args => ({
  components: { eRadioSet },
  setup() {
    return { args }
  },
  template: '<e-radio-set v-bind="args" />'
})

export const Default = Template.bind({})

// export const Colors = () => ({
//   components: { eRadioSet },
//   template: `
//     <div class="flex gap-3">
//       <e-radio-set :model-value="true" color="primary" label="Primary" />
//       <e-radio-set :model-value="true" color="secondary" label="Secondary" />
//       <e-radio-set :model-value="true" color="success" label="Success" />
//       <e-radio-set :model-value="true" color="error" label="Error" />
//     </div>
//   `
// })
//
// export const Sizes = () => ({
//   components: { eRadioSet },
//   template: `
//     <div class="flex gap-3">
//       <e-radio-set :model-value="true" size="x-large" label="X-large" />
//       <e-radio-set :model-value="true" size="large" label="Large" />
//       <e-radio-set :model-value="true" size="medium" label="Medium" />
//       <e-radio-set :model-value="true" size="small" label="Small" />
//       <e-radio-set :model-value="true" size="x-small" label="X-small" />
//     </div>
//   `
// })
//
// export const CustomIcons = () => ({
//   components: { eRadioSet },
//   template: `
//     <div class="flex gap-3">
//       <e-radio-set :model-value="false" false-icon="remove" true-icon="add" label="Custom false-icon" />
//       <e-radio-set :model-value="true" false-icon="remove" true-icon="add" label="Custom true-icon" />
//     </div>
//   `
// })
//
// export const Messages = () => ({
//   components: { eRadioSet },
//   setup() {
//     const messages = ref(['First message', 'Second message'])
//     return { messages }
//   },
//   template: `
//     <div class="flex gap-3">
//       <e-radio-set label="Default messages" :messages="messages" />
//       <e-radio-set label="Multiple messages" :messages="messages" :displayed-messages="2" />
//       <e-radio-set label="Error messages" :error-messages="messages" />
//     </div>
//   `
// })
