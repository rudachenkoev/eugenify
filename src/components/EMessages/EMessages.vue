<script setup lang="ts">
/** Internal component used for other control components */

import { PropType } from 'vue'
import { SizeType } from '@/types'
import SIZES from './sizes'
//
defineProps({
  /** Size inheritance from parent component. */
  size: { type: String as PropType<SizeType>, default: 'medium' },
  /** List of messages. */
  items: { type: Array as PropType<string[]>, default: [] },
  /** Sets type of messages. */
  type: { type: String as PropType<'default' | 'error'>, default: 'default' },
  /** Amount of displayed messages. */
  displayedMessages: { type: Number, default: 1 }
})
</script>

<template>
  <div
    :key="`e-message-${index}`"
    v-for="(message, index) in items.slice(0, displayedMessages)"
    :class="[
      'e-message font-light transition duration-300 ease-in-out',
      SIZES[size],
      type === 'error' ? 'text-error-500 dark:text-error-200' : 'text-secondary-500 dark:text-secondary-200'
    ]"
  >
    {{ message }}
  </div>
</template>
