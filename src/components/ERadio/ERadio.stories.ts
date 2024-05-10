import eRadioGroup from '@/components/ERadioGroup/ERadioGroup.vue'
import { IconTypeValues } from '@/configs'
import { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'
import eRadio from './ERadio.vue'

const defaultItems = ['First option', 'Second option', 'Third option']

export default {
  title: 'e-radio',
  component: eRadio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Micro component for <a href="/docs/e-radio-group--docs" target="_blank">e-radio-group</a>. Cannot exist as an individual component.'
      },
      controls: {
        sort: 'alpha'
      }
    }
  },
  args: {
    disabled: false,
    trueIcon: 'adjust',
    trueIconType: 'outlined',
    falseIconType: 'outlined'
  },
  argTypes: {
    value: { control: false },
    label: { control: false },
    size: {
      control: false,
      description:
        'Inherited from the wrapped component <a href="/?path=/docs/e-radio-group--docs" target="_blank">v-radio-group</a>.'
    },
    color: {
      control: false,
      description:
        'Inherited from the wrapped component <a href="/?path=/docs/e-radio-group--docs" target="_blank">v-radio-group</a>.'
    },
    disabled: { control: 'boolean' },
    trueIcon: { name: 'true-icon', control: 'text' },
    trueIconType: {
      name: 'true-icon-type',
      control: 'select',
      options: IconTypeValues,
      if: { arg: 'trueIcon' }
    },
    trueIconColor: {
      name: 'true-icon-color',
      control: 'color',
      if: { arg: 'trueIcon' }
    },
    falseIcon: { name: 'false-icon', control: 'text' },
    falseIconType: {
      name: 'false-icon-type',
      control: 'select',
      options: IconTypeValues,
      if: { arg: 'falseIcon' }
    },
    falseIconColor: {
      name: 'false-icon-color',
      control: 'color',
      if: { arg: 'falseIcon' }
    }
  }
} as Meta<typeof eRadioGroup>

const Template: StoryFn<typeof eRadioGroup> = args => ({
  components: { eRadioGroup, eRadio },
  setup() {
    const selected = ref()
    return { args, selected, defaultItems }
  },
  template: `
    <e-radio-group v-model="selected">
      <e-radio v-bind="args" v-for="item in defaultItems" :value="item" :label="item" />
    </e-radio-group>
  `
})

export const Default = Template.bind({})

export const Colors = () => ({
  components: { eRadioGroup, eRadio },
  setup() {
    const selected = ref()
    return { selected }
  },
  template: `
    <div class="divide-y">
      <e-radio-group v-model="selected">
        <e-radio color="primary" value="Primary" label="Primary" />
        <e-radio color="secondary" value="Secondary" label="Secondary" />
        <e-radio color="success" value="Success" label="Success" />
        <e-radio color="error" value="Error" label="Error" />
      </e-radio-group>
    </div>
  `
})

export const CustomIcons = () => ({
  components: { eRadioGroup, eRadio },
  setup() {
    const selected = ref(true)
    return { selected }
  },
  template: `
    <div class="divide-y">
      <e-radio-group v-model="selected">
        <e-radio :value="true" true-icon="check_circle" false-icon="cancel" label="Custom true-icon" />
        <e-radio :value="false" true-icon="check_circle" false-icon="cancel" label="Custom false-icon" />
      </e-radio-group>
    </div>
  `
})
