<script setup lang="ts">
import { computed, ref, type PropType, type Ref } from 'vue'
// import { ErrorMessage } from '@/types'
import COLORS from './colors'
import SIZES from './sizes'
//
const props = defineProps({
  modelValue: { type: [String, Number] },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  type: {
    type: String as PropType<'text' | 'number' | 'date' | 'email' | 'password' | 'search' | 'tel'>,
    default: 'text'
  },
  color: {
    type: String as PropType<'primary' | 'secondary' | 'error' | 'success'>,
    default: 'primary'
  },
  size: {
    type: String as PropType<'x-small' | 'small' | 'medium' | 'large' | 'x-large'>,
    default: 'medium'
  },
  variant: {
    type: String as PropType<'default' | 'outlined' | 'text'>,
    default: 'default'
  },
  // errorMessages: { type: Array as PropType<ErrorMessage[]>, default: [] },
  disabled: { type: Boolean, default: false },
  flat: { type: Boolean, default: false }
})
const emit = defineEmits(['update:modelValue', 'blur', 'keyup.enter', 'focus'])

const fieldType = ref(props.type)
const isFocused:Ref<boolean> = ref(false)
// const passwordAppendInnerIcon = computed<string>(() => fieldType.value === 'password' ? 'eye' : 'eye-slash')

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
const defaultInputClasses = 'size-full bg-transparent focus-visible:outline-0 font-light placeholder:text-secondary/40'
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
      <input
        ref="inputRef"
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
<!--      <i-->
<!--        v-if="type === 'password'"-->
<!--        :class="`fa-regular fa-${passwordAppendInnerIcon} cursor-pointer opacity-70 hover:opacity-100 transition ease-in-out duration-300`"-->
<!--        @click="fieldType = fieldType === 'password' ? 'text' : 'password'"-->
<!--      />-->
    </div>
  </div>
</template>
