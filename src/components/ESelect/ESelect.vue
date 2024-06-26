<script setup lang="ts">
import { computed, type PropType, ref } from 'vue'
import { isColorSet } from '@/helpers/colors'
import { getDuplicates, tw } from '@/helpers'
import vClickOutside from '@/directives/clickOutside'
import COLORS from './colors'
import SIZES from './sizes'
import { ColorType, IconType, SizeType, VariantType, OptionItemType } from '@/types'
import eIcon from '@/components/EIcon/EIcon.vue'
import eMessages from '@/components/EMessages/EMessages.vue'
import eLabel from '@/components/ELabel/ELabel.vue'
//
const props = defineProps({
  /** Sets the label text. */
  label: String,
  /** Sets the input’s placeholder text. */
  placeholder: String,
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
  /** Creates <a href="/?path=/docs/e-icon--docs" target="_blank">e-icon</a> component before default text slot. Equivalent to the source prop from <a href="/?path=/docs/e-icon--docs" target="_blank">e-icon</a>. */
  prependIcon: String,
  /** Sets prepend e-icon type. <u>Applies to Material Icons only</u>. */
  prependIconType: { type: String as PropType<IconType>, default: 'filled' },
  /** Sets prepend e-icon color. <u>Applies to Material Icons only</u>. */
  prependIconColor: { type: String, validator: (value: string) => !value || isColorSet(value) },
  /** Creates <a href="/?path=/docs/e-icon--docs" target="_blank">e-icon</a> component after default text slot. Equivalent to the source prop from <a href="/?path=/docs/e-icon--docs" target="_blank">e-icon</a>. */
  appendIcon: { type: String, default: 'expand_more' },
  /** Sets append e-icon type. <u>Applies to Material Icons only</u>. */
  appendIconType: { type: String as PropType<IconType>, default: 'filled' },
  /** Sets append e-icon color. <u>Applies to Material Icons only</u>. */
  appendIconColor: { type: String, validator: (value: string) => !value || isColorSet(value) },
  /** Changes the value of the background color. <u>Applies to variant with value "default"</u>. */
  backgroundColor: { type: String, validator: (value: string) => !value || isColorSet(value) },
  /** Changes the value of the border color. <u>Applies to variant with value "outlined"</u>. */
  borderColor: { type: String, validator: (value: string) => !value || isColorSet(value) },
  /** Sets input in errors state and displays a list of messages. */
  errorMessages: { type: Array as PropType<string[]>, default: () => [] },
  /** Displays a list of messages. */
  messages: { type: Array as PropType<string[]>, default: () => [] },
  /** Amount of displayed messages. */
  displayedMessages: { type: Number, default: 1, validator: (value: number) => value >= 1 },
  /** List of sample items. */
  items: { type: Array as PropType<OptionItemType[]>, default: () => [] },
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
  minHeight: { type: String },
  /** Allows to make HTML elements focusable, allow or prevent them from being sequentially focusable and determine their relative ordering for sequential focus navigation. */
  tabindex: { type: Number, default: 0 }
})
const emit = defineEmits(['close', 'focus'])
const model = defineModel()

const availableItems = computed<OptionItemType[]>(() => {
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

const isOpenOptions = ref<boolean>(false)
const isFocused = ref<boolean>(false)

// Classes
const defaultClasses = {
  wrapper: tw`e-select__wrapper relative flex items-center transition`,
  field: tw`e-select__field flex h-full flex-1 items-center overflow-hidden`,
  checklist: tw`e-select__checklist absolute top-full mt-1 w-full overflow-auto rounded border bg-white`,
  checklistItem: tw`checklist-item font-light text-neutral-950 hover:bg-secondary-50`
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
const getOptionLabel = (item: OptionItemType) => {
  if (props.itemLabel && typeof item === 'object') return item[props.itemLabel]
  else return item
}

// Returns the title of the selected value
const modelLabel = computed(() => {
  if (props.itemValue) {
    const modelObj = availableItems.value.find((item: OptionItemType) => {
      return props.itemValue && typeof item === 'object' && item[props.itemValue] === model.value
    })
    // Object with itemValue key found
    if (modelObj && typeof modelObj === 'object') {
      if (props.itemLabel) return modelObj[props.itemLabel]
      else return modelObj
    }
    // Non-existing itemValue key in the object
    else return model.value
  }
  // Specified itemLabel, but did not specify itemValue
  else if (model.value && typeof model.value === 'object' && props.itemLabel) {
    return (model.value as any)[props.itemLabel]
  } else return model
})

// Checking for the selected menu item in the drop-down list
const checkActiveOption = (item: OptionItemType): boolean => {
  if (typeof item === 'object' && props.itemValue) {
    return model.value === item[props.itemValue]
  } else return model.value === item
}

const toggleSelect = (): void => {
  if (props.disabled) return
  isOpenOptions.value = !isOpenOptions.value
}
const handleSelect = (item: OptionItemType): void => {
  let selectedValue = item
  if (props.itemValue && typeof item === 'object') selectedValue = item[props.itemValue]
  model.value = model.value === selectedValue ? null : selectedValue
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
  <div v-click-outside="handleOptionsClosing" class="e-select">
    <slot name="label">
      <e-label v-if="label" :text="label" :size="size" />
    </slot>

    <div
      :class="[defaultClasses.wrapper, sizeClasses.wrapper, !flat && 'shadow-sm', behaviorClasses]"
      :style="customStyles"
      :tabindex="tabindex"
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
        <span v-if="!model" class="field-placeholder truncate font-light text-secondary-200">
          {{ placeholder || label }}
        </span>
        <span v-else class="field-value truncate font-light text-neutral-950">{{ modelLabel }}</span>
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

    <slot name="messages">
      <e-messages
        v-if="errorMessages.length || messages.length"
        :error-messages="errorMessages"
        :messages="messages"
        :size="size"
        :displayed-messages="displayedMessages"
      />
    </slot>
  </div>
</template>
