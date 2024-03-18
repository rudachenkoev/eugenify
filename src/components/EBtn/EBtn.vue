<script lang="ts" setup>
import { computed, PropType } from 'vue'

const props = defineProps({
  text: { type: String, default: '' },
  prependIcon: { type: String, default: '' },
  appendIcon: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
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
  backgroundColor: { type: String, default: '' },
  fontColor: { type: String, default: '' },
  borderColor: { type: String, default: '' }
})

const cssVariables = computed(() => {
  let variables = {}
  if (props.backgroundColor) variables['--e-btn-background-color'] = props.backgroundColor
  if (props.fontColor) variables['--e-btn-font-color'] = props.fontColor
  if (props.borderColor) variables['--e-btn-border-color'] = props.borderColor
  return variables
})
</script>

<template>
  <button
    :class="['e-btn', `variant-${variant}`, `size-${size}`, `color-${color}`]"
    :style="cssVariables"
    :disabled="disabled"
  >
    <slot name="prepend">
      <i
        v-if="prependIcon"
        class="e-btn--prepend"
        :style="{ backgroundImage: 'url(' + prependIcon + ')' }"
      />
    </slot>

    <slot>{{ text }}</slot>

    <slot name="append">
      <i
        v-if="appendIcon"
        class="e-btn--append"
        :style="{ backgroundImage: 'url(' + appendIcon + ')' }"
      />
    </slot>
  </button>
</template>

<style lang="sass" scoped>
@import 'EBtn'
</style>
