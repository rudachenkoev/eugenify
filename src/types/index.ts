export type SizeType = 'x-small' | 'small' | 'medium' | 'large' | 'x-large'

export type VariantType = 'default' | 'outlined' | 'text'

export type ColorType = 'primary' | 'secondary' | 'error' | 'success'

export type IconType = 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone'

type NotDeclaredObjKey = { [key: string]: string | number }
export type OptionItemType = NotDeclaredObjKey | string | number
