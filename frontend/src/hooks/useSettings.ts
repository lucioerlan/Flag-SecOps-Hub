import SettingsContext from '@/contexts/SettingsContext'
import { useContext } from 'react'

export default function useSettings() {
  return useContext(SettingsContext)
}
