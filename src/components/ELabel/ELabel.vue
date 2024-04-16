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
  size: { type: String as PropType<SizeType>, default: 'medium' }
})
</script>

<template>
  <div :class="['e-label font-light text-secondary mb-1', SIZES[size]]">
    <slot>
      {{ text }}
    </slot>
  </div>
</template>
