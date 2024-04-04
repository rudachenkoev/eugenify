import { StoryFn, Meta } from '@storybook/vue3'
import eInput from './EInput.vue'
import { Values as SizeValues } from '@configs/sizes'
import { Values as ColorValues } from '@configs/colors'
import { Values as VariantValues } from '@configs/variants'

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
    disabled: false,
    readonly: false,
    flat: false
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
    appendIcon: { name: 'append-icon', control: 'text' },
    backgroundColor: { name: 'background-color', control: 'color', if: { arg: 'variant', eq: 'default' } },
    borderColor: { name: 'border-color',  control: 'color', if: { arg: 'variant', eq: 'outlined' } }
  }
} as Meta<typeof eInput>

const Template: StoryFn<typeof eInput> = args => ({
  components: { eInput },
  setup() { return { args } },
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
      <e-input prepend-icon="/assets/icons/eye.svg" label="Prepend icon" />
      <e-input append-icon="/assets/icons/eye-slash.svg" label="Append icon" />
    </div>
  `
})

export const AdvancedPasswordType = () => ({
  components: { eInput },
  template: '<e-input type="password" label="Password" placeholder="Enter your password"/>'
})
