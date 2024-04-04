<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { isHex } from '@/helpers/colors'
import eLoader from '@/components/ELoader/ELoader.vue'
import SIZES from './sizes'
import COLORS from './colors'
import { ColorType, SizeType, VariantType } from '@/types'

const props = defineProps({
  /** Specify content text for the component. */
  text: { type: String, default: '' },
  /** Icon to be used instead of the button text. Use the file path or a link to the icon.  */
  icon: { type: String, default: '' },
  /** Prepends an icon inside the component. Use the file path or a link to the icon. */
  prependIcon: { type: String, default: '' },
  /** Appends an icon inside the component. Use the file path or a link to the icon. */
  appendIcon: { type: String, default: '' },
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
        <i
          v-if="!!prependIcon"
          :class="['e-btn__prepend bg-cover', sizeClasses.prependIcon]"
          :style="{ backgroundImage: `url('${prependIcon}')` }"
        />
      </slot>

      <i
        v-if="!!icon"
        :class="['e-btn__icon bg-cover', sizeClasses.icon]"
        :style="{ backgroundImage: `url('${icon}')` }"
      />
      <slot v-else class="e-btn__text">{{ text }}</slot>

      <slot name="append">
        <i
          v-if="!!appendIcon"
          :class="['e-btn__append bg-cover', sizeClasses.appendIcon]"
          :style="{ backgroundImage: `url('${appendIcon}')` }"
        />
      </slot>
    </template>
  </button>
</template>
