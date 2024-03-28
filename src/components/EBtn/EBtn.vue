<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { isHex } from '@/helpers/colors'
import { isURL } from '@/helpers'

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
  // loading: { type: Boolean, default: false },
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
  },
})
const defaultClasses = 'flex items-center w-fit outline-none rounded disabled:opacity-50 transition-all'

// Colors
const colorClasses = computed(() => {
  switch (props.color) {
    case 'primary': return {
      default: 'bg-primary hover:bg-primary/80 border-none text-white',
      outlined: 'bg-transparent border border-primary hover:border-primary/80 text-primary hover:text-primary/80',
      text: 'bg-transparent border-none text-primary hover:text-primary/80'
    }
    case 'secondary': return {
      default: 'bg-secondary hover:bg-secondary/80 border-none text-white',
      outlined: 'bg-transparent border border-secondary hover:border-secondary/80 text-secondary hover:text-secondary/80',
      text: 'bg-transparent border-none text-secondary hover:text-secondary/80'
    }
    case 'success': return {
      default: 'bg-success hover:bg-success/80 border-none text-white',
      outlined: 'bg-transparent border border-success hover:border-success/80 text-success hover:text-success/80',
      text: 'bg-transparent border-none text-success hover:text-success/80'
    }
    case 'error': return {
      default: 'bg-error hover:bg-error/80 border-none text-white',
      outlined: 'bg-transparent border border-error hover:border-error/80 text-error hover:text-error/80',
      text: 'bg-transparent border-none text-error hover:text-error/80'
    }
    default: return {}
  }
})

// Sizes
const sizeClasses = computed(() => {
  switch (props.size) {
    case 'x-small': return {
      btn: 'h-6 text-xs py-1 px-2',
      prepend: 'mr-1 size-2.5 bg-cover',
      append: 'ml-1 size-2.5 bg-cover'
    }
    case 'small': return {
      btn: 'h-7 text-sm py-1.5 px-2.5',
      prepend: 'mr-1.5 size-3 bg-cover',
      append: 'ml-1.5 size-3 bg-cover'
    }
    case 'medium': return {
      btn: 'h-8 text-base py-2 px-3',
      prepend: 'mr-2 size-3.5 bg-cover',
      append: 'ml-2 size-3.5 bg-cover'
    }
    case 'large': return {
      btn: 'h-9 text-lg py-2 px-3.5',
      prepend: 'mr-2 size-4 bg-cover',
      append: 'ml-2 size-4 bg-cover'
    }
    case 'x-large': return {
      btn: 'h-10 text-xl py-2 px-3.5',
      prepend: 'mr-2 size-5 bg-cover',
      append: 'ml-2 size-5 bg-cover'
    }
    default: return {}
  }
})

const customStyles = computed(() => {
  const { backgroundColor, fontColor:color, borderColor } = props
  return { backgroundColor, color, borderColor }
})
</script>

<template>
  <button
    :class="[defaultClasses, colorClasses[variant], sizeClasses.btn]"
    :style="customStyles"
    :disabled="disabled"
    type="button"
  >
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
  </button>
</template>
