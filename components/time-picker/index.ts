import TimePicker from '../date-picker/time-picker.vue'

export { TimePicker }
export { timePickerProps } from '../date-picker/props'

export type TimePickerExposed = InstanceType<typeof TimePicker>

export type { TimePickerProps, TimePickerCProps } from '../date-picker/props'
