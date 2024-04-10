<script setup lang="ts">
import { computed, PropType } from 'vue'
import { SizeType } from '@/types'
import SIZES from './sizes'
//
const props = defineProps({
  /** Size inheritance from parent component. */
  size: { type: String as PropType<SizeType>, default: 'medium' },
  /** List of messages. */
  items: { type: Array as PropType<string[]>, default: [] },
  /** Sets type of messages. */
  type: { type: String as PropType<'default' | 'error'>, default: 'default' },
  /** Amount of displayed messages. */
  displayedMessages: { type: Number, default: 1 }
})

const sizeClasses = computed(() => SIZES[props.size] || '')
</script>

<template>
  <div
    :key="`e-message-${index}`"
    v-for="(message, index) in items.slice(0, displayedMessages)"
    :class="[
      'e-message transition duration-300 ease-in-out',
      sizeClasses,
      type === 'error' ? 'text-error' : 'text-secondary'
    ]"
  >
    {{ message }}
  </div>
</template>
