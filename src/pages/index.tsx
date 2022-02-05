import React from 'react'
import { css } from '@linaria/core'

const red = css`
  color: red;
  font-size: 10px;
`

const Index = () => {
  return (
    <main>
      <h1
        className={red}
      >Index</h1>
    </main>
  )
}

export default Index