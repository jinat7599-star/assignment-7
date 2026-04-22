import { useEffect, useState, useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getTimelineData } from "../utils/localStorage";

 
const CHART_PALETTE = ["#22c55e", "#3b82f6", "#a855f7"];
const CATEGORIES = ["Call", "Text", "Video"];

const Stats = () => {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    const rawData = getTimelineData() || [];

     
    const processed = CATEGORIES.map((category) => {
      const count = rawData.filter((item) => item.type === category).length;
      return { name: category, value: count };
    });

    setAnalytics(processed);
  }, []);

  
  const hasData = useMemo(() => analytics.some((item) => item.value > 0), [analytics]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <header>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Friendship Analytics
        </h1>
      </header>

      <section className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-400 mb-6">
          Interaction Overview
        </h2>

        {!hasData ? (
          <div className="text-center text-slate-400 py-20 text-lg italic">
            No interaction data available yet.
          </div>
        ) : (
          <div className="w-full h-[420px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={analytics}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={130}
                  innerRadius={60}  
                  labelLine={true}
                  label
                >
                  {analytics.map((entry, idx) => (
                    <Cell 
                      key={`segment-${idx}`} 
                      fill={CHART_PALETTE[idx % CHART_PALETTE.length]} 
                      strokeWidth={0}
                    />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </section>
    </main>
  );
};

export default Stats;