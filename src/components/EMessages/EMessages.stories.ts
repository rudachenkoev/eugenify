import { StoryFn, Meta } from '@storybook/vue3'
import eMessages from './EMessages.vue'

export default {
  title: 'e-messages',
  component: eMessages,
  tags: ['autodocs'],
  parameters: {
    docs: {
      controls: {
        sort: 'alpha'
      }
    }
  },
  args: {
    items: ['First message', 'Second message'],
    size: 'medium',
    type: 'default',
    displayedMessages: 1
  },
  argTypes: {
    items: { control: 'object' },
    size: { control: false },
    type: { control: 'select', options: ['default', 'error'] },
    displayedMessages: { name: 'displayed-messages', control: 'number', min: 1 }
  }
} as Meta<typeof eMessages>

const Template: StoryFn<typeof eMessages> = args => ({
  components: { eMessages },
  setup() {
    return { args }
  },
  template: '<e-messages v-bind="args" />'
})

export const Default = Template.bind({})

export const Types = () => ({
  components: { eMessages },
  template: `
    <div class="flex gap-3">
      <e-messages :items="['Default message']" />
      <e-messages :items="['Error message']" type="error" />
    </div>
  `
})

export const DisplayedMessages = () => ({
  components: { eMessages },
  template: `
    <div>
      <e-messages :items="['First message', 'Second message']" :displayedMessages="2" />
    </div>
  `
})
