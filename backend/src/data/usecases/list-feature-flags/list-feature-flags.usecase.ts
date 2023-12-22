import { IListFeatureFlags } from '@/domain/usecases/list-feature-flags/list-feature-flags'

export class ListFeatureFlagsUsecase implements IListFeatureFlags {
  async listFeatureFlags(): Promise<IListFeatureFlags.Result> {
    return [
      {
        id: '1',
        name: 'Nova Interface',
        description: 'Libera a nova interface do usuário',
        state: true,
        created_at: '2023-12-22T12:00:00Z',
        updated_at: '2023-12-22T12:00:00Z'
      },
      {
        id: '2',
        name: 'Modo Escuro',
        description: 'Ativa o modo escuro no aplicativo',
        state: false,
        created_at: '2023-12-21T11:00:00Z',
        updated_at: '2023-12-21T11:00:00Z'
      }
    ]
  }
}
