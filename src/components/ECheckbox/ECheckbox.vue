<script setup lang="ts">
import { type PropType } from 'vue'
import { ColorType, SizeType } from '@/types'
import eLabel from '@/components/ELabel/ELabel.vue'

defineProps({
  /** Sets the label text. */
  label: { type: String, default: '' },
  /** Removes the ability to click or target the input. */
  disabled: { type: Boolean, default: false },
  /** Sets the color of the component. */
  color: { type: String as PropType<ColorType>, default: 'primary' },
  /** Sets the size of the component. */
  size: { type: String as PropType<SizeType>, default: 'medium' },

  reversed: { type: Boolean, default: false }
})

// Classes
const defaultClasses = 'e-checkbox w-fit flex items-center cursor-pointer'
</script>

<template>
<label :class="[defaultClasses, !reversed && 'flex-row-reverse']">
  <slot name="label">
    <e-label v-if="label" :text="label" :size="size" no-indents />
  </slot>
  <input type="checkbox" :disabled="disabled" />
</label>
</template>
