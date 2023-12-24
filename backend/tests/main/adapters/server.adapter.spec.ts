import { FastifyAdapter } from '@/main/adapters'
import { Routes } from '@/presentation/protocols'

const mockRoutes: Routes[] = [
  { method: 'GET', url: '/test1', handler: jest.fn() },
  { method: 'GET', url: '/test2', handler: jest.fn() }
]

const sutFactory = () => {
  const sut: FastifyAdapter = new FastifyAdapter(mockRoutes, 3000)

  return { sut }
}

describe('FastifyAdapter', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should start the server', async () => {
    const { sut } = sutFactory()

    const listenSpy = jest.spyOn(sut['app'], 'listen').mockResolvedValueOnce(undefined as unknown as never)
    await sut.start()

    expect(listenSpy).toHaveBeenCalledWith({ port: 3000, host: '0.0.0.0' })
  })

  it('should exit the process if an error occurs', async () => {
    const { sut } = sutFactory()

    const exitSpy = jest.spyOn(process, 'exit').mockImplementationOnce(() => {
      return undefined as unknown as never
    })

    const listenSpy = jest.spyOn(sut['app'], 'listen').mockRejectedValueOnce(new Error('Test error'))
    await sut.start()

    expect(listenSpy).toHaveBeenCalledWith({ port: 3000, host: '0.0.0.0' })
    expect(exitSpy).toHaveBeenCalledWith(1)
  })
})
