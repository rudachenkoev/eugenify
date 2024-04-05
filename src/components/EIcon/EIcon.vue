<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { IconType, SizeType } from '@/types'
import SIZES from './sizes.ts'
import { isColorSet } from '@/helpers/colors'
//
const props = defineProps({
  /**
   * Can take on several different values:
   * name of the <a href="https://fonts.google.com/icons?icon.set=Material+Icons" target="_blank">Material icon</a>,
   * path to the local file,
   * external link to the image. */
  source: { type: String },
  /** Sets icon lettering type */
  type: { type: String as PropType<IconType>, default: 'filled' },
  /** Sets the size of the component. */
  size: { type: String as PropType<SizeType>, default: 'medium' },
  /** Sets the color of the icon. */
  color: {
    type: String,
    default: '',
    validator(value: string) {
      return value ? isColorSet(value) : true
    }
  }
})

const isPathOrUrl = computed<boolean>(() => {
  const isPath = /^(\/|\\|[A-Za-z]:\\|[\w\-]+\/)+[\w\-]+\.[\w]+$/.test(<string>props.source)
  const isUrl = /^(?:https?|ftp):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(<string>props.source)
  return isPath || isUrl
})
const iconClass = computed<string>(() => {
  let str = 'material-icons'
  if (props.type !== 'filled') str += `-${props.type}`
  return str
})
const sizeClasses = computed(() => SIZES[props.size] || '')
// Colors customization
const customStyles = computed(() => {
  const { color } = props
  return { color }
})
</script>

<template>
  <i
    v-if="isPathOrUrl"
    :class="['e-icon block bg-cover', sizeClasses]"
    :style="{ backgroundImage: `url('${source}')` }"
  />
  <span v-else :class="['e-icon', iconClass, sizeClasses]" :style="customStyles">
    {{ source }}
  </span>
</template>
