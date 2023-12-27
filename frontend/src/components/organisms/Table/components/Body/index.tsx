import useFeatureFlags from '@/hooks/useFeatureFlags'
import { useI18n } from '@/hooks/useI18n'
import { updateToggleFeatureFlagThunk } from '@/store/asyncThunks/updateToggleFeatureFlagThunk'
import { useAppDispatch } from '@/store/shared'

import {
  StyledBody,
  StyledTd,
  StyledTh,
  BodyContainer,
  Toggle,
  StyledActionsTd,
  EditIcon,
  TrashIcon,
  Tooltip
} from './styled'

type BodyData = {
  id: string
  name: string
  description: string
  state: boolean
  created_at: string
  updated_at: string
}
type BodyProps = {
  columns: {
    header: string
    accessor: keyof BodyData
  }[]
  data: BodyData[]
  onEdit?: (row: BodyData) => void
  onDelete?: (id: string, name: string) => void
}
type TableRowProps = {
  row: BodyData
  columns: BodyProps['columns']
  onEdit?: BodyProps['onEdit']
  onDelete?: BodyProps['onDelete']
}

const TableRow: React.FC<TableRowProps> = ({ row, columns, onEdit, onDelete }: TableRowProps) => {
  const t = useI18n()
  const dispatch = useAppDispatch()
  const { refetchFeatureFlags } = useFeatureFlags()

  const handleFlagToggleUpdate = async (id: string) => {
    await dispatch(updateToggleFeatureFlagThunk({ id, translate: t }))
    refetchFeatureFlags()
  }

  return (
    <tr>
      {columns.map((col, colIndex) => {
        const cellData = row[col.accessor]
        const isStateColumn = col.accessor === 'state'
        return (
          <StyledTd key={`${row.id}-${colIndex}`} tabIndex={0}>
            {isStateColumn ? (
              <Toggle>
                <input
                  type="checkbox"
                  checked={cellData as boolean}
                  onChange={() => handleFlagToggleUpdate && handleFlagToggleUpdate(row.id)}
                  id={`toggle-${row.id}`}
                  tabIndex={0}
                />
                <span />
              </Toggle>
            ) : (
              <>{cellData}</>
            )}
          </StyledTd>
        )
      })}
      <StyledActionsTd>
        {onEdit && (
          <Tooltip title={t('tooltip.table.edit')}>
            <EditIcon onClick={() => onEdit(row)} tabIndex={0} />
          </Tooltip>
        )}
        {onDelete && (
          <Tooltip title={t('tooltip.table.delete')}>
            <TrashIcon onClick={() => onDelete(row.id, row.name)} tabIndex={0} />
          </Tooltip>
        )}
      </StyledActionsTd>
    </tr>
  )
}

const Body: React.FC<BodyProps> = ({ columns, data, onEdit, onDelete }: BodyProps) => {
  const t = useI18n()

  return (
    <BodyContainer as="section" aria-labelledby="feature-flags-table">
      <StyledBody>
        <thead>
          <tr>
            {columns.map((col) => (
              <StyledTh key={col.header} tabIndex={0}>
                {col.header}
              </StyledTh>
            ))}
            <StyledTh tabIndex={0}>{t('table.columns.actions')}</StyledTh>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <TableRow key={row.id} row={row} columns={columns} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </tbody>
      </StyledBody>
    </BodyContainer>
  )
}

export default Body
