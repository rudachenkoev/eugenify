import { StoryFn, Meta } from '@storybook/vue3'
import eInput from './EInput.vue'

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
    readonly: false
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    size: { control: 'select', options: ['x-small', 'small', 'medium', 'large', 'x-large'] },
    type: { control: 'select', options: ['text', 'number', 'date', 'email', 'password', 'search', 'tel', 'url'] },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    color: { control: 'select', options: ['primary', 'secondary', 'error', 'success'] },
    variant: { control: 'select', options: ['default', 'outlined', 'text'] },
    prependIcon: { name: 'prepend-icon', control: 'text' },
    appendIcon: { name: 'append-icon', control: 'text' }
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
      <e-input variant="default" label="Default variant" />
      <e-input variant="outlined" label="Outlined variant" />
      <e-input variant="text" label="Text variant" />
    </div>
  `
})

export const Colors = () => ({
  components: { eInput },
  template: `
    <div class="flex gap-3">
      <e-input color="primary" label="Primary color" />
      <e-input color="secondary" label="Secondary color" />
      <e-input color="success" label="Success color" />
      <e-input color="error" label="Error color" />
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
