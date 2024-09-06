export const IS_TOUCH_DEVICE = 'ontouchstart' in window || navigator.maxTouchPoints > 0

// Check if the device supports pointer events
export const IS_POINTER_DEVICE = window.PointerEvent

// Check if the device is a hybrid (both touch and pointer)
export const IS_HYBRID_DEVICE = IS_TOUCH_DEVICE && IS_POINTER_DEVICE

// Check if the device supports only touch events
export const IS_TOUCH_ONLY_DEVICE = IS_TOUCH_DEVICE && !IS_POINTER_DEVICE

// Check if the device supports only pointer events
export const IS_POINTER_ONLY_DEVICE = !IS_TOUCH_DEVICE && IS_POINTER_DEVICE
