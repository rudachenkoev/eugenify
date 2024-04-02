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
    disabled: false
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    size: {
      control: 'select',
      options: ['x-small', 'small', 'medium', 'large', 'x-large']
    },
    disabled: { control: 'boolean' },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success']
    },
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'text']
    },
    prependIcon: {
      name: 'prepend-icon',
      control: 'text'
    },
    appendIcon: {
      name: 'append-icon',
      control: 'text'
    }
  }
} as Meta<typeof eInput>

const Template: StoryFn<typeof eInput> = args => ({
  components: { eInput },
  setup() { return { args } },
  template: '<e-input v-bind="args" />'
})

export const Default = Template.bind({})

// export const Colors = () => ({
//   components: { eInput },
//   template: `
//     <div class="flex gap-3">
//       <e-input color="primary" text="Primary" />
//       <e-input color="secondary" text="Secondary" />
//       <e-input color="success" text="Success" />
//       <e-input color="error" text="Error" />
//     </div>
//   `
// })
//
// export const Sizes = () => ({
//   components: { eInput },
//   template: `
//     <div class="flex gap-3">
//       <e-input size="x-large" text="X-large" />
//       <e-input size="large" text="Large" />
//       <e-input size="medium" text="Medium" />
//       <e-input size="small" text="Small" />
//       <e-input size="x-small" text="X-small" />
//     </div>
//   `
// })
//
// export const NoText = () => ({
//   components: { eInput },
//   template: `
//     <div class="flex gap-3">
//       <e-input color="primary" no-text />
//       <e-input color="secondary" no-text />
//       <e-input color="success" no-text />
//       <e-input color="error" no-text />
//     </div>
//   `
// })
