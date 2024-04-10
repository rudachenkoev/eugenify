import { StoryFn, Meta } from '@storybook/vue3'
import eInput from './EInput.vue'
import { IconTypeValues, ColorValues, VariantValues, SizeValues } from '@/configs'
import { ref } from 'vue'

export default {
  title: 'e-input',
  component: eInput,
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
    placeholder: 'Enter text here',
    variant: 'default',
    color: 'primary',
    size: 'medium',
    type: 'text',
    prependIconType: 'filled',
    appendIconType: 'filled',
    disabled: false,
    readonly: false,
    hideSpinButtons: false,
    flat: false,
    errorMessages: [],
    messages: [],
    displayedMessages: 1
  },
  argTypes: {
    modelValue: { control: false },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    type: { control: 'select', options: ['text', 'number', 'date', 'email', 'password', 'search', 'tel', 'url'] },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
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
    hideSpinButtons: { name: 'hide-spin-buttons', control: 'boolean', if: { arg: 'type', eq: 'number' } },
    errorMessages: { name: 'error-messages', control: 'object' },
    messages: { control: 'object' },
    displayedMessages: { name: 'displayed-messages', control: 'number', min: 1 }
  }
} as Meta<typeof eInput>

const Template: StoryFn<typeof eInput> = args => ({
  components: { eInput },
  setup() {
    return { args }
  },
  template: '<e-input v-bind="args" />'
})

export const Default = Template.bind({})

export const Variants = () => ({
  components: { eInput },
  template: `
    <div class="flex gap-3">
      <e-input variant="default" label="Default" />
      <e-input variant="outlined" label="Outlined" />
      <e-input variant="text" label="Text" />
    </div>
  `
})

export const Colors = () => ({
  components: { eInput },
  template: `
    <div class="flex gap-3">
      <e-input color="primary" label="Primary" />
      <e-input color="secondary" label="Secondary" />
      <e-input color="success" label="Success" />
      <e-input color="error" label="Error" />
    </div>
  `
})

export const Sizes = () => ({
  components: { eInput },
  template: `
    <div class="flex gap-3">
      <e-input size="x-large" label="X-large" />
      <e-input size="large" label="Large" />
      <e-input size="medium" label="Medium" />
      <e-input size="small" label="Small" />
      <e-input size="x-small" label="X-small" />
    </div>
  `
})

export const Icons = () => ({
  components: { eInput },
  template: `
    <div class="flex gap-3">
      <div class="flex flex-col gap-y-3">
        <e-input prepend-icon="call" label="Prepend icon" />
        <e-input prepend-icon="call" prepend-icon-type="outlined" label="Prepend outlined icon" />
      </div>
      <div class="flex flex-col gap-y-3">
        <e-input append-icon="paid" label="Append icon" />
        <e-input append-icon="paid" append-icon-type="outlined" label="Append two-tone icon" />
      </div>
    </div>
  `
})

export const AdvancedPasswordType = () => ({
  components: { eInput },
  template: '<e-input type="password" label="Password" placeholder="Enter your password"/>'
})

export const Messages = () => ({
  components: { eInput },
  setup () {
    const messages = ref(['First message', 'Second message'])
    return { messages }
  },
  template: `
    <div class="flex gap-3">
      <e-input label="Default messages" :messages="messages" />
      <e-input label="Multiple messages" :messages="messages" :displayed-messages="2" />
      <e-input label="Error messages" :error-messages="messages" />
    </div>
  `
})
