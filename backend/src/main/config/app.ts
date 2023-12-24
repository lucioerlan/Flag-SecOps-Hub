import 'dotenv/config'
import { MongoHelper } from '@/infra/database/mongodb/helper/mongodb.helper'
import { FastifyAdapter, IFastifyAdapter } from '@/main/adapters'
import env from '@/main/config/env'
import { routes } from '@/main/routes'
import { Routes } from '@/presentation/protocols'

const main = async (): Promise<void> => {
  await MongoHelper.connect(env.mongoUrl)
  const fastifyAdapter: IFastifyAdapter = new FastifyAdapter(routes as Routes[], env.port)
  await fastifyAdapter.start()
}

main()
