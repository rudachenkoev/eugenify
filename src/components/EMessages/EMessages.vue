<script setup lang="ts">
/** Internal component used for other control components */

import { type PropType } from 'vue'
import { SizeType } from '@/types'
import SIZES from './sizes'
import { tw } from '@/helpers'
//
defineProps({
  /** Size inheritance from parent component. */
  size: { type: String as PropType<SizeType>, default: 'medium' },
  /** List of messages. */
  items: { type: Array as PropType<string[]>, default: () => [] },
  /** Sets type of messages. */
  type: { type: String as PropType<'default' | 'error'>, default: 'default' },
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

const defaultClasses = tw`e-message font-light transition duration-300 ease-in-out`
</script>

<template>
  <div
    v-for="(message, index) in items.slice(0, displayedMessages)"
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
