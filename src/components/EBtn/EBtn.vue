<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { isHex } from '@/helpers/colors'
import eLoader from '@/components/ELoader/ELoader.vue'
import SIZES from './sizes'
import COLORS from './colors'
import { ColorType, IconType, SizeType, VariantType } from '@/types'
import eIcon from '@/components/EIcon/EIcon.vue'

const props = defineProps({
  /** Specify content text for the component. */
  text: { type: String, default: '' },
  /** Creates <b>e-icon</b> component instead of the button text. Equivalent to the <b>source</b> prop from <b>e-icon</b>  */
  icon: { type: String, default: '' },
  /** Sets e-icon type. Equivalent to the <b>type</b> prop from <b>e-icon</b>. <u>Applies to Material Icons only</u>. */
  iconType: { type: String as PropType<IconType>, default: 'filled' },
  /** Creates <b>e-icon</b> component before default text slot. Equivalent to the <b>source</b> prop from <b>e-icon</b> */
  prependIcon: { type: String, default: '' },
  /** Sets prepend e-icon type. Equivalent to the <b>type</b> prop from <b>e-icon</b>. <u>Applies to Material Icons only</u>. */
  prependIconType: { type: String as PropType<IconType>, default: 'filled' },
  /** Creates <b>e-icon</b> component after default text slot. Equivalent to the <b>source</b> prop from <b>e-icon</b> */
  appendIcon: { type: String, default: '' },
  /** Sets append e-icon type. Equivalent to the <b>type</b> prop from <b>e-icon</b>. <u>Applies to Material Icons only</u>. */
  appendIconType: { type: String as PropType<IconType>, default: 'filled' },
  /** Removes the ability to click or target the button. */
  disabled: { type: Boolean, default: false },
  /** Load Indicator. The <b>e-loader</b> component is used by default. */
  loading: { type: Boolean, default: false },
  /** Removes shadow added to element. */
  flat: { type: Boolean, default: false },
  /** The loading text used with the e-loader component. */
  loadingText: { type: String, default: 'Loading...' },
  /** Applies a distinct style to the component. */
  variant: { type: String as PropType<VariantType>, default: 'default' },
  /** Sets the size of the component. */
  size: { type: String as PropType<SizeType>, default: 'medium' },
  /** Sets the color of the component. */
  color: { type: String as PropType<ColorType>, default: 'primary' },
  /** Changes the HEX value of the background color. Available only in conjunction with <b>variant-default</b>. */
  backgroundColor: { type: String, default: '', validator (value:string) { return (value && isHex(value)) || !value } },
  /** Changes the HEX value of the font color. */
  fontColor: { type: String, default: '', validator (value:string) { return (value && isHex(value)) || !value } },
  /** Changes the HEX value of the border color. Available only in conjunction with <b>variant-outlined</b>. */
  borderColor: { type: String, default: '', validator (value:string) { return (value && isHex(value)) || !value } }
})

// Classes
const defaultClasses = 'e-btn flex items-center w-fit outline-none rounded disabled:opacity-50 transition'
const colorClasses = computed(() => COLORS[props.color] || {})
const sizeClasses = computed(() => SIZES[props.size] || {})
// Colors customization
const customStyles = computed(() => {
  const { backgroundColor, fontColor:color, borderColor } = props
  return { backgroundColor, color, borderColor }
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
        />
      </slot>

      <e-icon
        v-if="!!icon"
        class="e-btn__icon"
        :source="icon"
        :type="iconType"
        :size="size"
      />
      <slot v-else>{{ text }}</slot>

      <slot name="append">
        <e-icon
          v-if="!!appendIcon"
          :class="['e-btn__append', sizeClasses.appendIcon]"
          :source="appendIcon"
          :type="appendIconType"
          :size="size"
        />
      </slot>
    </template>
  </button>
</template>
