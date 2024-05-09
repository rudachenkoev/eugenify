<script setup lang="ts">
import eLabel from '@/components/ELabel/ELabel.vue'
import eRadio from '@/components/ERadio/ERadio.vue'
import eMessages from '@/components/EMessages/EMessages.vue'
import { computed, PropType } from 'vue'
import { SizeType, OptionItemType, ColorType, IconType } from '@/types'
import { tw } from '@/helpers'
import { isColorSet } from '@/helpers/colors'

const props = defineProps({
  /** Sets the label text. */
  label: String,
  /** List of sample items. */
  items: { type: Array as PropType<OptionItemType[]>, default: () => [] },
  /** Removes the ability to click or target the input. */
  disabled: { type: Boolean, default: false },
  /** Sets the color of the component. */
  color: { type: String as PropType<ColorType>, default: 'primary' },
  /** Sets the size of the component. */
  size: { type: String as PropType<SizeType>, default: 'medium' },
  /** Icon used for the active state. Equivalent to the source prop from <a href="/?path=/docs/e-icon--docs" target="_blank">e-icon</a>. */
  trueIcon: { type: String, default: 'adjust' },
  /** Sets true-icon type. <u>Applies to Material Icons only</u>. */
  trueIconType: { type: String as PropType<IconType>, default: 'outlined' },
  /** Sets true-icon color. <u>Applies to Material Icons only</u>. */
  trueIconColor: {
    type: String,
    validator(value: string) {
      return value ? isColorSet(value) : true
    }
  },
  /** Icon used for the inactive state. Equivalent to the source prop from <a href="/?path=/docs/e-icon--docs" target="_blank">e-icon</a>. */
  falseIcon: { type: String },
  /** Sets false-icon type. <u>Applies to Material Icons only</u>. */
  falseIconType: { type: String as PropType<IconType>, default: 'outlined' },
  /** Sets false-icon color. <u>Applies to Material Icons only</u>. */
  falseIconColor: {
    type: String,
    validator(value: string) {
      return value ? isColorSet(value) : true
    }
  },
  /** Displays a list of error messages. */
  errorMessages: { type: Array as PropType<string[]>, default: () => [] },
  /** Displays a list of messages. */
  messages: { type: Array as PropType<string[]>, default: () => [] },
  /** Amount of displayed messages. */
  displayedMessages: {
    type: Number,
    default: 1,
    validator(value: number) {
      return value >= 1
    }
  },
  /** Exposes the direction of the options */
  direction: { type: String as PropType<'inline' | 'column'>, default: 'inline' }
})
const model = defineModel()

const messagesItems = computed<string[]>(() => {
  if (props.errorMessages?.length) return props.errorMessages
  else if (props.messages?.length) return props.messages
  else return []
})

// Classes
const defaultClasses = {
  wrapper: tw`e-radio-set__wrapper flex gap-3`
}
</script>

<template>
  <div class="e-radio-set">
    <slot name="label">
      <e-label v-if="label" :text="label" :size="size" />
    </slot>
    <div :class="[defaultClasses.wrapper, direction === 'column' && 'flex-col']">
      <slot name="items">
        <e-radio
          v-for="item in items"
          v-model="model"
          :value="item"
          :label="item"
          :color="color"
          :size="size"
          :disabled="disabled"
          :trueIcon="trueIcon"
          :trueIconType="trueIconType"
          :trueIconColor="trueIconColor"
          :falseIcon="falseIcon"
          :falseIconType="falseIconType"
          :falseIconColor="falseIconColor"
        />
      </slot>
    </div>
    <slot name="messages">
      <e-messages
        v-if="messagesItems.length"
        :items="messagesItems"
        :size="size"
        :type="errorMessages?.length ? 'error' : 'default'"
        :displayedMessages="displayedMessages"
      />
    </slot>
  </div>
</template>
