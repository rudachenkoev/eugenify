<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { isHex } from '@/helpers/colors'
import eLoader from '@/components/ELoader/ELoader.vue'
import SIZES from './sizes'
import COLORS from './colors'
import { ColorType, SizeType, VariantType } from '@/types'

const props = defineProps({
  text: { type: String, default: '' },
  icon: { type: String, default: '' },
  prependIcon: { type: String, default: '' },
  appendIcon: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  loadingText: { type: String, default: 'Loading...' },
  variant: { type: String as PropType<VariantType>, default: 'default' },
  size: { type: String as PropType<SizeType>, default: 'medium' },
  color: { type: String as PropType<ColorType>, default: 'primary' },
  backgroundColor: { type: String, default: '', validator (value:string) { return (value && isHex(value)) || !value } },
  fontColor: { type: String, default: '', validator (value:string) { return (value && isHex(value)) || !value } },
  borderColor: { type: String, default: '', validator (value:string) { return (value && isHex(value)) || !value } }
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
      <e-loader :text="loadingText" :color="color" :size="size" :no-text="!!icon" />
    </slot>
    <template v-else>
      <slot name="prepend">
        <i
          v-if="!!prependIcon"
          :class="[sizeClasses.prependIcon, 'bg-cover']"
          :style="{ backgroundImage: 'url(' + prependIcon + ')' }"
        />
      </slot>

      <i
        v-if="!!icon"
        :class="[sizeClasses.icon, 'bg-cover']"
        :style="{ backgroundImage: 'url(' + icon + ')' }"
      />
      <slot v-else>{{ text }}</slot>

      <slot name="append">
        <i
          v-if="!!appendIcon"
          :class="[sizeClasses.appendIcon, 'bg-cover']"
          :style="{ backgroundImage: 'url(' + appendIcon + ')' }"
        />
      </slot>
    </template>
  </button>
</template>
