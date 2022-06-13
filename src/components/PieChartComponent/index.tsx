import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data01 = [
  { name: 'Group A', value: 2562 },
  { name: 'Group B', value: 1400 },
  { name: 'Group C', value: 400 },
  { name: 'Group D', value: 3400 }
];

const COLORS = ['#9013FE', '#007AFF', '#E6E5E6', '#FB8832'];

export function PieChartComponent() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={135}
            fill="#8884d8"
          >
            {data01.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
}
