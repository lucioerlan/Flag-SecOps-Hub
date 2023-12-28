export const formatDate = (dateString: string, locale: string = 'pt-BR'): string => {
  const date = new Date(dateString)
  date.setUTCHours(12, 0, 0, 0)
  return date.toLocaleDateString(locale)
}
