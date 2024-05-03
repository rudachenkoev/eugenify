import { IconTypeValues, SizeValues } from '@/configs'
import { Meta, StoryFn } from '@storybook/vue3'
import eIcon from './EIcon.vue'

export default {
  title: 'e-icon',
  component: eIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      controls: {
        sort: 'alpha'
      }
    }
  },
  args: {
    source: 'bookmarks',
    type: 'filled',
    size: 'medium'
  },
  argTypes: {
    source: { control: 'text' },
    type: { control: 'select', options: IconTypeValues },
    size: { control: 'select', options: SizeValues },
    color: { control: 'color' }
  }
} as Meta<typeof eIcon>

const Template: StoryFn<typeof eIcon> = args => ({
  components: { eIcon },
  setup() {
    return { args }
  },
  template: '<e-icon v-bind="args" />'
})

export const Default = Template.bind({})

export const Sources = () => ({
  components: { eIcon },
  template: `
    <div class="flex gap-3">
      <e-icon source="bookmarks" />
      <e-icon source="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg" />
    </div>
  `
})

export const Types = () => ({
  components: { eIcon },
  template: `
    <div class="flex gap-3">
      <e-icon source="bookmarks" />
      <e-icon source="bookmarks" type="outlined" />
      <e-icon source="bookmarks" type="round" />
      <e-icon source="bookmarks" type="sharp" />
      <e-icon source="bookmarks" type="two-tone" />
    </div>
  `
})

export const Sizes = () => ({
  components: { eIcon },
  template: `
    <div class="flex gap-3">
      <e-icon source="bookmarks" size="x-large" />
      <e-icon source="bookmarks" size="large" />
      <e-icon source="bookmarks" size="medium" />
      <e-icon source="bookmarks" size="small" />
      <e-icon source="bookmarks" size="x-small" />
    </div>
  `
})
