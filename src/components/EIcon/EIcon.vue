<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { IconType, SizeType } from '@/types'
import SIZES from './sizes'
import { isColorSet } from '@/helpers/colors'
//
const props = defineProps({
  /**
   * Can take on several different values:
   * name of the <a href="https://fonts.google.com/icons?icon.set=Material+Icons" target="_blank">Material icon</a>,
   * external link to the image. */
  source: { type: String },
  /** Sets icon lettering type */
  type: { type: String as PropType<IconType>, default: 'filled' },
  /** Sets the size of the component. */
  size: { type: String as PropType<SizeType>, default: 'medium' },
  /** Sets the color of the icon. */
  color: { type: String, validator: (value: string) => !value || isColorSet(value) },
  /** Specifies which form element a label is bound to. */
  for: { type: String }
})

const isUrl = computed<boolean>(() => {
  return /^(?:https?|ftp):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(<string>props.source)
})
const iconClass = computed<string>(() => {
  let str = 'material-icons'
  if (props.type !== 'filled') str += `-${props.type}`
  return str
})
const sizeClasses = computed<string>(() => SIZES[props.size] || '')
// Colors customization
const customStyles = computed(() => {
  const { color } = props
  return { color }
})
</script>

<template>
  <i v-if="isUrl" :class="['e-icon block bg-cover', sizeClasses]" :style="{ backgroundImage: `url('${source}')` }" />
  <span v-else :class="['e-icon leading-none', iconClass, sizeClasses]" :style="customStyles">
    {{ source }}
  </span>
</template>
