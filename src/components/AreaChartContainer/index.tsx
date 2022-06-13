import { AreaChartComponent } from '../AreaChartComponent'
import { Loader } from '../Loader'
import { Calendar } from '../Icons/Calendar'
import { ArrowUp } from '../Icons/ArrowUp'
import './areachartContainer.css'

import { Data } from '../../hooks/useFetch'

interface Props {
  data: Data[],
  loading: boolean
}

export function AreaChartContainer({ data, loading}: Props) {

  return(
    <div className="area-chart--container">
      <div className="area-chart--header">
        <h2 className="area-chart--title">weekly expenses</h2>
        <button className="area-chart--filter">
          <span>All</span>
          <Calendar />
        </button>
      </div>
      <div className="chart--container">
        {
          loading
            ? <Loader />
            : <AreaChartComponent info={data} />
        }
      </div>
      <div className="total--container">
            <span className="total--title">total revenue</span>
            <span className="total-revenue">$76685.41</span>
            <div className="total--percentage">
              <ArrowUp />
              <span>7.00%</span>
            </div>
          </div>
    </div>
  )
}