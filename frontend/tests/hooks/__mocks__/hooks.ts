const actualReact = jest.requireActual('react')

export const useMemoMock = jest.fn((fn) => fn())
export const useStateMock = jest.fn((initialState) => [initialState, jest.fn()])
export const useEffectMock = jest.fn((fn) => fn())
export const useContextMock = jest.fn().mockReturnValue({
  t: jest.fn().mockImplementation((key) => key)
})

export const reactMocks = {
  ...actualReact,
  useMemo: useMemoMock,
  useState: useStateMock,
  useEffect: useEffectMock,
  useContext: useContextMock
}
