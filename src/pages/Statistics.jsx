import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Tasks', value: 400 },
  { name: 'Inconplete', value: 300 },
  { name: 'Complete', value: 300 },
  { name: 'Delete', value: 200 },
  { name: 'Archived', value: 100 }
];

const COLORS = ['#00796B', '#F57C00', '#1976D2', '#D32F2F', '#5D4037']; // darker shades

export default function Statistics() {
  return (
    <div className="flex justify-center items-center flex-col gap-4 mt-6">
      <h2 className="text-lg font-semibold">Task Statistics</h2>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          dataKey="value"
          nameKey="name"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
