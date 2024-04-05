<script setup lang="ts">
import { computed, ref, watch, type PropType } from 'vue'
import { isHex } from '@/helpers/colors'
import COLORS from './colors'
import SIZES from './sizes'
import { ColorType, IconType, SizeType, VariantType } from '@/types'
import eIcon from '@/components/EIcon/EIcon.vue'
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
  /** Creates <b>e-icon</b> component before default text slot. Equivalent to the <b>source</b> prop from <b>e-icon</b> */
  prependIcon: { type: String, default: '' },
  /** Sets prepend e-icon type. Equivalent to the <b>type</b> prop from <b>e-icon</b>. <u>Applies to Material Icons only</u>. */
  prependIconType: { type: String as PropType<IconType>, default: 'filled' },
  /** Creates <b>e-icon</b> component after default text slot. Equivalent to the <b>source</b> prop from <b>e-icon</b> */
  appendIcon: { type: String, default: '' },
  /** Sets append e-icon type. Equivalent to the <b>type</b> prop from <b>e-icon</b>. <u>Applies to Material Icons only</u>. */
  appendIconType: { type: String as PropType<IconType>, default: 'filled' },
  /** Changes the HEX value of the background color. Available only in conjunction with <b>variant-default</b>. */
  backgroundColor: { type: String, default: '', validator (value:string) { return (value && isHex(value)) || !value } },
  /** Changes the HEX value of the border color. Available only in conjunction with <b>variant-outlined</b>. */
  borderColor: { type: String, default: '', validator (value:string) { return (value && isHex(value)) || !value } }
})
const emit = defineEmits(['blur', 'keyup.enter', 'focus'])
const modelValue = defineModel()

// Used to override the type of input
const fieldType = ref<InputType>(props.type)
watch(() => props.type, value => fieldType.value = value)

const isFocused = ref<boolean>(false)

// Classes
const defaultWrapperClasses = 'e-input__wrapper w-fit flex items-center transition'
const defaultInputClasses = 'e-input__input h-full bg-transparent focus-visible:outline-0 font-light placeholder:text-secondary/40'
const colorClasses = computed(() => COLORS[props.color] || {})
const sizeClasses = computed(() => SIZES[props.size] || {})
const behaviorClasses = computed<string>(() => {
  if (props.disabled) return 'opacity-50'
  else return colorClasses.value[props.variant][isFocused.value ? 'focused' : 'unfocused']
})
// Colors customization
const customStyles = computed(() => {
  const { backgroundColor, borderColor } = props
  return { backgroundColor, borderColor }
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
  <div class="e-input">
    <div :class="['e-input__label text-secondary font-light mb-1', sizeClasses.label]">{{ label }}</div>
    <div
      :class="[
        defaultWrapperClasses,
        colorClasses[variant].initial,
        sizeClasses.wrapper,
        !flat && 'shadow-sm',
        behaviorClasses
      ]"
      :style="customStyles"
    >
      <slot name="prepend">
        <e-icon
          v-if="!!prependIcon"
          :class="['e-input__prepend', sizeClasses.prependIcon]"
          :source="prependIcon"
          :type="prependIconType"
          :size="size"
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
        <e-icon
          v-if="!!appendIcon"
          :class="['e-input__append', sizeClasses.appendIcon]"
          :source="appendIcon"
          :type="appendIconType"
          :size="size"
        />
        <e-icon
          v-else-if="type === 'password'"
          :class="['cursor-pointer opacity-60 hover:opacity-100 transition ease-in-out duration-300', sizeClasses.appendIcon]"
          :source="fieldType === 'password' ? 'visibility' : 'visibility_off'"
          :size="size"
          @click="changeInputType(fieldType === 'password' ? 'text' : 'password')"
        />
      </slot>
    </div>
  </div>
</template>
