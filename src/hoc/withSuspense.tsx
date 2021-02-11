import React, { Suspense } from 'react'

function WithSuspense(Component: React.ComponentType): React.FC {
  return () => (
    <Suspense fallback={<div>Loading</div>}>
      <Component />
    </Suspense>
  )
}

export default WithSuspense