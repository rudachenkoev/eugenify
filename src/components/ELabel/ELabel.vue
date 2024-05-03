<script setup lang="ts">
/** Internal component used for other control components */

import { type PropType } from 'vue'
import { SizeType } from '@/types'
import SIZES from './sizes'
//
defineProps({
  /** Specify content text for the component. */
  text: { type: String, default: '' },
  /** Sets the size of the component. */
  size: { type: String as PropType<SizeType>, default: 'medium' },
  /** Removes the indentation for the component */
  noIndents: { type: Boolean, default: false }
})

const defaultClasses = 'e-label font-light text-secondary-500 dark:text-secondary-200'
</script>

<template>
  <label :class="[defaultClasses, !noIndents && 'mb-1', SIZES[size]]">
    <slot>
      {{ text }}
    </slot>
  </label>
</template>
