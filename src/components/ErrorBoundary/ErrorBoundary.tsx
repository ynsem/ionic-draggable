import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

type TProps = {
  children: React.ReactNode
}

const ErrorBoundaryComponent = ({ children }: TProps) => {
  return (
    <ErrorBoundary
      fallback={<h1>ERROR</h1>}
    >
      {children}
    </ErrorBoundary>
  )
}

export default ErrorBoundaryComponent
