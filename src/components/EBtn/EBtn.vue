<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { isHex } from '@/helpers/colors'
import { isURL } from '@/helpers'
import eLoader from '@/components/ELoader/ELoader.vue'
import SIZES from './sizes'
import COLORS from './colors'

const props = defineProps({
  text: { type: String, default: '' },
  prependIcon: {
    type: String,
    default: '',
    validator (value) { return (value && isURL(value)) || !value }
  },
  appendIcon: {
    type: String,
    default: '',
    validator (value) { return (value && isURL(value)) || !value }
  },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  loadingText: { type: String, default: 'Loading...' },
  variant: {
    type: String as PropType<'default' | 'outlined' | 'text'>,
    default: 'default'
  },
  size: {
    type: String as PropType<'x-small' | 'small' | 'medium' | 'large' | 'x-large'>,
    default: 'medium'
  },
  color: {
    type: String as PropType<'primary' | 'secondary' | 'error' | 'success'>,
    default: 'primary'
  },
  backgroundColor: {
    type: String,
    default: '',
    validator (value) { return (value && isHex(value)) || !value }
  },
  fontColor: {
    type: String,
    default: '',
    validator (value) { return (value && isHex(value)) || !value }
  },
  borderColor: {
    type: String,
    default: '',
    validator (value) { return (value && isHex(value)) || !value }
  }
})

const defaultClasses = 'flex items-center w-fit outline-none rounded disabled:opacity-50 transition-all'
// Colors
const colorClasses = computed(() => COLORS[props.color] || {})
// Sizes
const sizeClasses = computed(() => SIZES[props.size] || {})
// Colors customization
const customStyles = computed(() => {
  const { backgroundColor, fontColor:color, borderColor } = props
  return { backgroundColor, color, borderColor }
})
</script>

<template>
  <button
    :class="[defaultClasses, colorClasses[variant], sizeClasses.btn, loading && 'pointer-events-none']"
    :style="customStyles"
    :disabled="disabled"
    type="button"
  >
    <slot v-if="loading" name="loader">
      <e-loader :text="loadingText" :color="color" :size="size" />
    </slot>
    <template v-else>
      <slot name="prepend">
        <i
          v-if="prependIcon"
          :class="sizeClasses.prepend"
          :style="{ backgroundImage: 'url(' + prependIcon + ')' }"
        />
      </slot>

      <slot>{{ text }}</slot>

      <slot name="append">
        <i
          v-if="appendIcon"
          :class="sizeClasses.append"
          :style="{ backgroundImage: 'url(' + appendIcon + ')' }"
        />
      </slot>
    </template>
  </button>
</template>
