import { ColorValues, SizeValues } from '@/configs'
import { Meta, StoryFn } from '@storybook/vue3'
import eLoader from './ELoader.vue'

export default {
  title: 'e-loader',
  component: eLoader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      controls: {
        sort: 'alpha'
      }
    }
  },
  args: {
    text: 'Loading...',
    size: 'medium',
    color: 'primary',
    noText: false
  },
  argTypes: {
    text: { control: 'text' },
    size: { control: 'select', options: SizeValues },
    color: { control: 'select', options: ColorValues },
    noText: { name: 'no-text', control: 'boolean' }
  }
} as Meta<typeof eLoader>

const Template: StoryFn<typeof eLoader> = args => ({
  components: { eLoader },
  setup() {
    return { args }
  },
  template: '<e-loader v-bind="args" />'
})

export const Default = Template.bind({})

export const Colors = () => ({
  components: { eLoader },
  template: `
    <div class="flex gap-3">
      <e-loader color="primary" text="Primary" />
      <e-loader color="secondary" text="Secondary" />
      <e-loader color="success" text="Success" />
      <e-loader color="error" text="Error" />
    </div>
  `
})

export const Sizes = () => ({
  components: { eLoader },
  template: `
    <div class="flex gap-3">
      <e-loader size="x-large" text="X-large" />
      <e-loader size="large" text="Large" />
      <e-loader size="medium" text="Medium" />
      <e-loader size="small" text="Small" />
      <e-loader size="x-small" text="X-small" />
    </div>
  `
})

export const NoText = () => ({
  components: { eLoader },
  template: '<e-loader no-text />'
})
