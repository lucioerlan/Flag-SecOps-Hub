import { calculateSummary } from '@/utils'

type Flag = { state: boolean }

describe('calculateSummary', () => {
  it('should calculate total, active, and inactive flags correctly', () => {
    const flags: Flag[] = [{ state: true }, { state: false }, { state: true }]

    const summary = calculateSummary(flags)
    expect(summary.total).toBe(3)
    expect(summary.active).toBe(2)
    expect(summary.inactive).toBe(1)
  })

  it('should return zero for all values when no flags are provided', () => {
    const flags: Flag[] = []
    const summary = calculateSummary(flags)
    expect(summary.total).toBe(0)
    expect(summary.active).toBe(0)
    expect(summary.inactive).toBe(0)
  })
})
