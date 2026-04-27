import { useEffect, useState } from "react";
import { PageShell } from "../components/PageShell";
import type { Route } from "./+types/about";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Davin Octavian" },
    { name: "description", content: "This page contain about Davin Octavian" },
  ];
}

const data = [
  { role: ".NET Developer", years: 1.2 },
  { role: "Technical Consultant Assoc", years: 0.25 },
  { role: "Web Developer", years: 2.67 },
  { role: "Frontend Engineer", years: 2.42 },
  { role: "Senior Frontend Engineer", years: 2.5 },
];

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <PageShell className="bg-[url('/textures/hd_venus.webp')] bg-cover bg-center">
      <div className="min-w-[320px] sm:min-w-[500px] md:min-w-[600px] lg:min-w-[700px] h-[400px] pb-6">
        <h2 className="text-center text-lg sm:text-xl font-bold mb-4">
          Career Progression Timeline
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: isMobile ? 40 : 100,
              bottom: 20,
            }}
          >
            <XAxis
              type="number"
              tick={{ fill: "#ffffff", fontSize: isMobile ? 12 : 14 }}
              label={{
                value: "Years of Experience",
                position: "insideBottomRight",
                offset: -5,
                fill: "#ffffff",
                fontSize: 16,
              }}
            />
            <YAxis
              type="category"
              dataKey="role"
              tick={{ fill: "#ffffff", fontSize: isMobile ? 12 : 14 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(25,36,37,0.9)",
                border: "1px solid #00eaff",
                borderRadius: "8px",
                color: "#88fffe",
              }}
            />
            <Bar
              dataKey="years"
              fill="#00eaff"
              isAnimationActive={true}
              animationDuration={1200}
            >
              <LabelList
                dataKey="years"
                position="right"
                fill="#ffffff"
                fontSize={14}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </PageShell>
  );
}
