import swagger from '@/main/docs/swagger'

const sutFactory = () => {
  const sut = swagger
  return { sut }
}

describe('OpenAPI Configuration Tests', () => {
  const { sut } = sutFactory()

  it('should have correct title in info object', () => {
    expect(sut.openapi.info.title).toEqual('🛡️ Flag SecOps Hub Backend')
  })

  it('should define servers correctly', () => {
    expect(sut.openapi.servers.length).toBeGreaterThan(0)
    expect(sut.openapi.servers[0].url).toEqual('http://localhost:5000')
  })

  it('should define paths correctly for /auth/register', () => {
    const path = sut.openapi.paths['/auth/register']
    expect(path).toBeDefined()
    expect(path.post).toBeDefined()
  })

  it('should define requestBody for /auth/register', () => {
    const requestBody = sut.openapi.paths['/auth/register'].post.requestBody
    expect(requestBody).toBeDefined()
    expect(requestBody.required).toBeTruthy()
  })
})
