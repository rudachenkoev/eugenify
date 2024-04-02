<script setup lang="ts">
import { computed, ref, type PropType } from 'vue'
import COLORS from './colors'
import SIZES from './sizes'
import { ColorType, SizeType, VariantType } from '@/types'
//
const props = defineProps({
  modelValue: { type: [String, Number] },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  type: {
    type: String as PropType<'text' | 'number' | 'date' | 'email' | 'password' | 'search' | 'tel' | 'url'>,
    default: 'text'
  },
  color: { type: String as PropType<ColorType>, default: 'primary' },
  size: { type: String as PropType<SizeType>, default: 'medium' },
  variant: { type: String as PropType<VariantType>, default: 'default' },
  disabled: { type: Boolean, default: false },
  flat: { type: Boolean, default: false },
  prependIcon: { type: String, default: '' },
  appendIcon: { type: String, default: '' }
})
const emit = defineEmits(['update:modelValue', 'blur', 'keyup.enter', 'focus'])

const fieldType = ref(props.type)
const isFocused = ref<boolean>(false)
const passwordAppendBackgroundUrl = computed<string>(() => {
  const passwordIcon = fieldType.value === 'password' ? 'eye' : 'eye-slash'
  return `url('/assets/icons/${passwordIcon}.svg')`
})

const handleInput = (e: Event):void => emit('update:modelValue', (e.target as HTMLInputElement).value)
const handeFocus = (e:Event):void => {
  isFocused.value = true
  emit('focus', e)
}
const handleBlur = (e:Event):void => {
  isFocused.value = false
  emit('blur', e)
}

const defaultWrapperClasses = 'w-fit flex items-center transition-all'
const defaultInputClasses = 'h-full bg-transparent focus-visible:outline-0 font-light placeholder:text-secondary/40'
// Colors
const colorClasses = computed(() => COLORS[props.color] || {})
// Sizes
const sizeClasses = computed(() => SIZES[props.size] || {})
</script>

<template>
  <div>
    <div :class="['text-secondary font-light mb-1', sizeClasses.label]">{{ label }}</div>
    <div
      :class="[
        defaultWrapperClasses,
        !flat && 'shadow-sm',
        colorClasses[variant].initial,
        colorClasses[variant][isFocused ? 'focused' : 'unfocused'],
        sizeClasses.wrapper
      ]"
    >
      <slot name="prepend">
        <i
          v-if="!!prependIcon"
          :class="[sizeClasses.prependIcon, 'bg-cover']"
          :style="{ backgroundImage: 'url(' + prependIcon + ')' }"
        />
      </slot>

      <input
        :type="fieldType"
        :value="modelValue"
        :placeholder="placeholder || label"
        :disabled="disabled"
        :class="[defaultInputClasses, sizeClasses.input]"
        @input="handleInput"
        @blur="handleBlur"
        @keyup.enter="$emit('keyup.enter')"
        @focus="handeFocus"
      />

      <slot name="append">
        <i
          v-if="!!appendIcon"
          :class="[sizeClasses.appendIcon, 'bg-cover']"
          :style="{ backgroundImage: 'url(' + appendIcon + ')' }"
        />
        <i
          v-else-if="type === 'password'"
          :class="[sizeClasses.appendIcon, 'cursor-pointer opacity-60 hover:opacity-100 transition ease-in-out duration-300']"
          :style="{ backgroundImage: passwordAppendBackgroundUrl }"
          @click="fieldType = fieldType === 'password' ? 'text' : 'password'"
        />
      </slot>
    </div>
  </div>
</template>
