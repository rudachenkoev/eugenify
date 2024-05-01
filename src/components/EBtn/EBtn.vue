<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { isColorSet } from '@/helpers/colors'
import eLoader from '@/components/ELoader/ELoader.vue'
import SIZES from './sizes'
import COLORS from './colors'
import { ColorType, IconType, SizeType, VariantType } from '@/types'
import eIcon from '@/components/EIcon/EIcon.vue'

const props = defineProps({
  /** Specify content text for the component. */
  text: { type: String, default: '' },
  /** Creates <a href="/?path=/docs/e-icon--docs" target="_blank">e-icon</a> component instead of the button text. Equivalent to the source prop from <a href="/?path=/docs/e-icon--docs" target="_blank">e-icon</a>.  */
  icon: { type: String, default: '' },
  /** Sets e-icon type. <u>Applies to Material Icons only</u>. */
  iconType: { type: String as PropType<IconType>, default: 'filled' },
  /** Sets e-icon color. <u>Applies to Material Icons only</u>. */
  iconColor: {
    type: String,
    default: '',
    validator(value: string) {
      return value ? isColorSet(value) : true
    }
  },
  /** Creates <a href="/?path=/docs/e-icon--docs" target="_blank">e-icon</a> component before default text slot. Equivalent to the source prop from <a href="/?path=/docs/e-icon--docs" target="_blank">e-icon</a>. */
  prependIcon: { type: String, default: '' },
  /** Sets prepend e-icon type. <u>Applies to Material Icons only</u>. */
  prependIconType: { type: String as PropType<IconType>, default: 'filled' },
  /** Sets prepend e-icon color. <u>Applies to Material Icons only</u>. */
  prependIconColor: {
    type: String,
    default: '',
    validator(value: string) {
      return value ? isColorSet(value) : true
    }
  },
  /** Creates <a href="/?path=/docs/e-icon--docs" target="_blank">e-icon</a> component after default text slot. Equivalent to the source prop from <a href="/?path=/docs/e-icon--docs" target="_blank">e-icon</a>. */
  appendIcon: { type: String, default: '' },
  /** Sets append e-icon type. <u>Applies to Material Icons only</u>. */
  appendIconType: { type: String as PropType<IconType>, default: 'filled' },
  /** Sets append e-icon color. <u>Applies to Material Icons only</u>. */
  appendIconColor: {
    type: String,
    default: '',
    validator(value: string) {
      return value ? isColorSet(value) : true
    }
  },
  /** Removes the ability to click or target the button. */
  disabled: { type: Boolean, default: false },
  /** Load Indicator. The <a href="/?path=/docs/e-loader--docs" target="_blank">e-loader</a> component is used by default. */
  loading: { type: Boolean, default: false },
  /** Removes shadow added to element. */
  flat: { type: Boolean, default: false },
  /** The loading text used with the <a href="/?path=/docs/e-loader--docs" target="_blank">e-loader</a> component. */
  loadingText: { type: String, default: 'Loading...' },
  /** Applies a distinct style to the component. */
  variant: { type: String as PropType<VariantType>, default: 'default' },
  /** Sets the size of the component. */
  size: { type: String as PropType<SizeType>, default: 'medium' },
  /** Sets the color of the component. */
  color: { type: String as PropType<ColorType>, default: 'primary' },
  /** Changes the value of the background color. <u>Applies to variant with value "default"</u>. */
  backgroundColor: {
    type: String,
    default: '',
    validator(value: string) {
      return value ? isColorSet(value) : true
    }
  },
  /** Changes the value of the font color. */
  fontColor: {
    type: String,
    default: '',
    validator(value: string) {
      return value ? isColorSet(value) : true
    }
  },
  /** Changes the value of the border color. <u>Applies to variant with value "outlined"</u>. */
  borderColor: {
    type: String,
    default: '',
    validator(value: string) {
      return value ? isColorSet(value) : true
    }
  },
  /** Sets button's width. Takes a value along with the unit. */
  width: { type: String },
  /** Sets button's height. Takes a value along with the unit. */
  height: { type: String },
  /** Sets button's max-width. Takes a value along with the unit. */
  maxWidth: { type: String },
  /** Sets button's min-width. Takes a value along with the unit. */
  minWidth: { type: String },
  /** Sets button's max-height. Takes a value along with the unit. */
  maxHeight: { type: String },
  /** Sets button's min-height. Takes a value along with the unit. */
  minHeight: { type: String }
})

// Classes
const defaultClasses = 'e-btn flex justify-center items-center w-fit outline-none rounded disabled:opacity-50 transition'
const colorClasses = computed(() => COLORS[props.color] || {})
const sizeClasses = computed(() => SIZES[props.size] || {})
// Colors customization
const customStyles = computed(() => {
  const { backgroundColor, fontColor: color, borderColor, width, height, minWidth, maxWidth, minHeight, maxHeight } = props
  return { backgroundColor, color, borderColor, width, height, minWidth, maxWidth, minHeight, maxHeight }
})
</script>

<template>
  <button
    :class="[
      defaultClasses,
      colorClasses[variant],
      sizeClasses.btn,
      loading && 'pointer-events-none',
      !flat && 'shadow-sm'
    ]"
    :style="customStyles"
    :disabled="disabled"
    type="button"
  >
    <slot v-if="loading" name="loader">
      <e-loader :text="loadingText" :color="color" :size="size" :no-text="!!icon" />
    </slot>
    <template v-else>
      <slot name="prepend">
        <e-icon
          v-if="!!prependIcon"
          :class="['e-btn__prepend', sizeClasses.prependIcon]"
          :source="prependIcon"
          :type="prependIconType"
          :size="size"
          :color="prependIconColor"
        />
      </slot>

      <e-icon v-if="!!icon" class="e-btn__icon" :source="icon" :type="iconType" :size="size" :color="iconColor" />
      <slot v-else>{{ text }}</slot>

      <slot name="append">
        <e-icon
          v-if="!!appendIcon"
          :class="['e-btn__append', sizeClasses.appendIcon]"
          :source="appendIcon"
          :type="appendIconType"
          :size="size"
          :color="appendIconColor"
        />
      </slot>
    </template>
  </button>
</template>
