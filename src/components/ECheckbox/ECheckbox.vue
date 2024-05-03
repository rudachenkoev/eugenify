<script setup lang="ts">
import {computed, type PropType} from 'vue'
import {ColorType, IconType, SizeType} from '@/types'
import SIZES from './sizes'
import COLORS from './colors'
import eLabel from '@/components/ELabel/ELabel.vue'
import eIcon from '@/components/EIcon/EIcon.vue'
import {generateUniqueId} from '@/helpers'
import {isColorSet} from '@/helpers/colors'

const props = defineProps({
  /** Sets the label text. */
  label: { type: String, default: '' },
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
    default: '',
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
    default: '',
    validator(value: string) {
      return value ? isColorSet(value) : true
    }
  }
})
const inputId = generateUniqueId()

// Classes
const defaultClasses = {
  root: 'e-checkbox w-fit flex items-center',
  field: 'e-checkbox__field relative',
  fieldInput:
    'field-input absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 appearance-none bg-neutral-50 peer border rounded cursor-pointer disabled:opacity-50 disabled:cursor-default transition',
  fieldIcon: 'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-opacity pointer-events-none'
}
const sizeClasses = computed(() => SIZES[props.size] || '')
const colorClasses = computed(() => COLORS[props.color] || '')
</script>

<template>
  <div :class="[defaultClasses.root, reversed && 'flex-row-reverse']">
    <div :class="[defaultClasses.field, sizeClasses]">
      <input
        :id="inputId"
        :class="[defaultClasses.fieldInput, colorClasses, sizeClasses]"
        type="checkbox"
        :disabled="disabled"
      />
      <e-icon
        v-if="trueIcon"
        :class="['field-true-icon text-neutral-100 opacity-0 peer-checked:opacity-100', defaultClasses.fieldIcon]"
        :source="trueIcon"
        :type="trueIconType"
        :size="size"
        :color="trueIconColor"
      />
      <e-icon
        v-if="falseIcon"
        :class="['field-true-icon text-neutral-950 opacity-100 peer-checked:opacity-0', defaultClasses.fieldIcon]"
        :source="falseIcon"
        :type="falseIconType"
        :size="size"
        :color="falseIconColor"
      />
    </div>
    <slot name="label" v-bind="{ inputId }">
      <e-label
        v-if="label"
        :class="[reversed ? 'pe-2' : 'ps-2', !disabled && 'cursor-pointer']"
        :for="inputId"
        :text="label"
        :size="size"
        no-indents
      />
    </slot>
  </div>
</template>
