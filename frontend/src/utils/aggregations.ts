export const calculateSummary = (flags: { state: boolean }[]) => {
  const total = flags.length
  const active = flags.filter((flag) => flag.state).length
  const inactive = total - active
  return { total, active, inactive }
}
