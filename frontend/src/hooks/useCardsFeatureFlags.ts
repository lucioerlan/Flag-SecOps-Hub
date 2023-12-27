import { BodyFeatureFlags } from '@/types/feature-flags'
import { calculateSummary } from '@/utils'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { useI18n } from './useI18n'

export default function useCardsFeatureFlags() {
  const t = useI18n()
  const featureFlags = useSelector((state: BodyFeatureFlags) => state.featureFlags.body || [])

  return useMemo(() => {
    const { total, active, inactive } = calculateSummary(featureFlags)
    return [
      {
        title: t('cards.title.total'),
        value: total,
        description: t('cards.description.total')
      },
      {
        title: t('cards.title.active'),
        value: active,
        description: t('cards.description.active')
      },
      {
        title: t('cards.title.inactive'),
        value: inactive,
        description: t('cards.description.inactive')
      },
      {
        title: t('cards.title.beta'),
        value: 0,
        description: t('cards.description.beta')
      }
    ]
  }, [featureFlags])
}
