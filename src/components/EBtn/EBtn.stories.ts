import { StoryFn, Meta } from '@storybook/vue3'
import eBtn from './EBtn.vue'

export default {
  title: 'e-btn',
  component: eBtn,
  args: {
    text: 'Button',
    disabled: false,
    loading: false,
    variant: 'default',
    size: 'medium'
  },
  argTypes: {
    text: { control: 'text' },
    prependIcon: { control: 'text' },
    appendIcon: { control: 'text' },
    disabled: { control: 'boolean' },
    variant: {
      control: 'inline-radio',
      options: ['default', 'outlined', 'text']
    },
    size: {
      control: 'inline-radio',
      options: ['x-small', 'small', 'medium', 'large', 'x-large']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success'],
      table: { disable: true }
    },
    backgroundColor: {
      control: 'color',
      table: { disable: true }
    },
    fontColor: {
      control: 'color',
      table: { disable: true }
    },
    borderColor: {
      control: 'color',
      table: { disable: true }
    }
  }
} as Meta<typeof eBtn>

const Template: StoryFn<typeof eBtn> = args => ({
  components: { eBtn },
  setup() { return { args } },
  template: '<e-btn v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = { color: 'primary' }
export const Secondary = Template.bind({})
Secondary.args = { color: 'secondary' }

export const CustomColors = Template.bind({})
CustomColors.args = {
  backgroundColor: '#0057B7',
  borderColor: '#0057B7',
  fontColor: '#FFDD00'
}
CustomColors.argTypes = {
  backgroundColor: {
    table: { disable: false },
    if: { arg: 'variant', neq: 'outlined' }
  },
  fontColor: {
    table: { disable: false }
  },
  borderColor: {
    table: { disable: false },
    if: { arg: 'variant', eq: 'outlined' }
  }
}
