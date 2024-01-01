export const createMockToast = () =>
  jest.fn().mockImplementation((message, options) => {
    if (options?.onClose) options.onClose()
  })

export const toastifyMock = () => ({
  success: createMockToast(),
  warning: createMockToast(),
  error: createMockToast()
})

export const mockNavigate = jest.fn()
export const reactRouterDomMock = () => ({
  useNavigate: () => mockNavigate
})
