<script setup lang="ts">
import { ColorType, IconType, SizeType } from '@/types'
import { computed, type PropType, inject, type Ref } from 'vue'
import eLabel from '@/components/ELabel/ELabel.vue'
import eIcon from '@/components/EIcon/EIcon.vue'
import { generateRandomIdentifier, tw } from '@/helpers'
import { isColorSet } from '@/helpers/colors'
import SIZES from './sizes'
import COLORS from './colors'

const props = defineProps({
  /** Sets the label text. */
  label: String,
  /** Returns the specified value when selected. */
  value: [Object, String, Number, Boolean],
  /** Removes the ability to click or target the input. */
  disabled: { type: Boolean, default: false },
  /** Icon used for the active state. Equivalent to the source prop from <a href="/?path=/docs/e-icon--docs" target="_blank">e-icon</a>. */
  trueIcon: { type: String, default: 'adjust' },
  /** Sets true-icon type. <u>Applies to Material Icons only</u>. */
  trueIconType: { type: String as PropType<IconType>, default: 'outlined' },
  /** Sets true-icon color. <u>Applies to Material Icons only</u>. */
  trueIconColor: { type: String, validator: (value: string) => !value || isColorSet(value) },
  /** Icon used for the inactive state. Equivalent to the source prop from <a href="/?path=/docs/e-icon--docs" target="_blank">e-icon</a>. */
  falseIcon: { type: String },
  /** Sets false-icon type. <u>Applies to Material Icons only</u>. */
  falseIconType: { type: String as PropType<IconType>, default: 'outlined' },
  /** Sets false-icon color. <u>Applies to Material Icons only</u>. */
  falseIconColor: { type: String, validator: (value: string) => !value || isColorSet(value) }
})
const identifier: string = generateRandomIdentifier()

const { groupModelValue, groupSize, groupDisabled, groupColor } = inject('eRadioGroup') as {
  groupModelValue: Ref<any>
  groupSize: Ref<SizeType>
  groupDisabled: Ref<boolean>
  groupColor: Ref<ColorType>
}
const disabledValue = computed<boolean>(() => groupDisabled.value || props.disabled)

// Classes
const defaultClasses = {
  wrapper: tw`e-radio__wrapper relative`,
  field: tw`e-radio__field peer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer appearance-none rounded-full border bg-neutral-50 transition disabled:cursor-default disabled:opacity-50`,
  icon: tw`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity`
}
const sizeClasses = computed<string>(() => SIZES[groupSize.value] || '')
const colorClasses = computed<string>(() => COLORS[groupColor.value] || '')
</script>

<template>
  <div class="e-radio flex items-center">
    <div :class="[defaultClasses.wrapper, sizeClasses]">
      <input
        :id="identifier"
        v-model="groupModelValue"
        :class="[defaultClasses.field, colorClasses, sizeClasses]"
        type="radio"
        :value="value"
        :disabled="disabledValue"
      />
      <e-icon
        v-if="trueIcon"
        :class="['e-radio__true-icon text-neutral-100 opacity-0 peer-checked:opacity-100', defaultClasses.icon]"
        :source="trueIcon"
        :type="trueIconType"
        :size="groupSize"
        :color="trueIconColor"
      />
      <e-icon
        v-if="falseIcon"
        :class="['e-radio__false-icon text-neutral-950 opacity-100 peer-checked:opacity-0', defaultClasses.icon]"
        :source="falseIcon"
        :type="falseIconType"
        :size="groupSize"
        :color="falseIconColor"
      />
    </div>
    <slot name="label" v-bind="{ identifier }">
      <e-label
        v-if="label"
        :class="['ps-2', !disabledValue && 'cursor-pointer']"
        :text="label"
        :size="groupSize"
        :for="identifier"
        no-indents
      />
    </slot>
  </div>
</template>
