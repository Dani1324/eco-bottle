"use client";

import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "@/styles/report.module.css";

// Hook per ottenere margini responsivi
function useResponsiveChartMargins(baseLeftMargin: number, baseYAxisWidth: number) {
  const [margins, setMargins] = useState({
    left: baseLeftMargin,
    yAxisWidth: baseYAxisWidth,
    fontSize: 11,
  });

  useEffect(() => {
    const updateMargins = () => {
      const width = typeof window !== "undefined" ? window.innerWidth : 768;
      
      if (width < 640) {
        // Mobile: riduci drasticamente
        setMargins({
          left: Math.max(60, Math.floor(baseLeftMargin * 0.35)),
          yAxisWidth: Math.max(50, Math.floor(baseYAxisWidth * 0.35)),
          fontSize: 9,
        });
      } else if (width < 1024) {
        // Tablet: riduci moderatamente
        setMargins({
          left: Math.max(80, Math.floor(baseLeftMargin * 0.6)),
          yAxisWidth: Math.max(70, Math.floor(baseYAxisWidth * 0.6)),
          fontSize: 10,
        });
      } else {
        // Desktop: mantieni originale
        setMargins({
          left: baseLeftMargin,
          yAxisWidth: baseYAxisWidth,
          fontSize: 11,
        });
      }
    };

    updateMargins();
    window.addEventListener("resize", updateMargins);
    return () => window.removeEventListener("resize", updateMargins);
  }, [baseLeftMargin, baseYAxisWidth]);

  return margins;
}

const COLORS = [
  "#2A3D30", // green-dark
  "#3D6B3D", // green-medium
  "#5A8A5A", // green-light
  "#2D5233", // green-saturated
  "#4A8A5A", // green-medium-light
  "#1F3A28", // green-darker
  "#6B9A6B", // green-grayish
  "#1A1A1A", // black
  "#3D6B3D", // green-medium
  "#4A8A5A", // green-medium-light
];

// ======================
// SEZIONE A: PREFERENZE PRODOTTO
// ======================

export function ProductCharacteristicsChart() {
  const margins = useResponsiveChartMargins(200, 200);
  const data = [
    { name: "Materiali ecologici", value: 47.62 },
    { name: "Mantenimento temperatura", value: 52.38 },
    { name: "Leggerezza e portabilità", value: 47.62 },
    { name: "Design elegante", value: 33.33 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical" margin={{ left: margins.left, right: 30, top: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tick={{ fill: "#2A3D30" }} />
          <YAxis dataKey="name" type="category" width={margins.yAxisWidth} tick={{ fill: "#2A3D30", fontSize: margins.fontSize }} />
          <Tooltip formatter={(value: any) => `${value}%`} />
          <Bar dataKey="value" fill="#3D6B3D" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function MaterialPreferenceChart() {
  const data = [
    { name: "Acciaio inossidabile", value: 33.33 },
    { name: "Materiali biodegradabili", value: 33.33 },
    { name: "Plastica riciclata", value: 19.05 },
    { name: "Vetro", value: 4.76 },
    { name: "Nessuna preferenza", value: 4.76 },
    { name: "Altro", value: 4.76 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }: any) => `${name} ${(value as number).toFixed(1)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CapacityPreferenceChart() {
  const data = [
    { name: "Piccola (350–500 ml)", value: 14.29 },
    { name: "Media (500–750 ml)", value: 38.10 },
    { name: "Grande (750 ml – 1 litro)", value: 42.86 },
    { name: "Extra large (oltre 1 litro)", value: 4.76 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }: any) => `${name} ${(value as number).toFixed(1)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ColorPreferenceChart() {
  const margins = useResponsiveChartMargins(180, 180);
  const data = [
    { name: "Colori naturali", value: 45.0 },
    { name: "Colori neutri", value: 40.0 },
    { name: "Colori vivaci", value: 30.0 },
    { name: "Effetto legno/pietra", value: 30.0 },
    { name: "Colori pastello", value: 25.0 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical" margin={{ left: margins.left, right: 30, top: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tick={{ fill: "#2A3D30" }} />
          <YAxis dataKey="name" type="category" width={margins.yAxisWidth} tick={{ fill: "#2A3D30", fontSize: margins.fontSize }} />
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
          <Bar dataKey="value" fill="#3D6B3D" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ======================
// SEZIONE B: TECNOLOGIA E APP
// ======================

export function AppInterestChart() {
  const data = [
    { name: "Molto interessato/a", value: 19.05 },
    { name: "Abbastanza interessato/a", value: 71.43 },
    { name: "Poco interessato/a", value: 9.52 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }: any) => `${name} ${(value as number).toFixed(1)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function AppFeaturesChart() {
  const margins = useResponsiveChartMargins(210, 210);
  const data = [
    { name: "Promemoria per bere acqua", value: 60.0 },
    { name: "Statistiche settimanali/mensili", value: 40.0 },
    { name: "Tracciamento giornaliero", value: 40.0 },
    { name: "Gamification", value: 35.0 },
    { name: "Consigli personalizzati", value: 30.0 },
    { name: "Monitoraggio qualità", value: 30.0 },
    { name: "Obiettivi personalizzati", value: 25.0 },
    { name: "Integrazione fitness", value: 20.0 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} layout="vertical" margin={{ left: margins.left, right: 30, top: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tick={{ fill: "#2A3D30" }} />
          <YAxis dataKey="name" type="category" width={margins.yAxisWidth} tick={{ fill: "#2A3D30", fontSize: margins.fontSize }} />
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
          <Bar dataKey="value" fill="#3D6B3D" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ======================
// SEZIONE C: PREZZO E FATTORI DI ACQUISTO
// ======================

export function WTPChart() {
  const data = [
    { name: "<20 €", value: 9.52 },
    { name: "20–35 €", value: 33.33 },
    { name: "35–50 €", value: 47.62 },
    { name: "50–70 €", value: 4.76 },
    { name: "70–100 €", value: 4.76 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }: any) => `${name} ${(value as number).toFixed(1)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PurchaseDriverChart() {
  const margins = useResponsiveChartMargins(200, 200);
  const data = [
    { name: "Qualità materiali", value: 33.33 },
    { name: "Design ed estetica", value: 28.57 },
    { name: "Prezzo", value: 19.05 },
    { name: "Sostenibilità ambientale", value: 9.52 },
    { name: "Recensioni/passaparola", value: 4.76 },
    { name: "Funzionalità smart", value: 4.76 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical" margin={{ left: margins.left, right: 30, top: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tick={{ fill: "#2A3D30" }} />
          <YAxis dataKey="name" type="category" width={margins.yAxisWidth} tick={{ fill: "#2A3D30", fontSize: margins.fontSize }} />
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
          <Bar dataKey="value" fill="#3D6B3D" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ======================
// SEZIONE D: CANALI E COMUNICAZIONE
// ======================

export function PurchaseChannelChart() {
  const margins = useResponsiveChartMargins(210, 210);
  const data = [
    { name: "Amazon / marketplace online", value: 25.0 },
    { name: "Grande distribuzione", value: 25.0 },
    { name: "Negozi articoli sportivi", value: 15.0 },
    { name: "E-commerce del produttore", value: 10.0 },
    { name: "Negozi di elettronica", value: 10.0 },
    { name: "Negozi design/lifestyle", value: 10.0 },
    { name: "Negozi bio/ecologici", value: 5.0 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical" margin={{ left: margins.left, right: 30, top: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tick={{ fill: "#2A3D30" }} />
          <YAxis dataKey="name" type="category" width={margins.yAxisWidth} tick={{ fill: "#2A3D30", fontSize: margins.fontSize }} />
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
          <Bar dataKey="value" fill="#3D6B3D" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CommunicationChannelChart() {
  const margins = useResponsiveChartMargins(210, 210);
  const data = [
    { name: "Instagram", value: 42.86 },
    { name: "Blog e siti di settore", value: 33.33 },
    { name: "Influencer/creator", value: 33.33 },
    { name: "Facebook", value: 28.57 },
    { name: "YouTube", value: 23.81 },
    { name: "Passaparola", value: 23.81 },
    { name: "Pubblicità tradizionale", value: 19.05 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} layout="vertical" margin={{ left: margins.left, right: 30, top: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tick={{ fill: "#2A3D30" }} />
          <YAxis dataKey="name" type="category" width={margins.yAxisWidth} tick={{ fill: "#2A3D30", fontSize: margins.fontSize }} />
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
          <Bar dataKey="value" fill="#3D6B3D" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function InfluencerFollowingChart() {
  const data = [
    { name: "Sì, regolarmente", value: 45.0 },
    { name: "Sì, occasionalmente", value: 30.0 },
    { name: "No", value: 25.0 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }: any) => `${name} ${(value as number).toFixed(1)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

// ======================
// SEZIONE E: BRAND AWARENESS
// ======================

export function BrandAwarenessChart() {
  const margins = useResponsiveChartMargins(150, 150);
  const data = [
    { name: "Air Up", value: 52.38 },
    { name: "Chilly's", value: 47.62 },
    { name: "24Bottles", value: 19.05 },
    { name: "Stanley", value: 19.05 },
    { name: "CamelBak", value: 14.29 },
    { name: "Hydro Flask", value: 9.52 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical" margin={{ left: margins.left, right: 30, top: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tick={{ fill: "#2A3D30" }} />
          <YAxis dataKey="name" type="category" width={margins.yAxisWidth} tick={{ fill: "#2A3D30", fontSize: margins.fontSize }} />
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
          <Bar dataKey="value" fill="#3D6B3D" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ======================
// SEZIONE F: DATI DEMOGRAFICI
// ======================

export function AgeDistributionChart() {
  const data = [
    { name: "18–24", value: 42.86 },
    { name: "25–34", value: 23.81 },
    { name: "35–44", value: 9.52 },
    { name: "45–54", value: 23.81 },
  ];



  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }: any) => `${name} ${(value as number).toFixed(1)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function GenderDistributionChart() {
  const data = [
    { name: "Femmina", value: 52.38 },
    { name: "Maschio", value: 28.57 },
    { name: "Preferisco non specificare", value: 14.29 },
    { name: "Altro", value: 4.76 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }: any) => `${name} ${(value as number).toFixed(1)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function OccupationDistributionChart() {
  const data = [
    { name: "Studente", value: 38.10 },
    { name: "Lavoratore dipendente", value: 38.10 },
    { name: "Autonomo/Libero professionista", value: 19.05 },
    { name: "Sportivo/Atleta", value: 4.76 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }: any) => `${name} ${(value as number).toFixed(1)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function AreaGeographicaChart() {
  const data = [
    { name: "Centro Italia", value: 60.0 },
    { name: "Nord Italia", value: 14.29 },
    { name: "Sud Italia e Isole", value: 14.29 },
    { name: "Estero", value: 9.52 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }: any) => `${name} ${(value as number).toFixed(1)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

// ======================
// SEZIONE G: ABITUDINI DI IDRATAZIONE
// ======================

export function WaterConsumptionChart() {
  const data = [
    { name: "1-1,5L", value: 47.62 },
    { name: "1,5-2L", value: 42.86 },
    { name: ">2L", value: 4.76 },
    { name: "0,5-1L", value: 4.76 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }: any) => `${name} ${(value as number).toFixed(1)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function BottleUsageChart() {
  const data = [
    { name: "Sì, quotidianamente", value: 38.10 },
    { name: "Sì, occasionalmente", value: 38.10 },
    { name: "No, ma vorrei iniziare", value: 23.81 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }: any) => `${name} ${(value as number).toFixed(1)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function UsageContextsChart() {
  const margins = useResponsiveChartMargins(220, 220);
  const data = [
    { name: "Durante attività sportiva", value: 71.43 },
    { name: "Al lavoro/università", value: 57.14 },
    { name: "All'aperto/escursioni", value: 52.38 },
    { name: "A casa", value: 42.86 },
    { name: "In viaggio", value: 33.33 },
    { name: "Altro", value: 4.76 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical" margin={{ left: margins.left, right: 30, top: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tick={{ fill: "#2A3D30" }} />
          <YAxis dataKey="name" type="category" width={margins.yAxisWidth} tick={{ fill: "#2A3D30", fontSize: margins.fontSize }} />
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
          <Bar dataKey="value" fill="#3D6B3D" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ======================
// TABELLA: CARATTERISTICHE DI IMPORTANZA
// ======================

export function CharacteristicsImportanceTable() {
  const characteristics = [
    { name: "Materiali Ecologici", molto: 47.62, abbastanza: 28.57, indifferente: 14.29, poco: 9.52, perNiente: 0.0 },
    { name: "Monitoraggio App/Promemoria", molto: 4.76, abbastanza: 38.10, indifferente: 33.33, poco: 19.05, perNiente: 4.76 },
    { name: "Mantenimento Temperatura", molto: 52.38, abbastanza: 28.57, indifferente: 19.05, poco: 0.0, perNiente: 0.0 },
    { name: "Design e Personalizzazione", molto: 33.33, abbastanza: 42.86, indifferente: 14.29, poco: 4.76, perNiente: 4.76 },
    { name: "Leggerezza e Portabilità", molto: 47.62, abbastanza: 38.10, indifferente: 9.52, poco: 4.76, perNiente: 0.0 },
    { name: "Facilità di Pulizia", molto: 38.10, abbastanza: 47.62, indifferente: 14.29, poco: 0.0, perNiente: 0.0 },
    { name: "Prezzo/Rapporto Qualità-Prezzo", molto: 23.81, abbastanza: 47.62, indifferente: 19.05, poco: 4.76, perNiente: 4.76 },
    { name: "Marca Affidabile/Storica", molto: 4.76, abbastanza: 9.52, indifferente: 47.62, poco: 19.05, perNiente: 19.05 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px", overflowX: "auto" }}>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "13px",
        color: "#2A3D30",
      }}>
        <thead>
          <tr style={{ backgroundColor: "#2A3D30", color: "white" }}>
            <th style={{ padding: "10px", textAlign: "left", fontWeight: "bold" }}>Caratteristica</th>
            <th style={{ padding: "10px", textAlign: "center", fontWeight: "bold" }}>Molto Importante</th>
            <th style={{ padding: "10px", textAlign: "center", fontWeight: "bold" }}>Abbastanza Importante</th>
            <th style={{ padding: "10px", textAlign: "center", fontWeight: "bold" }}>Indifferente</th>
            <th style={{ padding: "10px", textAlign: "center", fontWeight: "bold" }}>Poco Importante</th>
            <th style={{ padding: "10px", textAlign: "center", fontWeight: "bold" }}>Per Niente Importante</th>
          </tr>
        </thead>
        <tbody>
          {characteristics.map((char, idx) => (
            <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? "#f9f9f9" : "#ffffff", borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px", fontWeight: "500" }}>{char.name}</td>
              <td style={{ padding: "10px", textAlign: "center", color: "#2A3D30" }}>{char.molto.toFixed(2)}%</td>
              <td style={{ padding: "10px", textAlign: "center", color: "#3D6B3D" }}>{char.abbastanza.toFixed(2)}%</td>
              <td style={{ padding: "10px", textAlign: "center", color: "#5A8A5A" }}>{char.indifferente.toFixed(2)}%</td>
              <td style={{ padding: "10px", textAlign: "center", color: "#6B9A6B" }}>{char.poco.toFixed(2)}%</td>
              <td style={{ padding: "10px", textAlign: "center", color: "#999" }}>{char.perNiente.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
