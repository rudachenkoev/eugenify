import { StoryFn, Meta } from '@storybook/vue3'
import eBtn from './EBtn.vue'

export default {
  title: 'e-btn',
  component: eBtn,
  tags: ['autodocs'],
  parameters: {
    docs: {
      controls: {
        sort: 'alpha'
      }
    }
  },
  args: {
    text: 'Button',
    disabled: false,
    loading: false,
    variant: 'default',
    size: 'medium',
    color: 'primary'
  },
  argTypes: {
    text: {
      control: 'text',
      if: { arg: 'icon', truthy: false }
    },
    icon: { control: 'text' },
    prependIcon: {
      name: 'prepend-icon',
      control: 'text'
    },
    appendIcon: {
      name: 'append-icon',
      control: 'text'
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    flat: { control: 'boolean' },
    loadingText: {
      name: 'loading-text',
      control: 'text'
    },
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'text']
    },
    size: {
      control: 'select',
      options: ['x-small', 'small', 'medium', 'large', 'x-large']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success']
    },
    backgroundColor: {
      name: 'background-color',
      control: 'color',
      if: { arg: 'variant', eq: 'default' }
    },
    fontColor: {
      name: 'font-color',
      control: 'color'
    },
    borderColor: {
      name: 'border-color',
      control: 'color',
      if: { arg: 'variant', eq: 'outlined' }
    }
  }
} as Meta<typeof eBtn>

const Template: StoryFn<typeof eBtn> = args => ({
  components: { eBtn },
  setup() { return { args } },
  template: '<e-btn v-bind="args" />'
})

export const Default = Template.bind({})

export const Colors = () => ({
  components: { eBtn },
  template: `
    <div class="flex gap-3">
      <e-btn color="primary" text="Primary" />
      <e-btn color="secondary" text="Secondary" />
      <e-btn color="success" text="Success" />
      <e-btn color="error" text="Error" />
    </div>
  `
})

export const Variants = () => ({
  components: { eBtn },
  template: `
    <div class="flex gap-3">
      <e-btn variant="default" text="Default" />
      <e-btn variant="outlined" text="Outlined" />
      <e-btn variant="text" text="Text" />
    </div>
  `
})

export const Sizes = () => ({
  components: { eBtn },
  template: `
    <div class="flex gap-3">
      <e-btn size="x-large" text="X-large" />
      <e-btn size="large" text="Large" />
      <e-btn size="medium" text="Medium" />
      <e-btn size="small" text="Small" />
      <e-btn size="x-small" text="X-small" />
    </div>
  `
})

export const Loading = () => ({
  components: { eBtn },
  template: `
    <div class="flex gap-3">
      <e-btn variant="default" loading />
      <e-btn variant="outlined" loading-text="Custom loading text" loading />
      <e-btn variant="text" loading />
    </div>
  `
})

export const Icons = () => ({
  components: { eBtn },
  template: `
    <div class="flex gap-3">
      <e-btn prepend-icon="/assets/icons/search.svg" text="Prepend icon" />
      <e-btn append-icon="/assets/icons/search.svg" text="Append icon" />
      <e-btn icon="/assets/icons/search.svg" />
    </div>
  `
})
