import 'dotenv/config'
import { FastifyAdapter, IFastifyAdapter } from '@/main/adapters'
import { routes } from '@/main/routes'
import { Routes } from '@/presentation/protocols'

const main = async (): Promise<void> => {
  const fastifyAdapter: IFastifyAdapter = new FastifyAdapter(routes as Routes[], 5000)
  await fastifyAdapter.start()
}

main()
