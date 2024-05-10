<script setup lang="ts">
import eLabel from '@/components/ELabel/ELabel.vue'
import eMessages from '@/components/EMessages/EMessages.vue'
import { computed, provide, type PropType, toRefs } from 'vue'
import { ColorType, SizeType } from '@/types'

type DirectionType = 'inline' | 'column'
const props = defineProps({
  /** Sets the label text. */
  label: String,
  /** Removes the ability to click or target the input. */
  disabled: { type: Boolean, default: false },
  /** Sets the size of the component. */
  size: { type: String as PropType<SizeType>, default: 'medium' },
  /** Sets the color of the component. */
  color: { type: String as PropType<ColorType>, default: 'primary' },
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
  direction: { type: String as PropType<DirectionType>, default: 'inline' }
})

const messagesItems = computed<string[]>(() => {
  if (props.errorMessages?.length) return props.errorMessages
  else if (props.messages?.length) return props.messages
  else return []
})

const groupModelValue = defineModel()
const { size: groupSize, disabled: groupDisabled, color: groupColor } = toRefs(props)
provide('eRadioGroup', { groupModelValue, groupSize, groupDisabled, groupColor })
</script>

<template>
  <div class="e-radio-set">
    <slot name="label">
      <e-label v-if="label" :text="label" :size="size" />
    </slot>
    <div :class="['e-radio-set__wrapper flex gap-3', direction === 'column' && 'flex-col']">
      <slot />
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
