import React, { FC, useEffect, useRef } from 'react'
import Vizzu, { AnimTarget } from 'vizzu'
import VizzuModule from 'vizzu/dist/cvizzu.wasm?url'

const data: AnimTarget['data'] = {
  series: [
    { name: 'Foo', values: ['Alice', 'Bob', 'Ted'] },
    { name: 'Bar', values: [15, 32, 12] },
    { name: 'Baz', values: [5, 3, 2] }
  ]
}

const Charts: FC = () => {
  const chartRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    Vizzu.options({ wasmUrl: VizzuModule })
    const chartRefCopy = chartRef
    const chart = new Vizzu('myVizzu', { data })
    chart.animate({
      x: 'Foo',
      y: 'Bar'
    })
    // Removing duplicate nodes from the dom. If this is left out, a new chart will appear every time HMR runs.
    return () => {
      if (chartRefCopy.current) chartRefCopy.current.innerHTML = ''
    }
  }, [])
  return <div ref={chartRef} id='myVizzu' style={{ width: '800px', height: '480px' }}></div>
}

export default Charts
