import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/src/component/DefaultTooltipContent';
import { transformToKilo } from '../../helpers/transformToKilo'
import format from 'date-fns/format'
import './area.css'

import { Data } from '../../hooks/useFetch'

interface Props {
  info: Data[]
}

export function AreaChartComponent({ info }: Props) {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={info}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="40%" stopColor="#2e14c2" stopOpacity={1} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity={0.9} />
            </linearGradient>
          </defs>
          <CartesianGrid horizontal={false} />
          <XAxis 
            dataKey="Date" 
            tickMargin={8}
            tickFormatter={data => {
              const dt = new Date(data)
              return format(dt, 'dd-MM-yy')
            }}
          />
          <YAxis 
            dataKey="Close" 
            axisLine={false} 
            tickLine={false} 
            tickCount={10}
            tickFormatter={number => (transformToKilo(number))}
          />
          <Tooltip content={<CustomTooltip />}/>
          {/*  En fill agregamos url(#color) que hace referencia a la id de la gradiente  */}
          <Area type="monotone" dataKey="Close" stroke="#2e14c2" fill="url(#color)" />
        </AreaChart>
      </ResponsiveContainer>
    );
}

/* if you don't use TooltipProps, ValueType and NameType. Typescript will match a error  */
function CustomTooltip({ active, payload, label }: TooltipProps<ValueType, NameType>) {
  
  if(active) {

    return(
      <div className="custom-tooltip">
        <h4>{ label }</h4>
        <span>Open: ${payload?.[0].payload["Open"].toFixed(2)}</span>
        <span>Close: ${payload?.[0].payload["Close"].toFixed(2)}</span>
        <span>High: ${payload?.[0].payload["High"].toFixed(2)}</span>
        <span>Low: ${payload?.[0].payload["Low"].toFixed(2)}</span>
      </div>
    )
  }
  
  return null
}
