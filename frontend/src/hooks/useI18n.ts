import { useTranslation } from 'react-i18next'

export default function useI18n(): (key: string) => string {
  const { t } = useTranslation()
  return t
}
