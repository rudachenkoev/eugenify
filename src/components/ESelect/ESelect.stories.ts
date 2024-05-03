import { ColorValues, IconTypeValues, SizeValues, VariantValues } from '@/configs'
import { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'
import eSelect from './ESelect.vue'

const defaultItems = [
  { id: 1, name: 'First option' },
  { id: 2, name: 'Second option' },
  { id: 3, name: 'Third option' },
  { id: 4, name: 'Fourth option' },
  { id: 5, name: 'Fifth option' },
  { id: 6, name: 'Sixth option' },
  { id: 7, name: 'Seventh option' },
  { id: 8, name: 'Eighth option' },
  { id: 9, name: 'Ninth option' },
  { id: 10, name: 'Tenth option' },
  { id: 11, name: 'Eleventh option' },
  // 'Some data',
  // 'Some data',
  // null,
  { id: 12, name: 'The title is too long to fit everything on one line without hyphenation.' }
  // { id: 12, name: 'Duplicate' }
]

export default {
  title: 'e-select',
  component: eSelect,
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
    placeholder: 'Placeholder text',
    variant: 'default',
    color: 'primary',
    size: 'medium',
    prependIconType: 'filled',
    appendIconType: 'filled',
    disabled: false,
    flat: false,
    errorMessages: [],
    messages: [],
    displayedMessages: 1,
    items: defaultItems,
    itemLabel: 'name',
    itemValue: 'id',
    maxWidth: '168px'
  },
  argTypes: {
    modelValue: { control: false },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: SizeValues },
    color: { control: 'select', options: ColorValues },
    variant: { control: 'select', options: VariantValues },
    prependIcon: { name: 'prepend-icon', control: 'text' },
    prependIconType: {
      name: 'prepend-icon-type',
      control: 'select',
      options: IconTypeValues,
      if: { arg: 'prependIcon' }
    },
    prependIconColor: {
      name: 'prepend-icon-color',
      control: 'color',
      if: { arg: 'prependIcon' }
    },
    appendIcon: { name: 'append-icon', control: 'text' },
    appendIconType: {
      name: 'append-icon-type',
      control: 'select',
      options: IconTypeValues,
      if: { arg: 'appendIcon' }
    },
    appendIconColor: {
      name: 'append-icon-color',
      control: 'color',
      if: { arg: 'appendIcon' }
    },
    backgroundColor: { name: 'background-color', control: 'color', if: { arg: 'variant', eq: 'default' } },
    borderColor: { name: 'border-color', control: 'color', if: { arg: 'variant', eq: 'outlined' } },
    errorMessages: { name: 'error-messages', control: 'object' },
    messages: { control: 'object' },
    displayedMessages: { name: 'displayed-messages', control: { type: 'number', min: 1 } },
    items: { control: 'object' },
    itemLabel: { name: 'item-label', control: 'text' },
    itemValue: { name: 'item-value', control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    maxWidth: { name: 'max-width', control: 'text' },
    minWidth: { name: 'min-width', control: 'text' },
    maxHeight: { name: 'max-height', control: 'text' },
    minHeight: { name: 'min-height', control: 'text' },
    tabindex: { control: { type: 'number', min: -1 } }
  }
} as Meta<typeof eSelect>

const Template: StoryFn<typeof eSelect> = args => ({
  components: { eSelect },
  setup() {
    return { defaultItems, args }
  },
  template: `<div class="min-h-64">
    <e-select :items="defaultItems" v-bind="args" />
  </div>`
})

export const Default = Template.bind({})

export const Variants = () => ({
  components: { eSelect },
  setup() {
    return { defaultItems }
  },
  template: `
    <div class="min-h-64 flex gap-3">
      <e-select :items="defaultItems" item-value="id" item-label="name" variant="default" label="Default" />
      <e-select :items="defaultItems" item-value="id" item-label="name" variant="outlined" label="Outlined" />
      <e-select :items="defaultItems" item-value="id" item-label="name" variant="text" label="Text" />
    </div>
  `
})

export const Colors = () => ({
  components: { eSelect },
  setup() {
    return { defaultItems }
  },
  template: `
    <div class="min-h-64 flex gap-3">
      <e-select :items="defaultItems" item-value="id" item-label="name" color="primary" label="Primary" />
      <e-select :items="defaultItems" item-value="id" item-label="name" color="secondary" label="Secondary" />
      <e-select :items="defaultItems" item-value="id" item-label="name" color="success" label="Success" />
      <e-select :items="defaultItems" item-value="id" item-label="name" color="error" label="Error" />
    </div>
  `
})

export const Sizes = () => ({
  components: { eSelect },
  setup() {
    return { defaultItems }
  },
  template: `
    <div class="min-h-64 flex gap-3">
      <e-select :items="defaultItems" item-value="id" item-label="name" size="x-large" label="X-large" />
      <e-select :items="defaultItems" item-value="id" item-label="name" size="large" label="Large" />
      <e-select :items="defaultItems" item-value="id" item-label="name" size="medium" label="Medium" />
      <e-select :items="defaultItems" item-value="id" item-label="name" size="small" label="Small" />
      <e-select :items="defaultItems" item-value="id" item-label="name" size="x-small" label="X-small" />
    </div>
  `
})

export const Icons = () => ({
  components: { eSelect },
  setup() {
    return { defaultItems }
  },
  template: `
    <div class="min-h-64 flex gap-3">
      <e-select :items="defaultItems" item-value="id" item-label="name" prepend-icon="location_on" label="Prepend icon" />
      <e-select :items="defaultItems" item-value="id" item-label="name" append-icon="arrow_drop_down" label="Append icon" />
    </div>
  `
})

export const Messages = () => ({
  components: { eSelect },
  setup() {
    const messages = ref(['First message', 'Second message'])
    return { messages, defaultItems }
  },
  template: `
    <div class="min-h-64 flex gap-3">
      <e-select :items="defaultItems" item-value="id" item-label="name" label="Default messages" :messages="messages" />
      <e-select :items="defaultItems" item-value="id" item-label="name" label="Multiple messages" :messages="messages" :displayed-messages="2" />
      <e-select :items="defaultItems" item-value="id" item-label="name" label="Error messages" :error-messages="messages" />
    </div>
  `
})
