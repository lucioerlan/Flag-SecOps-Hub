import { BodyFeatureFlags, FeatureFlag } from '@/types/feature-flags'
import { capitalize, createFormattedHeaders, filterDataByQuery, formatDate, paginateData } from '@/utils'
import { useState, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { useI18n } from './useI18n'

export const useTableManager = () => {
  const t = useI18n()
  const featureFlags = useSelector((state: BodyFeatureFlags) => state.featureFlags.body || [])

  const [tableData, setTableData] = useState<FeatureFlag[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 25
  const columnTranslations = {
    name: t('table.columns.name'),
    description: t('table.columns.description'),
    state: t('table.columns.state'),
    created_at: t('table.columns.created_at'),
    updated_at: t('table.columns.updated_at')
  }

  const formattedData = useMemo(
    () =>
      featureFlags.map((item: FeatureFlag) => ({
        ...item,
        ...(item.created_at && { created_at: formatDate(item.created_at) }),
        ...(item.updated_at && { updated_at: formatDate(item.updated_at) })
      })),
    [featureFlags]
  )

  const columns = createFormattedHeaders(formattedData, columnTranslations, capitalize)
  const paginatedData = paginateData(tableData, currentPage, itemsPerPage)

  const handleSearch = (searchQuery: string) => {
    const newData = filterDataByQuery(searchQuery, formattedData)
    setTableData(newData)
  }

  useEffect(() => {
    if (formattedData.length > 0) {
      setTableData(formattedData)
    }
  }, [formattedData])

  return {
    data: paginatedData,
    columns,
    handleSearch,
    itemsPerPage,
    currentPage,
    setCurrentPage,
    totalItems: tableData.length
  }
}
