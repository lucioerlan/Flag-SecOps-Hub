import { ErrorMessageForm } from './styled'

type ErrorMessageProps = {
  name: string
  component?: string
  className?: string
}

const ErrorMessage = ({ ...props }: ErrorMessageProps) => <ErrorMessageForm {...props} />

export default ErrorMessage
