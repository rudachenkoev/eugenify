import { StoryFn, Meta } from '@storybook/vue3'
import eBtn from './EBtn.vue'

export default {
  title: 'e-btn',
  component: eBtn,
  tags: ['autodocs'],
  args: {
    text: 'Button',
    disabled: false,
    loading: false,
    variant: 'default',
    size: 'medium',
    color: 'primary'
  },
  argTypes: {
    text: { control: 'text' },
    prependIcon: {
      name: 'prepend-icon',
      control: 'text'
    },
    appendIcon: {
      name: 'append-icon',
      control: 'text'
    },
    disabled: { control: 'boolean' },
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
      options: ['primary', 'secondary', 'error', 'success'],
      // table: { disable: true }
    },
    // backgroundColor: {
    //   table: { disable: true }
    // },
    // fontColor: {
    //   table: { disable: true }
    // },
    // borderColor: {
    //   table: { disable: true }
    // }
  }
} as Meta<typeof eBtn>

const Template: StoryFn<typeof eBtn> = args => ({
  components: { eBtn },
  setup() { return { args } },
  template: '<e-btn v-bind="args" />'
})

export const Default = Template.bind({})

export const Colors = args => ({
  components: { eBtn },
  setup() { return { args } },
  template: `
    <div class="flex items-center gap-3">
      <e-btn color="primary" text="Primary" />
      <e-btn color="secondary" text="Secondary" />
      <e-btn color="success" text="Success" />
      <e-btn color="error" text="Error" />
    </div>
  `
})

export const Variants = args => ({
  components: { eBtn },
  setup() { return { args } },
  template: `
    <div class="flex items-center gap-3">
      <e-btn variant="default" text="Default" />
      <e-btn variant="outlined" text="Outlined" />
      <e-btn variant="text" text="Text" />
    </div>
  `
})

export const Sizes = args => ({
  components: { eBtn },
  setup() { return { args } },
  template: `
    <div class="flex items-center gap-3">
      <e-btn size="x-large" text="X-large" />
      <e-btn size="large" text="Large" />
      <e-btn size="medium" text="Medium" />
      <e-btn size="small" text="Small" />
      <e-btn size="x-small" text="X-small" />
    </div>
  `
})

// export const Secondary = Template.bind({})
// Secondary.args = { color: 'secondary' }

// export const CustomColors = Template.bind({})
// CustomColors.args = {
//   backgroundColor: '#0057B7',
//   borderColor: '#0057B7',
//   fontColor: '#FFDD00'
// }
// CustomColors.argTypes = {
//   backgroundColor: {
//     name: 'background-color',
//     control: 'color',
//     table: { disable: false },
//     if: { arg: 'variant', eq: 'default' }
//   },
//   fontColor: {
//     name: 'font-color',
//     control: 'color',
//     table: { disable: false }
//   },
//   borderColor: {
//     name: 'border-color',
//     control: 'color',
//     table: { disable: false },
//     if: { arg: 'variant', eq: 'outlined' }
//   }
// }
