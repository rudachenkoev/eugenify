import { ColorValues, IconTypeValues, SizeValues } from '@/configs'
import { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'
import eCheckbox from './ECheckbox.vue'

export default {
  title: 'e-checkbox',
  component: eCheckbox,
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
    disabled: false,
    color: 'primary',
    size: 'medium',
    reversed: false,
    trueIcon: 'check',
    trueIconType: 'outlined',
    falseIconType: 'outlined',
    errorMessages: [],
    messages: [],
    displayedMessages: 1
  },
  argTypes: {
    modelValue: { control: false },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    color: { control: 'select', options: ColorValues },
    size: { control: 'select', options: SizeValues },
    reversed: { control: 'boolean' },
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
    displayedMessages: { name: 'displayed-messages', control: { type: 'number', min: 1 } }
  }
} as Meta<typeof eCheckbox>

const Template: StoryFn<typeof eCheckbox> = args => ({
  components: { eCheckbox },
  setup() {
    return { args }
  },
  template: '<e-checkbox v-bind="args" />'
})

export const Default = Template.bind({})

export const Colors = () => ({
  components: { eCheckbox },
  template: `
    <div class="flex gap-3">
      <e-checkbox :model-value="true" color="primary" label="Primary" />
      <e-checkbox :model-value="true" color="secondary" label="Secondary" />
      <e-checkbox :model-value="true" color="success" label="Success" />
      <e-checkbox :model-value="true" color="error" label="Error" />
    </div>
  `
})

export const Sizes = () => ({
  components: { eCheckbox },
  template: `
    <div class="flex gap-3">
      <e-checkbox :model-value="true" size="x-large" label="X-large" />
      <e-checkbox :model-value="true" size="large" label="Large" />
      <e-checkbox :model-value="true" size="medium" label="Medium" />
      <e-checkbox :model-value="true" size="small" label="Small" />
      <e-checkbox :model-value="true" size="x-small" label="X-small" />
    </div>
  `
})

export const CustomIcons = () => ({
  components: { eCheckbox },
  template: `
    <div class="flex gap-3">
      <e-checkbox :model-value="false" false-icon="remove" true-icon="add" label="Custom false-icon" />
      <e-checkbox :model-value="true" false-icon="remove" true-icon="add" label="Custom true-icon" />
    </div>
  `
})

export const Messages = () => ({
  components: { eCheckbox },
  setup() {
    const messages = ref(['First message', 'Second message'])
    return { messages }
  },
  template: `
    <div class="flex gap-3">
      <e-checkbox label="Default messages" :messages="messages" />
      <e-checkbox label="Multiple messages" :messages="messages" :displayed-messages="2" />
      <e-checkbox label="Error messages" :error-messages="messages" />
    </div>
  `
})
