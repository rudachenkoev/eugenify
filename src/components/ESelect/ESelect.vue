<script setup lang="ts">
import { computed, ref, type PropType } from 'vue'
import { isColorSet } from '@/helpers/colors'
import COLORS from './colors'
import SIZES from './sizes'
import { ColorType, IconType, SizeType, VariantType } from '@/types'
import eIcon from '@/components/EIcon/EIcon.vue'
import eMessages from '@/components/EMessages/EMessages.vue'
import eLabel from '@/components/ELabel/ELabel.vue'
//
const props = defineProps({
  /** Sets the label text. */
  label: { type: String, default: '' },
  /** Sets the input’s placeholder text. */
  placeholder: { type: String, default: '' },
  /** Sets the color of the component. */
  color: { type: String as PropType<ColorType>, default: 'primary' },
  /** Sets the size of the component. */
  size: { type: String as PropType<SizeType>, default: 'medium' },
  /** Applies a distinct style to the component. */
  variant: { type: String as PropType<VariantType>, default: 'default' },
  /** Removes the ability to click or target the input. */
  disabled: { type: Boolean, default: false },
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
  appendIcon: { type: String, default: 'expand_more' },
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
  errorMessages: { type: Array as PropType<string[]>, default: [] },
  /** Displays a list of messages */
  messages: { type: Array as PropType<string[]>, default: [] },
  /** Amount of displayed messages */
  displayedMessages: { type: Number, default: 1 },
  /** List of sample items. */
  items: { type: Array as PropType<any[]>, default: [] }
})
const emit = defineEmits(['blur', 'keyup.enter', 'focus'])
const modelValue = defineModel()

const isOpenOptions = ref<boolean>(false)
const isFocused = ref<boolean>(false)

const messagesItems = computed<string[]>(() => {
  if (props.errorMessages?.length) return props.errorMessages
  else if (props.messages?.length) return props.messages
  else return []
})

// Classes
const defaultClasses = {
  wrapper: 'e-select__wrapper flex items-center relative transition-all',
  field: 'e-select__field size-full flex items-center',
  checklist: 'e-select__checklist absolute top-full w-full overflow-auto border rounded bg-white mt-1',
  checklistItem: 'checklist-item font-light hover:bg-secondary/10'
}

const sizeClasses = computed(() => SIZES[props.size] || {})

const behaviorClasses = computed<string>(() => {
  let inputColor = COLORS[props.color]
  if (props.errorMessages?.length) inputColor = COLORS.error

  let inputClasses = []
  inputClasses.push(inputColor[props.variant].initial)
  if (props.disabled) inputClasses.push('opacity-50')
  else inputClasses.push(inputColor[props.variant][isFocused.value ? 'focused' : 'unfocused'], 'cursor-pointer')

  return inputClasses.join(' ')
})
// Colors customization
const customStyles = computed(() => {
  const { backgroundColor, borderColor } = props
  return { backgroundColor, borderColor }
})

const toggleSelect = (): void => {
  if (props.disabled) return
  isOpenOptions.value = !isOpenOptions.value
}
const handleSelect = (item: any): void => {
  modelValue.value = modelValue.value === item ? null : item
  handleBlur()
}
const handleFocus = (e: Event): void => {
  if (props.disabled) return
  isFocused.value = true
  toggleSelect()
  emit('focus', e)
}
const handleBlur = (e?: Event): void => {
  isOpenOptions.value = false
  isFocused.value = false
  emit('blur', e)
}
</script>

<template>
  <div class="e-select">
    <e-label :text="label" :size="size" />

    <div
      :class="[defaultClasses.wrapper, sizeClasses.wrapper, !flat && 'shadow-sm', behaviorClasses]"
      :style="customStyles"
      @click="handleFocus"
    >
      <slot name="prepend">
        <e-icon
          v-if="!!prependIcon"
          :class="['e-select__prepend', sizeClasses.prependIcon]"
          :source="prependIcon"
          :type="prependIconType"
          :size="size"
          :color="prependIconColor"
        />
      </slot>

      <div :class="[defaultClasses.field, sizeClasses.field]">
        <span v-if="!modelValue" class="font-light text-secondary/40 truncate">{{ placeholder || label }}</span>
        <span v-else class="truncate">{{ modelValue }}</span>
      </div>

      <div
        v-if="isOpenOptions"
        :class="[defaultClasses.checklist, sizeClasses.checklist]"
      >
        <div
          v-for="item in items"
          :class="[
            defaultClasses.checklistItem,
            item === modelValue && 'font-normal bg-secondary/5',
            sizeClasses.checklistItem
          ]"
          @click.stop="handleSelect(item)"
        >
          {{ item }}
        </div>
      </div>

      <slot name="append" v-bind="{ isOpenOptions }">
        <e-icon
          v-if="!!appendIcon"
          :class="['e-select__append transition-transform', isOpenOptions && 'rotate-180', sizeClasses.appendIcon]"
          :source="appendIcon"
          :type="appendIconType"
          :size="size"
          :color="appendIconColor"
          @click.stop="toggleSelect"
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
