import { ColorValues, IconTypeValues, SizeValues } from '@/configs'
import { Meta, StoryFn } from '@storybook/vue3'
import eCheckbox from './ECheckbox.vue'

export default {
  title: 'e-checkbox',
  component: eCheckbox,
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
    disabled: false,
    color: 'primary',
    size: 'medium',
    reversed: false,
    trueIcon: 'check',
    trueIconType: 'outlined',
    falseIconType: 'outlined'
  },
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    color: { control: 'select', options: ColorValues },
    size: { control: 'select', options: SizeValues },
    reversed: { control: 'boolean' },
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
} as Meta<typeof eCheckbox>

const Template: StoryFn<typeof eCheckbox> = args => ({
  components: { eCheckbox },
  setup() {
    return { args }
  },
  template: '<e-checkbox v-bind="args" />'
})

export const Default = Template.bind({})

// export const Sources = () => ({
//   components: { eCheckbox },
//   template: `
//     <div class="flex gap-3">
//       <e-checkbox source="bookmarks" />
//       <e-checkbox source="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg" />
//     </div>
//   `
// })
//
// export const Types = () => ({
//   components: { eCheckbox },
//   template: `
//     <div class="flex gap-3">
//       <e-checkbox source="bookmarks" />
//       <e-checkbox source="bookmarks" type="outlined" />
//       <e-checkbox source="bookmarks" type="round" />
//       <e-checkbox source="bookmarks" type="sharp" />
//       <e-checkbox source="bookmarks" type="two-tone" />
//     </div>
//   `
// })
//
// export const Sizes = () => ({
//   components: { eCheckbox },
//   template: `
//     <div class="flex gap-3">
//       <e-checkbox source="bookmarks" size="x-large" />
//       <e-checkbox source="bookmarks" size="large" />
//       <e-checkbox source="bookmarks" size="medium" />
//       <e-checkbox source="bookmarks" size="small" />
//       <e-checkbox source="bookmarks" size="x-small" />
//     </div>
//   `
// })
