<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { ColorType, IconType, SizeType } from '@/types'
import SIZES from './sizes'
import COLORS from './colors'
import eLabel from '@/components/ELabel/ELabel.vue'
import eIcon from '@/components/EIcon/EIcon.vue'
import eMessages from '@/components/EMessages/EMessages.vue'
import { generateRandomIdentifier, tw } from '@/helpers'
import { isColorSet } from '@/helpers/colors'

const props = defineProps({
  /** Sets the label text. */
  label: String,
  /** Removes the ability to click or target the input. */
  disabled: { type: Boolean, default: false },
  /** Sets the color of the component. */
  color: { type: String as PropType<ColorType>, default: 'primary' },
  /** Sets the size of the component. */
  size: { type: String as PropType<SizeType>, default: 'medium' },
  /** Reverses the position of the input and label. */
  reversed: { type: Boolean, default: false },
  /** Icon used for the active state. Equivalent to the source prop from <a href="/?path=/docs/e-icon--docs" target="_blank">e-icon</a>. */
  trueIcon: { type: String, default: 'check' },
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
  }
})
const model = defineModel()
const identifier = generateRandomIdentifier()

const messagesItems = computed<string[]>(() => {
  if (props.errorMessages?.length) return props.errorMessages
  else if (props.messages?.length) return props.messages
  else return []
})

// Classes
const defaultClasses = {
  wrapper: tw`e-checkbox__wrapper relative`,
  field: tw`e-checkbox__field peer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer appearance-none rounded border bg-neutral-50 transition disabled:cursor-default disabled:opacity-50`,
  icon: tw`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity`
}
const sizeClasses = computed(() => SIZES[props.size] || '')
const colorClasses = computed(() => COLORS[props.color] || '')
</script>

<template>
  <div class="e-checkbox">
    <div :class="['flex w-fit items-center', reversed && 'flex-row-reverse']">
      <div :class="[defaultClasses.wrapper, sizeClasses]">
        <input
          :id="identifier"
          v-model="model"
          :class="[defaultClasses.field, colorClasses, sizeClasses]"
          type="checkbox"
          :disabled="disabled"
        />
        <e-icon
          v-if="trueIcon"
          :class="['e-checkbox__true-icon text-neutral-100 opacity-0 peer-checked:opacity-100', defaultClasses.icon]"
          :source="trueIcon"
          :type="trueIconType"
          :size="size"
          :color="trueIconColor"
        />
        <e-icon
          v-if="falseIcon"
          :class="['e-checkbox__false-icon text-neutral-950 opacity-100 peer-checked:opacity-0', defaultClasses.icon]"
          :source="falseIcon"
          :type="falseIconType"
          :size="size"
          :color="falseIconColor"
        />
      </div>
      <slot name="label" v-bind="{ identifier }">
        <e-label
          v-if="label"
          :class="[reversed ? 'pe-2' : 'ps-2', !disabled && 'cursor-pointer']"
          :for="identifier"
          :text="label"
          :size="size"
          no-indents
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
