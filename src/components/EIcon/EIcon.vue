<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { SizeType } from '@/types'
import SIZES from './sizes.ts'
//
type IconType = 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone'

const props = defineProps({
  /**
   * Can take on multiple values: <br/>
   * the name of the Material icon. You can see more details here https://fonts.google.com/icons?icon.set=Material+Icons;<br/>
   * path to the local file;<br/>
   * external link to the image.
   */
  source: { type: String },
  /** Sets icon lettering type */
  type: { type: String as PropType<IconType>, default: 'filled' },
  /** Sets the size of the component. */
  size: { type: String as PropType<SizeType>, default: 'medium' }
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
</script>

<template>
  <i
    v-if="isPathOrUrl"
    :class="['e-icon block bg-cover', sizeClasses]"
    :style="{ backgroundImage: `url('${source}')` }"
  />
  <span v-else :class="['e-icon', iconClass, sizeClasses]">{{ source }}</span>
</template>
