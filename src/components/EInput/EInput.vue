<script setup lang="ts">
import { computed, ref, watch, type PropType } from 'vue'
import { isColorSet } from '@/helpers/colors'
import COLORS from './colors'
import SIZES from './sizes'
import { ColorType, IconType, SizeType, VariantType } from '@/types'
import eIcon from '@/components/EIcon/EIcon.vue'
import eMessages from '@/components/EMessages/EMessages.vue'
import eLabel from '@/components/ELabel/ELabel.vue'
//
type InputType = 'text' | 'number' | 'date' | 'email' | 'password' | 'search' | 'tel' | 'url'

const props = defineProps({
  /** Sets the label text. */
  label: { type: String, default: '' },
  /** Sets the input’s placeholder text. */
  placeholder: { type: String, default: '' },
  /** Default input’s type attribute. Some of the options have predefined configurations.  */
  type: { type: String as PropType<InputType>, default: 'text' },
  /** Sets the color of the component. */
  color: { type: String as PropType<ColorType>, default: 'primary' },
  /** Sets the size of the component. */
  size: { type: String as PropType<SizeType>, default: 'medium' },
  /** Applies a distinct style to the component. */
  variant: { type: String as PropType<VariantType>, default: 'default' },
  /** Removes the ability to click or target the input. */
  disabled: { type: Boolean, default: false },
  /** Removes spin buttons. <u>Applies to type with value "number"</u>. */
  hideSpinButtons: { type: Boolean, default: false },
  /** Puts input in readonly state. */
  readonly: { type: Boolean, default: false },
  /** Removes shadow added to element. */
  flat: { type: Boolean, default: false },
  /** Creates <b>e-icon</b> component before default text slot. Equivalent to the source prop from <b>e-icon</b>. */
  prependIcon: { type: String, default: '' },
  /** Sets prepend e-icon type. <u>Applies to Material Icons only</u>. */
  prependIconType: { type: String as PropType<IconType>, default: 'filled' },
  /** Sets prepend e-icon color. <u>Applies to Material Icons only</u>. */
  prependIconColor: {
    type: String,
    default: '',
    validator(value: string) {
      return value ? isColorSet(value) : true
    }
  },
  /** Creates <b>e-icon</b> component after default text slot. Equivalent to the source prop from <b>e-icon</b>. */
  appendIcon: { type: String, default: '' },
  /** Sets append e-icon type. <u>Applies to Material Icons only</u>. */
  appendIconType: { type: String as PropType<IconType>, default: 'filled' },
  /** Sets append e-icon color. <u>Applies to Material Icons only</u>. */
  appendIconColor: {
    type: String,
    default: '',
    validator(value: string) {
      return value ? isColorSet(value) : true
    }
  },
  /** Changes the value of the background color. <u>Applies to variant with value "default"</u>. */
  backgroundColor: {
    type: String,
    default: '',
    validator(value: string) {
      return value ? isColorSet(value) : true
    }
  },
  /** Changes the value of the border color. <u>Applies to variant with value "outlined"</u>. */
  borderColor: {
    type: String,
    default: '',
    validator(value: string) {
      return value ? isColorSet(value) : true
    }
  },
  /** Sets input in errors state and displays a list of messages */
  errorMessages: { type: Array as PropType<string[]>, default: () => [] },
  /** Displays a list of messages */
  messages: { type: Array as PropType<string[]>, default: () => [] },
  /** Amount of displayed messages */
  displayedMessages: {
    type: Number,
    default: 1,
    validator(value: number) {
      return value >= 1
    }
  },
  /** Sets field's width. Takes a value along with the unit. */
  width: { type: String },
  /** Sets field's height. Takes a value along with the unit. */
  height: { type: String },
  /** Sets field's max-width. Takes a value along with the unit. */
  maxWidth: { type: String },
  /** Sets field's min-width. Takes a value along with the unit. */
  minWidth: { type: String },
  /** Sets field's max-height. Takes a value along with the unit. */
  maxHeight: { type: String },
  /** Sets field's min-height. Takes a value along with the unit. */
  minHeight: { type: String }
})
const emit = defineEmits(['blur', 'keyup', 'focus'])
const model = defineModel()

// Used to override the type of input
const fieldType = ref<InputType>(props.type)
watch(
  () => props.type,
  value => (fieldType.value = value)
)

const isFocused = ref<boolean>(false)

const messagesItems = computed<string[]>(() => {
  if (props.errorMessages?.length) return props.errorMessages
  else if (props.messages?.length) return props.messages
  else return []
})

// Classes
const defaultClasses = {
  wrapper: 'e-input__wrapper w-fit flex items-center transition',
  field:
    'e-input__field h-full bg-transparent focus-visible:outline-0 font-light text-neutral-950 caret-neutral-950 placeholder:text-secondary-200'
}

const sizeClasses = computed(() => SIZES[props.size] || {})

const behaviorClasses = computed<string>(() => {
  let inputColor = COLORS[props.color]
  if (props.errorMessages?.length) inputColor = COLORS.error

  let inputClasses = []
  inputClasses.push(inputColor[props.variant].initial)
  if (props.disabled) inputClasses.push('opacity-50')
  else inputClasses.push(inputColor[props.variant][isFocused.value ? 'focused' : 'unfocused'])

  return inputClasses.join(' ')
})
// Colors customization
const customStyles = computed(() => {
  const { backgroundColor, borderColor, width, height, minWidth, maxWidth, minHeight, maxHeight } = props
  return { backgroundColor, borderColor, width, height, minWidth, maxWidth, minHeight, maxHeight }
})

const handleFocus = (e: Event): void => {
  isFocused.value = true
  emit('focus', e)
}
const handleBlur = (e: Event): void => {
  isFocused.value = false
  emit('blur', e)
}

const changeInputType = (type: InputType): void => {
  if (props.disabled) return
  fieldType.value = type
}
</script>

<template>
  <div class="e-input">
    <e-label :text="label" :size="size" />

    <div
      :class="[defaultClasses.wrapper, sizeClasses.wrapper, !flat && 'shadow-sm', behaviorClasses]"
      :style="customStyles"
    >
      <slot name="prepend">
        <e-icon
          v-if="!!prependIcon"
          :class="['e-input__prepend', sizeClasses.prependIcon]"
          :source="prependIcon"
          :type="prependIconType"
          :size="size"
          :color="prependIconColor"
        />
      </slot>

      <input
        v-model="model"
        :type="fieldType"
        :placeholder="placeholder || label"
        :disabled="disabled"
        :readonly="readonly"
        :class="[defaultClasses.field, sizeClasses.field, hideSpinButtons && 'hide-spin-buttons']"
        @blur="handleBlur"
        @keyup="e => $emit('keyup', e)"
        @focus="handleFocus"
      />

      <slot name="append">
        <e-icon
          v-if="!!appendIcon"
          :class="['e-input__append', sizeClasses.appendIcon]"
          :source="appendIcon"
          :type="appendIconType"
          :size="size"
          :color="appendIconColor"
        />
        <e-icon
          v-else-if="type === 'password'"
          :class="[
            'cursor-pointer opacity-60 duration-300 ease-in-out hover:opacity-100',
            sizeClasses.appendIcon
          ]"
          :source="fieldType === 'password' ? 'visibility' : 'visibility_off'"
          :size="size"
          @click="changeInputType(fieldType === 'password' ? 'text' : 'password')"
        />
      </slot>
    </div>

    <e-messages
      v-if="messagesItems.length"
      :items="messagesItems"
      :type="errorMessages?.length ? 'error' : 'default'"
      :displayedMessages="displayedMessages"
    />
  </div>
</template>
