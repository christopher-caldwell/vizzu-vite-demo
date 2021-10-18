import React, { FC, Suspense } from 'react'
import Charts from '@/pages'

const App: FC = () => {
  return (
    <div style={styles}>
      <Suspense fallback={<span />}>
        <Charts />
      </Suspense>
    </div>
  )
}

const styles = {
  padding: '1% 2% 10vh 2%',
  width: '100%',
  paddingTop: '70px',
  display: 'flex',
  alignItems: 'center'
}

export default App
