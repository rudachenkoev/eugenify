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
    size: 'medium'
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
      table: { disable: true }
    },
    fontColor: {
      table: { disable: true }
    },
    borderColor: {
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
    name: 'background-color',
    control: 'color',
    table: { disable: false },
    if: { arg: 'variant', eq: 'default' }
  },
  fontColor: {
    name: 'font-color',
    control: 'color',
    table: { disable: false }
  },
  borderColor: {
    name: 'border-color',
    control: 'color',
    table: { disable: false },
    if: { arg: 'variant', eq: 'outlined' }
  }
}
