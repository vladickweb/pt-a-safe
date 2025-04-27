"use client";

import { cn } from "@/lib/utils";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useMemo, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface ChartProps {
  type: "line" | "bar";
  title: string;
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor?: string;
      backgroundColor?: string;
    }[];
  };
  className?: string;
}

const getChartColors = (isDark: boolean) => ({
  text: isDark ? "#e0e0e0" : "#1a1a1a",
  grid: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
  background: isDark ? "#1e1e1e" : "#ffffff",
});

export function Chart({ type, title, data, className }: ChartProps) {
  const { isDarkMode } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const colors = useMemo(() => getChartColors(isDarkMode), [isDarkMode]);

  const options: ChartOptions<"line" | "bar"> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top" as const,
          labels: {
            color: colors.text,
            boxWidth: 12,
            padding: 10,
          },
        },
        title: {
          display: true,
          text: title,
          color: colors.text,
          font: {
            size: 16,
            weight: "bold",
          },
        },
      },
      scales: {
        x: {
          grid: {
            color: colors.grid,
          },
          ticks: {
            color: colors.text,
            maxRotation: 45,
            minRotation: 45,
          },
        },
        y: {
          grid: {
            color: colors.grid,
          },
          ticks: {
            color: colors.text,
            maxTicksLimit: 5,
          },
        },
      },
    }),
    [colors, title],
  );

  const chartData = useMemo(
    () => ({
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        borderColor:
          dataset.borderColor || (type === "line" ? "#008f68" : undefined),
        backgroundColor:
          dataset.backgroundColor || (type === "bar" ? "#008f68" : undefined),
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      })),
    }),
    [data, type],
  );

  if (!mounted) return null;

  return (
    <div className={cn("h-[300px] w-full", className)}>
      {type === "line" ? (
        <Line options={options} data={chartData} />
      ) : (
        <Bar options={options} data={chartData} />
      )}
    </div>
  );
}
