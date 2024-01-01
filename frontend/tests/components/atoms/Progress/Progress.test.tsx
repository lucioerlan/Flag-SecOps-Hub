import { Progress } from '@/components'
import { render, screen, act } from '@testing-library/react'

jest.useFakeTimers()

describe('Progress Component', () => {
  afterEach(() => {
    jest.clearAllTimers()
    jest.restoreAllMocks()
  })

  const defaultProps = {
    initialProgress: 20,
    progressIncrement: 5,
    maxProgress: 100,
    intervalTime: 1000,
    barColor: 'blue',
    bgColor: 'gray'
  }

  const setup = (props = {}) => {
    return render(<Progress {...defaultProps} {...props} />)
  }

  it('renders with initial progress', () => {
    setup()
    const progressBar = screen.getByTestId('progress-bar')
    expect(progressBar).toBeInTheDocument()
    expect(progressBar.firstChild).toHaveStyle('width: 20%')
  })

  it('increments progress over time', () => {
    setup()
    act(() => {
      jest.advanceTimersByTime(3000)
    })
    const progressBar = screen.getByTestId('progress-bar')
    expect(progressBar.firstChild).toHaveStyle('width: 35%')
  })

  it('does not render the progress bar once max progress is reached', () => {
    setup({ initialProgress: 95 })
    act(() => {
      jest.advanceTimersByTime(2000)
    })
    expect(screen.queryByTestId('progress-bar')).toBeNull()
  })

  it('respects interval time', () => {
    setup({ intervalTime: 2000 })
    act(() => {
      jest.advanceTimersByTime(4000)
    })
    const progressBar = screen.getByTestId('progress-bar')
    expect(progressBar.firstChild).toHaveStyle('width: 30%')
  })

  it('does not render when initial progress is max or more', () => {
    setup({ initialProgress: 100 })
    expect(screen.queryByTestId('progress-bar')).toBeNull()
  })

  it('applies correct colors based on props', () => {
    setup({ barColor: 'red', bgColor: 'black' })
    const progressBar = screen.getByTestId('progress-bar')
    expect(progressBar).toHaveStyle('background-color: black')
    expect(progressBar.firstChild).toHaveStyle('background-color: red')
  })

  it('cleans up interval when unmounted or max progress reached', () => {
    const clearIntervalSpy = jest.spyOn(global, 'clearInterval')
    const { unmount } = setup()
    act(() => {
      jest.advanceTimersByTime(5000)
    })
    unmount()
    expect(clearIntervalSpy).toHaveBeenCalled()
  })
})
