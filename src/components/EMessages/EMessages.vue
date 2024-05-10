<script setup lang="ts">
/** Internal component used for other control components */

import { computed, type PropType } from 'vue'
import { SizeType } from '@/types'
import SIZES from './sizes'
import { tw } from '@/helpers'
//
const props = defineProps({
  /** Size inheritance from parent component. */
  size: { type: String as PropType<SizeType>, default: 'medium' },
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
  /** Removes the indentation for the component */
  noIndents: { type: Boolean, default: false }
})

const messageItems = computed<string[]>(() => {
  if (props.errorMessages?.length) return props.errorMessages
  else if (props.messages?.length) return props.messages
  else return []
})
const type = computed<'error' | 'default'>(() => (props.errorMessages?.length ? 'error' : 'default'))

const defaultClasses = tw`e-message font-light transition duration-300 ease-in-out`
</script>

<template>
  <div
    v-for="(message, index) in messageItems.slice(0, displayedMessages)"
    :key="`e-message-${index}`"
    :class="[
      defaultClasses,
      !noIndents && 'mt-1',
      SIZES[size],
      type === 'error' ? 'text-error-500 dark:text-error-200' : 'text-secondary-500 dark:text-secondary-200'
    ]"
  >
    {{ message }}
  </div>
</template>
