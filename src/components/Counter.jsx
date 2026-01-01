import React, { memo, useEffect } from 'react'

const Counter = () => {

    console.log("Counter component is rendered")

  return (
    <div>Counter

    </div>
  )
}

export default memo(Counter)