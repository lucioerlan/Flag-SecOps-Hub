import React, { useState, useEffect } from 'react'

import { ProgressOverlay, ProgressBar } from './styled'

export type ProgressProps = {
  initialProgress: number
  progressIncrement: number
  maxProgress: number
  intervalTime: number
  barColor: string
  bgColor: string
}

const Progress: React.FC<ProgressProps> = ({
  initialProgress,
  progressIncrement,
  maxProgress,
  intervalTime,
  barColor,
  bgColor
}) => {
  const [progress, setProgress] = useState<number>(initialProgress)
  const shouldRenderProgress = progress < maxProgress

  const updateProgress = () => {
    setProgress((oldProgress) => {
      const newProgress = oldProgress + progressIncrement
      return newProgress >= maxProgress ? maxProgress : newProgress
    })
  }

  useEffect(() => {
    const intervalId = setInterval(updateProgress, intervalTime)
    return () => clearInterval(intervalId)
  }, [progressIncrement, maxProgress, intervalTime])

  return shouldRenderProgress ? (
    <ProgressOverlay bgcolor={bgColor} data-testid="progress-bar">
      <ProgressBar width={progress} barcolor={barColor} />
    </ProgressOverlay>
  ) : null
}

export default Progress
