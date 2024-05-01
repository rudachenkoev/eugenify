<script setup lang="ts">
import { computed, type PropType, ref } from 'vue'
import { isColorSet } from '@/helpers/colors'
import { getDuplicates } from '@/helpers'
import vClickOutside from '@/directives/clickOutside'
import COLORS from './colors'
import SIZES from './sizes'
import { ColorType, IconType, SizeType, VariantType } from '@/types'
import eIcon from '@/components/EIcon/EIcon.vue'
import eMessages from '@/components/EMessages/EMessages.vue'
import eLabel from '@/components/ELabel/ELabel.vue'
//
type NotDeclaredObjKey = { [key: string]: string | number }
type OptionItem = NotDeclaredObjKey | string | number
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
  items: { type: Array as PropType<OptionItem[]>, default: [] },
  /** The object key from the items array displayed as an option label. */
  itemLabel: { type: String },
  /** The object key from the items array used for v-model. If no value is specified, the item value from items will be returned. */
  itemValue: { type: String },
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

const availableItems = computed<OptionItem[]>(() => {
  if (props.items.some(item => !item)) {
    console.warn('Empty values were found in the items array.')
  }

  const duplicates = getDuplicates(props.items, props.itemValue)
  if (duplicates.length > 0) {
    console.warn('Duplicates were found in the items array.', duplicates)
  }

  const types = new Set(props.items.map(item => typeof item))
  if (types.size > 1) {
    console.warn('In the items array, not all values have the same data type.', types)
  }

  return props.items.filter(item => item && !duplicates.includes(item))
})

const emit = defineEmits(['close', 'keyup.enter', 'focus'])
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
  wrapper: 'e-select__wrapper min-w-40 flex items-center relative transition-all',
  field: 'e-select__field h-full flex flex-1 items-center overflow-hidden',
  checklist: 'e-select__checklist absolute top-full w-full overflow-auto border rounded bg-white mt-1',
  checklistItem: 'checklist-item font-light text-neutral-950 hover:bg-secondary-50'
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
  const { backgroundColor, borderColor, width, height, minWidth, maxWidth, minHeight, maxHeight } = props
  return { backgroundColor, borderColor, width, height, minWidth, maxWidth, minHeight, maxHeight }
})

// Returns the title of the items in the drop-down list
const getOptionLabel = (item: OptionItem) => {
  if (props.itemLabel && typeof item === 'object') return item[props.itemLabel]
  else return item
}

// Returns the title of the selected value
const modelValueLabel = computed(() => {
  if (props.itemValue) {
    const modelObj = availableItems.value.find((item: OptionItem) => {
      return props.itemValue && typeof item === 'object' && item[props.itemValue] === modelValue.value
    })
    // Object with itemValue key found
    if (modelObj && typeof modelObj === 'object') {
      if (props.itemLabel) return modelObj[props.itemLabel]
      else return modelObj
    }
    // Non-existing itemValue key in the object
    else return modelValue.value
  }
  // Specified itemLabel, but did not specify itemValue
  else if (modelValue.value && typeof modelValue.value === 'object' && props.itemLabel) {
    return (modelValue.value as any)[props.itemLabel]
  } else return modelValue
})

// Checking for the selected menu item in the drop-down list
const checkActiveOption = (item: OptionItem): boolean => {
  if (typeof item === 'object' && props.itemValue) {
    return modelValue.value === item[props.itemValue]
  } else return modelValue.value === item
}

const toggleSelect = (): void => {
  if (props.disabled) return
  isOpenOptions.value = !isOpenOptions.value
}
const handleSelect = (item: OptionItem): void => {
  let selectedValue = item
  if (props.itemValue && typeof item === 'object') selectedValue = item[props.itemValue]
  modelValue.value = modelValue.value === selectedValue ? null : selectedValue
  handleOptionsClosing()
}
const handleFocus = (e: Event): void => {
  if (props.disabled) return
  isFocused.value = true
  toggleSelect()
  emit('focus', e)
}
const handleOptionsClosing = (e?: Event): void => {
  isOpenOptions.value = false
  isFocused.value = false
  emit('close', e)
}
</script>

<template>
  <div class="e-select" v-click-outside="handleOptionsClosing">
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
        <span v-if="!modelValue" class="truncate font-light text-secondary-200">
          {{ placeholder || label }}
        </span>
        <span v-else class="truncate font-light text-neutral-950">{{ modelValueLabel }}</span>
      </div>

      <div v-if="isOpenOptions" :class="[defaultClasses.checklist, sizeClasses.checklist]">
        <div
          v-for="item in availableItems"
          :class="[
            defaultClasses.checklistItem,
            checkActiveOption(item) && 'bg-secondary-75 font-normal',
            sizeClasses.checklistItem
          ]"
          @click.stop="handleSelect(item)"
        >
          {{ getOptionLabel(item) }}
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
