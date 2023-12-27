export const formatDate = (dateString: string, locale: string = 'pt-BR'): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString(locale)
}
