import eRadio from '@/components/ERadio/ERadio.vue'
import { ColorValues, SizeValues } from '@/configs'
import { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'
import eRadioGroup from './ERadioGroup.vue'

const defaultItems = ['First option', 'Second option', 'Third option']

export default {
  title: 'e-radio-group',
  component: eRadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The component wraps over <a href="/docs/e-radio--docs" target="_blank">e-radio</a> with their preset common properties.'
      },
      controls: {
        sort: 'alpha'
      }
    }
  },
  args: {
    size: 'medium',
    color: 'primary',
    errorMessages: [],
    messages: [],
    displayedMessages: 1,
    direction: 'inline',
    disabled: false
  },
  argTypes: {
    modelValue: { control: false },
    label: { control: 'text' },
    size: { control: 'select', options: SizeValues },
    color: { control: 'select', options: ColorValues },
    disabled: { control: 'boolean' },
    errorMessages: { name: 'error-messages', control: 'object' },
    messages: { control: 'object' },
    displayedMessages: { name: 'displayed-messages', control: { type: 'number', min: 1 } },
    direction: { control: 'select', options: ['inline', 'column'] }
  }
} as Meta<typeof eRadioGroup>

const Template: StoryFn<typeof eRadioGroup> = args => ({
  components: { eRadioGroup, eRadio },
  setup() {
    const selected = ref()
    return { args, selected, defaultItems }
  },
  template: `
    <e-radio-group v-bind="args" v-model="selected">
      <e-radio v-for="item in defaultItems" :value="item" :label="item" />
    </e-radio-group>
  `
})

export const Default = Template.bind({})

export const Directions = () => ({
  components: { eRadioGroup, eRadio },
  setup() {
    const selected = ref({
      inline: null,
      column: null
    })
    return { selected, defaultItems }
  },
  template: `
    <div class="divide-y">
      <e-radio-group v-model="selected.inline" direction="inline" class="py-3">
        <e-radio v-for="item in defaultItems" :value="item" :label="item" />
      </e-radio-group>
      <e-radio-group v-model="selected.column" direction="column" class="py-3">
        <e-radio v-for="item in defaultItems" :value="item" :label="item" />
      </e-radio-group>
    </div>
  `
})

export const Sizes = () => ({
  components: { eRadioGroup, eRadio },
  setup() {
    const selected = ref({
      xLarge: null,
      large: null,
      medium: null,
      small: null,
      xSmall: null
    })
    return { selected, defaultItems }
  },
  template: `
    <div class="divide-y">
      <e-radio-group v-model="selected.xLarge" size="x-large" class="py-3">
        <e-radio v-for="item in defaultItems" :value="item" :label="item" />
      </e-radio-group>
      <e-radio-group v-model="selected.large" size="large" class="py-3">
        <e-radio v-for="item in defaultItems" :value="item" :label="item" />
      </e-radio-group>
      <e-radio-group v-model="selected.medium" size="medium" class="py-3">
        <e-radio v-for="item in defaultItems" :value="item" :label="item" />
      </e-radio-group>
      <e-radio-group v-model="selected.small" size="small" class="py-3">
        <e-radio v-for="item in defaultItems" :value="item" :label="item" />
      </e-radio-group>
      <e-radio-group v-model="selected.xSmall" size="x-small" class="py-3">
        <e-radio v-for="item in defaultItems" :value="item" :label="item" />
      </e-radio-group>
    </div>
  `
})

export const Messages = () => ({
  components: { eRadioGroup, eRadio },
  setup() {
    const messages = ref(['First message', 'Second message'])
    const selected = ref({
      defaultMessages: null,
      twoDisplayedMessages: null,
      errorMessages: null
    })
    return { selected, messages, defaultItems }
  },
  template: `
    <div class="divide-y">
      <e-radio-group v-model="selected.defaultMessages" :messages="messages" class="py-3">
        <e-radio v-for="item in defaultItems" :value="item" :label="item" />
      </e-radio-group>
      <e-radio-group v-model="selected.twoDisplayedMessages" :messages="messages" :displayed-messages="2" class="py-3">
        <e-radio v-for="item in defaultItems" :value="item" :label="item" />
      </e-radio-group>
      <e-radio-group v-model="selected.errorMessages" :error-messages="messages" class="py-3">
        <e-radio v-for="item in defaultItems" :value="item" :label="item" />
      </e-radio-group>
    </div>
  `
})
