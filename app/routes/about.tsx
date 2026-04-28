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
  Cell,
} from "recharts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About · Davin Octavian" },
    { name: "description", content: "Career history of Davin Octavian" },
  ];
}

const data = [
  { role: ".NET Developer", years: 1.2, color: "#4fd1ff" },
  { role: "Tech. Consultant Assoc.", years: 0.25, color: "#00f0ff" },
  { role: "Web Developer", years: 2.67, color: "#00d4e8" },
  { role: "Frontend Engineer", years: 2.42, color: "#00b8cc" },
  { role: "Senior Frontend Engineer", years: 2.58, color: "#ffd97d" },
];

const totalYears = data.reduce((s, d) => s + d.years, 0).toFixed(1);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div
      style={{
        background: "rgba(5,18,30,.92)",
        border: "1px solid rgba(0,240,255,.3)",
        borderRadius: "10px",
        padding: "10px 16px",
        color: "#00f0ff",
        fontSize: ".8rem",
        letterSpacing: ".06em",
      }}
    >
      <p style={{ color: "#fff", marginBottom: 4, fontWeight: 700 }}>{label}</p>
      <p>{payload[0].value} years</p>
    </div>
  );
};

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <PageShell
      bgClass="bg-[url('/textures/hd_venus.webp')] bg-cover bg-center"
      title="Venus · About"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        {[
          { label: "Total Experience", value: `${totalYears} yrs` },
          { label: "Roles", value: `${data.length}` },
          { label: "Current Level", value: "Senior FE Eng." },
        ].map(({ label, value }) => (
          <div key={label} className="glass-panel p-5 text-center">
            <p className="text-white font-bold text-2xl tracking-tight">
              {value}
            </p>
            <p className="section-title text-[10px] mt-1">{label}</p>
          </div>
        ))}
      </div>

      <div className="glass-panel p-6 sm:p-8">
        <h2 className="section-title text-sm mb-6">Career Progression</h2>
        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={data}
              margin={{ top: 4, right: 40, left: isMobile ? 8 : 40, bottom: 4 }}
            >
              <XAxis
                type="number"
                tick={{ fill: "rgba(255,255,255,.45)", fontSize: 11 }}
                axisLine={{ stroke: "rgba(0,240,255,.12)" }}
                tickLine={false}
              />
              <YAxis
                type="category"
                dataKey="role"
                width={isMobile ? 90 : 170}
                tick={{
                  fill: "rgba(255,255,255,.75)",
                  fontSize: isMobile ? 10 : 12,
                }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "rgba(0,240,255,.05)" }}
              />
              <Bar
                dataKey="years"
                radius={[0, 6, 6, 0]}
                isAnimationActive
                animationDuration={1000}
              >
                {data.map((entry, i) => (
                  <Cell key={i} fill={entry.color} fillOpacity={0.85} />
                ))}
                <LabelList
                  dataKey="years"
                  position="right"
                  fill="rgba(255,255,255,.6)"
                  fontSize={11}
                  formatter={(v: unknown) => `${v}y`}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-panel p-6 sm:p-8 mt-4">
        <h2 className="section-title text-sm mb-5">Core Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Angular",
            "Vue",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "C#",
            "TailwindCSS",
            "Redux",
            "RxJS",
            "Figma",
            "Git",
          ].map((s) => (
            <span key={s} className="tag">
              {s}
            </span>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
