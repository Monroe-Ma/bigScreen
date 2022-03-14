import React from 'react'

export const Chart14 = () => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>类型</th>
          <th>单数</th>
          <th>总计</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={4}>交通工具</td>
          <td>道路封闭未发布</td>
          <td>10</td>
          <td rowSpan={4}>80</td>
        </tr>
        <tr>
          <td>绕道走</td>
          <td>20</td>
        </tr>
        <tr>
          <td>难以打车</td>
          <td>20</td>
        </tr>
        <tr>
          <td>交通工具不达标</td>
          <td>30</td>
        </tr>
        <tr>
          <td rowSpan={2}>旅行社</td>
          <td>收费不合理</td>
          <td>22</td>
          <td rowSpan={2}>44</td>
        </tr>
        <tr>
          <td>逛购物店</td>
          <td>22</td>
        </tr>
        <tr>
          <td rowSpan={3}>食宿</td>
          <td>环境不卫生</td>
          <td>40</td>
          <td rowSpan={3}>68</td>
        </tr>
        <tr>
          <td>不开发票</td>
          <td>22</td>
        </tr>
        <tr>
          <td>定价模糊</td>
          <td>45</td>
        </tr>
        <tr>
          <td rowSpan={2}>服务</td>
          <td>景区服务态度差</td>
          <td>32</td>
          <td rowSpan={2}>102</td>
        </tr>
        <tr>
          <td>物品遗失不安排</td>
          <td>80</td>
        </tr>
      </tbody>
    </table>
  )
}
