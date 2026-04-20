import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// sample data
const data = [
  { name: "April", uv: 4000 },
  { name: "April", uv: 4000 },
  { name: "April", uv: 4000 },
  { name: "April", uv: 4000 },


];

const TotalIncome = () => {
  return (
    <div className="border rounded-lg border-blue-400" style={{ width: "100%", maxWidth: "100%", height: "600px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
          {/* grid style like your image */}
          <CartesianGrid stroke="#E6EDFF" horizontal vertical={false} />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94A3B8" }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94A3B8" }}
          />

          <Tooltip />

          {/* gradient like screenshot */}
          <defs>
            <linearGradient id="softBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E6EDFF" stopOpacity={1} />
              <stop offset="100%" stopColor="#E6EDFF" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Area
            type="monotone"
            dataKey="uv"
            stroke="#4BA3F9"
            strokeWidth={3}
            fill="url(#softBlue)"
            dot={{ r: 4, fill: "#4BA3F9" }}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalIncome;
