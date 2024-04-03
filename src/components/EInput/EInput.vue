<script setup lang="ts">
import { computed, ref, type PropType } from 'vue'
import COLORS from './colors'
import SIZES from './sizes'
import { ColorType, SizeType, VariantType } from '@/types'
//
type InputType = 'text' | 'number' | 'date' | 'email' | 'password' | 'search' | 'tel' | 'url'

const props = defineProps({
  /** Sets the label text. */
  label: { type: String, default: '' },
  /** Sets the input’s placeholder text. */
  placeholder: { type: String, default: '' },
  /** Default input’s <b>type</b> attribute. Some of the options have predefined configurations.  */
  type: { type: String as PropType<InputType>, default: 'text' },
  /** Sets the color of the component. */
  color: { type: String as PropType<ColorType>, default: 'primary' },
  /** Sets the size of the component. */
  size: { type: String as PropType<SizeType>, default: 'medium' },
  /** Applies a distinct style to the component. */
  variant: { type: String as PropType<VariantType>, default: 'default' },
  /** Removes the ability to click or target the input. */
  disabled: { type: Boolean, default: false },
  /** Puts input in readonly state. */
  readonly: { type: Boolean, default: false },
  /** Removes shadow added to element. */
  flat: { type: Boolean, default: false },
  /** Prepends an icon inside the component’s input. Use the file path or a link to the icon. */
  prependIcon: { type: String, default: '' },
  /** Appends an icon inside the component’s input. Use the file path or a link to the icon. */
  appendIcon: { type: String, default: '' }
})
const emit = defineEmits(['input', 'blur', 'keyup.enter', 'focus'])
const modelValue = defineModel()

// Used to override the type of input
const fieldType = ref<InputType>(props.type)
// Icon-indicator of the status of an input with type "password"
const passwordAppendBackgroundUrl = computed<string>(() => {
  const passwordIcon = fieldType.value === 'password' ? 'eye' : 'eye-slash'
  return `url('/assets/icons/${passwordIcon}.svg')`
})
const isFocused = ref<boolean>(false)

// Classes
const defaultWrapperClasses = 'w-fit flex items-center transition'
const defaultInputClasses = 'h-full bg-transparent focus-visible:outline-0 font-light placeholder:text-secondary/40'
const colorClasses = computed(() => COLORS[props.color] || {})
const sizeClasses = computed(() => SIZES[props.size] || {})
const behaviorClasses = computed<string>(() => {
  if (props.disabled) return 'opacity-50'
  else return colorClasses.value[props.variant][isFocused.value ? 'focused' : 'unfocused']
})

const handleFocus = (e:Event):void => {
  isFocused.value = true
  emit('focus', e)
}
const handleBlur = (e:Event):void => {
  isFocused.value = false
  emit('blur', e)
}

const changeInputType = (type:InputType):void => {
  if (props.disabled) return
  fieldType.value = type
}
</script>

<template>
  <div>
    <div :class="['text-secondary font-light mb-1', sizeClasses.label]">{{ label }}</div>
    <div
      :class="[
        defaultWrapperClasses,
        colorClasses[variant].initial,
        sizeClasses.wrapper,
        !flat && 'shadow-sm',
        behaviorClasses
      ]"
    >
      <slot name="prepend">
        <i
          v-if="!!prependIcon"
          :class="[sizeClasses.prependIcon, 'bg-cover']"
          :style="{ backgroundImage: `url('${prependIcon}')` }"
        />
      </slot>

      <input
        v-model="modelValue"
        :type="fieldType"
        :placeholder="placeholder || label"
        :disabled="disabled"
        :readonly="readonly"
        :class="[defaultInputClasses, sizeClasses.input]"
        @blur="handleBlur"
        @keyup.enter="$emit('keyup.enter')"
        @focus="handleFocus"
      />

      <slot name="append">
        <i
          v-if="!!appendIcon"
          :class="[sizeClasses.appendIcon, 'bg-cover']"
          :style="{ backgroundImage: `url('${appendIcon}')` }"
        />
        <i
          v-else-if="type === 'password'"
          :class="[sizeClasses.appendIcon, 'cursor-pointer opacity-60 hover:opacity-100 transition ease-in-out duration-300 bg-cover']"
          :style="{ backgroundImage: passwordAppendBackgroundUrl }"
          @click="changeInputType(fieldType === 'password' ? 'text' : 'password')"
        />
      </slot>
    </div>
  </div>
</template>
