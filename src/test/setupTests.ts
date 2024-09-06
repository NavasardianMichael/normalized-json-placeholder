import * as matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'
import { expect } from 'vitest'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

const writeText = vi.fn()

Object.assign(navigator, {
  clipboard: {
    writeText,
  },
})
