import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from '../shared/px'
import { baseEchartOptions } from '../shared/base-echart-options'
import { createEchartsOptions } from '../shared/create-echarts-options'

export const Chart1 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(divRef.current)
    myChart.setOption(
      createEchartsOptions({
        xAxis: {
          data: [
            '重庆市',
            '广东省',
            '山东省',
            '河南省',
            '上海市',
            '山西省',
            '四川省',
            '广西省',
            '黑龙江',
          ],
          axisTick: { show: false },
          axisLine: {
            lineStyle: { color: '#083B70' },
          },
          axisLabel: {
            formatter(val) {
              if (val.length > 2) {
                const array = val.split('')
                array.splice(2, 0, '\n')
                return array.join('')
              } else {
                return val
              }
            },
          },
        },

        yAxis: {
          splitLine: { show: false },
          axisLine: {
            show: true,
            lineStyle: { color: '#083B70' },
          },
        },
        series: [
          {
            type: 'bar',
            data: [10, 20, 36, 41, 15, 26, 37, 18, 29],
          },
        ],
      })
    )
  }, [])

  return (
    <div className="bordered jurisdiction">
      <h2>客源地</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  )
}
