import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,

  ReferenceArea,
} from "recharts";

const data = [
  { name: "Affiliate", value: 100, displayValue: 2600 },
  { name: "", value: 2100 },
  { name: "Collogues", value: 2500 },
  { name: "", value: 2000 },
  { name: "", value: 2100 },
  { name: "", value: 1800 },
  { name: "High Budget", value: 2200 },
  { name: "", value: 2300 },
  { name: "", value: 2500 },
  { name: "", value: 2700 },
  { name: "Low Budget", value: 2800, highlight: true },
  { name: "", value: 2400 },
  { name: "", value: 2500 },
  { name: "TSP- Product Sales", value: 2200 },
  { name: "", value: 2400 },
  { name: "", value: 2500 },
  { name: "", value: 2300 },
  { name: "VIP", value: 2400 },
  { name: "", value: 2300 },
  { name: "", value: 2600 },
  { name: "Whole Saler", value: 2700 },
  { name: "", value: 2800 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-lg">
        <p className="text-sm font-medium text-foreground">
          {payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const TotalValue = () => {
  return (
    <div className="w-full h-[400px] bg-card rounded-2xl p-6 shadow-sm border border-border">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          
          <CartesianGrid 
            strokeDasharray="0" 
            stroke="hsl(220, 14%, 92%)" 
            horizontal={true}
            vertical={false}
          />
          
          {/* Highlight area for Low Budget */}
          <ReferenceArea 
            x1="Low Budget" 
            x2="" 
            fill="hsl(217, 91%, 95%)" 
            fillOpacity={0.6}
          />
          
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ 
              fill: "hsl(220, 10%, 50%)", 
              fontSize: 12,
              fontWeight: 400 
            }}
            dy={10}
            interval={0}
            angle={0}
            textAnchor="middle"
          />
          
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ 
              fill: "hsl(220, 10%, 50%)", 
              fontSize: 12,
              fontWeight: 400 
            }}
            domain={[0, 2800]}
            ticks={[0, 2000, 2000, 2000, 2000]}
            tickFormatter={(value) => value.toLocaleString()}
            dx={-10}
          />
          
          <Tooltip content={<CustomTooltip />} />
          
          <Area
            type="monotone"
            dataKey="value"
            stroke="hsl(217, 91%, 60%)"
            strokeWidth={2.5}
            fill="url(#colorValue)"
            dot={false}
            activeDot={{
              r: 6,
              fill: "hsl(217, 91%, 60%)",
              stroke: "white",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
      
      <div className="text-center mt-4">
        <p className="text-sm font-medium text-muted-foreground">April 2025</p>
      </div>
    </div>
  );
};

export default TotalValue;
