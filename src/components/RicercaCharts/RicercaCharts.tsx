"use client";

import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  ReferenceLine,
  LabelList,
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
    { name: "Acciaio inossidabile", value: 42.9 },
    { name: "Materiali biodegradabili", value: 31.7 },
    { name: "Plastica riciclata", value: 19.0 },
    { name: "Vetro", value: 4.8 },
    { name: "Nessuna preferenza", value: 1.6 },
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
    { name: "Piccola (350–500 ml)", value: 9.5 },
    { name: "Media (500–750 ml)", value: 57.1 },
    { name: "Grande (750 ml – 1 litro)", value: 28.6 },
    { name: "Extra large (oltre 1 litro)", value: 4.8 },
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
    { name: "Colori naturali (verde, marrone, beige)", value: 44.4 },
    { name: "Colori neutri (nero, bianco, grigio)", value: 42.9 },
    { name: "Colori vivaci (rosso, arancione, giallo)", value: 33.3 },
    { name: "Colori pastello", value: 30.2 },
    { name: "Effetto legno / pietra naturale", value: 28.6 },
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
    { name: "Molto interessato/a", value: 27.0 },
    { name: "Abbastanza interessato/a", value: 52.4 },
    { name: "Poco interessato/a", value: 14.3 },
    { name: "Per niente interessato/a", value: 6.3 },
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
    { name: "Promemoria per bere acqua", value: 31.7 },
    { name: "Tracciamento giornaliero dell'idratazione", value: 33.3 },
    { name: "Statistiche settimanali/mensili", value: 47.6 },
    { name: "Obiettivi personalizzati", value: 28.6 },
    { name: "Integrazione con app fitness", value: 42.9 },
    { name: "Gamification (sfide, badge, classifiche)", value: 30.2 },
    { name: "Consigli personalizzati sull'idratazione", value: 34.9 },
    { name: "Monitoraggio della qualità dell'acqua", value: 31.7 },
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
    { name: "Meno di 20 €", value: 11.1 },
    { name: "20–35 €", value: 28.6 },
    { name: "35–50 €", value: 39.7 },
    { name: "50–70 €", value: 12.7 },
    { name: "70–100 €", value: 6.3 },
    { name: "Più di 100 € – More than 100 €", value: 1.6 },
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
    { name: "Prezzo", value: 22.2 },
    { name: "Qualità dei materiali", value: 30.2 },
    { name: "Funzionalità smart (app/tracking)", value: 11.1 },
    { name: "Design ed estetica", value: 14.3 },
    { name: "Sostenibilità ambientale", value: 14.3 },
    { name: "Recensioni e passaparola", value: 6.3 },
    { name: "Marca / brand noto", value: 1.6 },
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
    { name: "E-commerce del produttore (sito ufficiale)", value: 19.0 },
    { name: "Amazon / marketplace online", value: 22.2 },
    { name: "Negozi di articoli sportivi", value: 19.0 },
    { name: "Negozi di elettronica", value: 22.2 },
    { name: "Negozi bio / ecologici", value: 19.0 },
    { name: "Grande distribuzione (supermercati)", value: 25.4 },
    { name: "Negozi di design / lifestyle", value: 19.0 },
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
    { name: "Instagram", value: 22.2 },
    { name: "TikTok", value: 23.8 },
    { name: "YouTube", value: 25.4 },
    { name: "Facebook", value: 22.2 },
    { name: "Blog e siti di settore", value: 27.0 },
    { name: "Newsletter via email", value: 17.5 },
    { name: "Influencer / creator", value: 23.8 },
    { name: "Pubblicità tradizionale (TV, radio, stampa)", value: 30.2 },
    { name: "Passaparola - Word of mouth", value: 22.2 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={340}>
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
    { name: "Sì, regolarmente", value: 38.1 },
    { name: "Sì, occasionalmente", value: 47.6 },
    { name: "No", value: 14.3 },
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
    { name: "24Bottles", value: 20.6 },
    { name: "Chilly's", value: 28.6 },
    { name: "Hydro Flask", value: 12.7 },
    { name: "CamelBak", value: 19.0 },
    { name: "Stanley", value: 30.2 },
    { name: "Air Up", value: 38.1 },
    { name: "Nessuno di questi", value: 17.5 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={320}>
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
    { name: "Under 18", value: 3.2 },
    { name: "18–24", value: 36.5 },
    { name: "25–34", value: 33.3 },
    { name: "35–44", value: 9.5 },
    { name: "45–54", value: 15.9 },
    { name: "Over 54", value: 1.6 },
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
    { name: "Femmina", value: 52.4 },
    { name: "Maschio", value: 41.3 },
    { name: "Preferisco non specificare", value: 4.8 },
    { name: "Altro", value: 1.6 },
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
    { name: "Studente", value: 36.5 },
    { name: "Lavoratore dipendente", value: 42.9 },
    { name: "Autonomo/Libero professionista", value: 19.0 },
    { name: "Sportivo/Atleta", value: 1.6 },
    /* { name: "Pensionato", value: 0.0 }, */
    /* { name: "Altro", value: 0.0 }, */
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
    { name: "Centro Italia", value: 68.3 },
    { name: "Nord Italia", value: 12.7 },
    { name: "Sud Italia e Isole", value: 12.7 },
    { name: "Estero", value: 6.3 },
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
    /* { name: "Meno di 0,5 litri", value: 0.0 }, */
    { name: "Tra 0,5 e 1 litro", value: 6.3 },
    { name: "Tra 1 e 1,5 litri", value: 39.7 },
    { name: "Tra 1,5 e 2 litri", value: 42.9 },
    { name: "Più di 2 litri", value: 11.1 },
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
    { name: "Sì, quotidianamente", value: 44.4 },
    { name: "Sì, occasionalmente", value: 27.0 },
    { name: "No, ma vorrei iniziare", value: 25.4 },
    { name: "No, non mi interessa", value: 3.2 },
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
    { name: "Al lavoro / università – At work / university", value: 54.0 },
    { name: "Durante l'attività sportiva – During sports activities", value: 66.7 },
    { name: "In viaggio – While travelling", value: 49.2 },
    { name: "A casa – At home", value: 50.8 },
    { name: "All'aperto / escursioni – Outdoors / hiking", value: 54.0 },
    { name: "Altro – Other", value: 1.6 },
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
    { name: "Materiali Ecologici", molto: 52.38, abbastanza: 25.39, indifferente: 11.11, poco: 11.11, perNiente: 0.0 },
    { name: "Monitoraggio App/Promemoria", molto: 14.28, abbastanza: 30.15, indifferente: 28.57, poco: 20.63, perNiente: 6.35 },
    { name: "Mantenimento Temperatura", molto: 49.21, abbastanza: 27.00, indifferente: 22.22, poco: 1.59, perNiente: 0.0 },
    { name: "Design e Personalizzazione", molto: 23.8, abbastanza: 41.27, indifferente: 20.63, poco: 1.59, perNiente: 4.76 },
    { name: "Leggerezza e Portabilità", molto: 46.03, abbastanza: 33.33, indifferente: 15.87, poco: 3.17, perNiente: 1.59 },
    { name: "Facilità di Pulizia", molto: 36.51, abbastanza: 50.80, indifferente: 12.70, poco: 0.0, perNiente: 0.0 },
    { name: "Prezzo/Rapporto Qualità-Prezzo", molto: 28.58, abbastanza: 44.44, indifferente: 23.81, poco: 3.17, perNiente: 0.0 },
    { name: "Marca Affidabile/Storica", molto: 7.94, abbastanza: 14.29, indifferente: 31.74, poco: 33.33, perNiente: 12.70 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", borderRadius: "8px", overflowX: "auto" }}>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "13px",
        color: "#2A3D30",
        margin: 0,
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

export function OpenFeedbackTable() {
  const feedbackList = [
    "Vorrei poterci mettere una foto al posto del colore",
    "Il peso è molto importante, deve essere leggera",
    "Would love a built-in straw",
    "A lightweight design would make a big difference for me",
    "Spero sia lavabile in lavastoviglie",
    "Personalizzarla",
    "Deve entrare nello spazio bibite delle auto",
    "I really hope the app syncs with Apple Health natively",
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", borderRadius: "8px", overflowX: "auto" }}>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "13px",
        color: "#2A3D30",
        margin: 0,
      }}>
        <thead>
          <tr style={{ backgroundColor: "#2A3D30", color: "white" }}>
            <th style={{ padding: "10px", textAlign: "center", fontWeight: "bold", width: "50px" }}>N.</th>
            <th style={{ padding: "10px", textAlign: "left", fontWeight: "bold" }}>Feedback ricevuto</th>
          </tr>
        </thead>
        <tbody>
          {feedbackList.map((feedback, idx) => (
            <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? "#f9f9f9" : "#ffffff", borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px", textAlign: "center", fontWeight: "500" }}>{idx + 1}</td>
              <td style={{ padding: "10px" }}>{feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SegmentDescriptiveCriteriaTable() {
  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", borderRadius: "8px", overflowX: "auto" }}>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "13px",
        color: "#2A3D30",
        margin: 0,
      }}>
        <thead>
          <tr>
            <th>Variabile</th>
            <th>Livelli considerati</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Età</td>
            <td>Under 18 / 18-24 / 25-34 / 35-44 / 45-54 / Over 54</td>
          </tr>
          <tr>
            <td>Area geografica</td>
            <td>Nord Italia / Centro Italia / Sud e Isole / Estero</td>
          </tr>
          <tr>
            <td>Genere</td>
            <td>Femmina / Maschio / Preferisco non specificare / Altro</td>
          </tr>
          <tr>
            <td>Occupazione</td>
            <td>Studente / Dipendente / Autonomo / Sportivo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function SegmentBehavioralCriteriaTable() {
  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", borderRadius: "8px", overflowX: "auto" }}>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "13px",
        color: "#2A3D30",
        margin: 0,
      }}>
        <thead>
          <tr>
            <th>Variabile</th>
            <th>Livelli considerati</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intensità d&apos;uso bottiglia riutilizzabile</td>
            <td>Non utente / Occasionale / Quotidiano</td>
          </tr>
          <tr>
            <td>Interesse per smart features</td>
            <td>Molto / Abbastanza / Poco / Per niente interessato</td>
          </tr>
          <tr>
            <td>Canali d&apos;acquisto preferiti</td>
            <td>Marketplace / Sito brand / GDO / Retail specializzato</td>
          </tr>
          <tr>
            <td>Canali informativi preferiti</td>
            <td>Social / Blog / Influencer / Media tradizionali / Newsletter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function SegmentBenefitsCriteriaTable() {
  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", borderRadius: "8px", overflowX: "auto" }}>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "13px",
        color: "#2A3D30",
        margin: 0,
      }}>
        <thead>
          <tr>
            <th>Beneficio primario</th>
            <th>Descrizione</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Performance funzionale</td>
            <td>Isolamento termico, resistenza, portabilità</td>
          </tr>
          <tr>
            <td>Monitoraggio salute</td>
            <td>Tracking idratazione, sync con app fitness</td>
          </tr>
          <tr>
            <td>Espressione valoriale eco</td>
            <td>Materiali sostenibili, carbon footprint ridotto</td>
          </tr>
          <tr>
            <td>Status e design</td>
            <td>Estetica premium, riconoscibilità sociale</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function SegmentAttractivenessTable() {
  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", borderRadius: "8px", overflowX: "auto" }}>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "13px",
        color: "#2A3D30",
        margin: 0,
      }}>
        <thead>
          <tr>
            <th>Segmento</th>
            <th>Attrattività</th>
            <th>Praticabilità</th>
            <th>Valutazione</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. Eco-Millennials Urbani</td>
            <td>
              <span className={styles.stars}>★★★★★</span> 39% campione, penetrazione
              borraccia 71,4%, interesse app 79,4%
            </td>
            <td>
              <span className={styles.stars}>★★★★★</span> Allineamento perfetto
              (eco+smart+design), distribuzione omnichannel già coerente
            </td>
            <td>
              <strong>TARGET PRIMARIO CONFERMATO</strong>
            </td>
          </tr>
          <tr>
            <td>2. Fitness Enthusiasts</td>
            <td>
              <span className={styles.stars}>★★★★☆</span> 26% campione, uso sportivo
              66,7%, forte interesse su integrazione fitness (42,9%)
            </td>
            <td>
              <span className={styles.stars}>★★★☆☆</span> Concorrenza presente
              (HidrateSpark). Necessaria execution tech credibile.
            </td>
            <td><strong>TARGET SECONDARIO ANNO 1</strong></td>
          </tr>
          <tr>
            <td>3. Design Seekers</td>
            <td>
              <span className={styles.stars}>★★★☆☆</span> 17% campione, forte
              sensibilità a qualità materiali (30,2%) e stile distintivo
            </td>
            <td>
              <span className={styles.stars}>★★★★☆</span> Differenziazione
              design possibile. Investimento design richiesto.
            </td>
            <td><strong>TARGET ESPANSIONE (ANNO 2)</strong></td>
          </tr>
          <tr>
            <td>4. Studenti Green</td>
            <td>
              <span className={styles.stars}>★★★☆☆</span> 18% campione, alta
              numerosità studenti e sensibilità prezzo (fasce &lt;35€ = 39,7%)
            </td>
            <td>
              <span className={styles.stars}>★★☆☆☆</span> Online-feasible. Margini
              ridotti e CAC più delicato. Richiede offerte/partnership mirate.
            </td>
            <td><strong>OPPORTUNISTICO + GROWTH</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function CompetitiveComparisonTable() {
  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", borderRadius: "8px", overflowX: "auto" }}>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "13px",
        color: "#2A3D30",
        margin: 0,
      }}>
        <thead>
          <tr>
            <th>Attributo</th>
            <th>24Bottles</th>
            <th>Chilly&apos;s</th>
            <th>Hydro Flask</th>
            <th>S&apos;well</th>
            <th>LARQ</th>
            <th>HidrateSpark</th>
            <th>ECOBOTTLE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Design premium</td>
            <td><span className={styles.stars}>★★★★★</span></td>
            <td><span className={styles.stars}>★★★★☆</span></td>
            <td><span className={styles.stars}>★★★☆☆</span></td>
            <td><span className={styles.stars}>★★★★☆</span></td>
            <td><span className={styles.stars}>★★★★★</span></td>
            <td><span className={styles.stars}>★★★☆☆</span></td>
            <td><span className={styles.stars}>★★★★★</span></td>
          </tr>
          <tr>
            <td>Sostenibilità</td>
            <td><span className={styles.stars}>★★★★★</span></td>
            <td><span className={styles.stars}>★★★☆☆</span></td>
            <td><span className={styles.stars}>★★☆☆☆</span></td>
            <td><span className={styles.stars}>★★☆☆☆</span></td>
            <td><span className={styles.stars}>★★★☆☆</span></td>
            <td><span className={styles.stars}>★★☆☆☆</span></td>
            <td><span className={styles.stars}>★★★★★</span></td>
          </tr>
          <tr>
            <td>Tracking</td>
            <td>✗</td>
            <td>✗</td>
            <td>✗</td>
            <td>✗</td>
            <td><span className={styles.stars}>★★★☆☆</span></td>
            <td><span className={styles.stars}>★★★★★</span></td>
            <td><span className={styles.stars}>★★★★☆</span></td>
          </tr>
          <tr>
            <td>Isolamento termico</td>
            <td><span className={styles.stars}>★★★★☆</span></td>
            <td><span className={styles.stars}>★★★★☆</span></td>
            <td><span className={styles.stars}>★★★★★</span></td>
            <td><span className={styles.stars}>★★★★☆</span></td>
            <td><span className={styles.stars}>★★★★☆</span></td>
            <td><span className={styles.stars}>★★★☆☆</span></td>
            <td><span className={styles.stars}>★★★★☆</span></td>
          </tr>
          <tr>
            <td>App ecosystem</td>
            <td>✗</td>
            <td>✗</td>
            <td>✗</td>
            <td>✗</td>
            <td><span className={styles.stars}>★★★☆☆</span></td>
            <td><span className={styles.stars}>★★★★★</span></td>
            <td><span className={styles.stars}>★★★★☆</span></td>
          </tr>
          <tr>
            <td>Prezzo medio</td>
            <td>€35</td>
            <td>€35</td>
            <td>€45</td>
            <td>€40</td>
            <td>€115</td>
            <td>€75</td>
            <td><strong>€59</strong></td>
          </tr>
          <tr>
            <td>Distribuzione IT</td>
            <td><span className={styles.stars}>★★★★★</span></td>
            <td><span className={styles.stars}>★★★★☆</span></td>
            <td><span className={styles.stars}>★★★☆☆</span></td>
            <td><span className={styles.stars}>★★☆☆☆</span></td>
            <td><span className={styles.stars}>★★☆☆☆</span></td>
            <td><span className={styles.stars}>★☆☆☆☆</span></td>
            <td><span className={styles.stars}>★★★☆☆</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function PerceptualMapChart() {
  const competitors = [
    { name: "24Bottles", x: 2, y: 9, color: "#2A6A4C", dx: -20, dy: -10 },
    { name: "Chilly's", x: 2, y: 7, color: "#57B687", dx: -20, dy: -10 },
    { name: "Hydro Flask", x: 3, y: 6, color: "#66BE8B", dx: -30, dy: -12 },
    { name: "S'well", x: 1, y: 5, color: "#9CD9BC", dx: -16, dy: -10 },
    { name: "LARQ", x: 9, y: 6, color: "#3E8D66", dx: -16, dy: -10 },
    { name: "HidrateSpark", x: 8, y: 3, color: "#B4E7CD", dx: -38, dy: -10 },
  ];

  const ecobottle = [{ name: "ECOBOTTLE", x: 8, y: 9 }];

  const renderDot = (props: any) => {
    const { cx, cy, payload } = props;
    return <circle cx={cx} cy={cy} r={7} fill={payload.color || "#3D6B3D"} />;
  };

  const renderStar = (props: any) => {
    const { cx, cy } = props;
    const points = "0,-11 3,-3.5 10,-3.5 4.2,1.5 6.4,8.8 0,4.5 -6.4,8.8 -4.2,1.5 -10,-3.5 -3,-3.5";
    return <polygon points={points} transform={`translate(${cx}, ${cy})`} fill="#1F3A28" stroke="#1F3A28" />;
  };

  const renderLabel = (props: any) => {
    const { x, y, value, payload } = props;
    return (
      <text
        x={(x as number) + (payload?.dx ?? -16)}
        y={(y as number) + (payload?.dy ?? -10)}
        fill={payload?.color || "#3D6B3D"}
        fontSize={13}
        fontWeight={600}
      >
        {value}
      </text>
    );
  };

  const renderEcoLabel = (props: any) => {
    const { x, y, value } = props;
    return (
      <text x={(x as number) - 18} y={(y as number) - 14} fill="#2A3D30" fontSize={14} fontWeight={700}>
        {value}
      </text>
    );
  };

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <div style={{ position: "relative", width: "100%", height: "560px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 30, right: 40, bottom: 55, left: 20 }}>
            <CartesianGrid stroke="#d6d6d6" />
            <XAxis
              type="number"
              dataKey="x"
              domain={[0, 10.5]}
              ticks={[0, 2, 4, 6, 8, 10]}
              label={{ value: "Tecnologia", position: "insideBottom", offset: -18, fill: "#6b6b6b", fontSize: 18 }}
              tick={{ fill: "#7b7b7b", fontSize: 16 }}
            />
            <YAxis
              type="number"
              dataKey="y"
              domain={[0, 10.5]}
              ticks={[0, 2, 4, 6, 8, 10]}
              label={{ value: "Sostenibilita", angle: -90, position: "insideLeft", offset: -8, fill: "#6b6b6b", fontSize: 18 }}
              tick={{ fill: "#7b7b7b", fontSize: 16 }}
            />
            <ReferenceLine x={5} stroke="#bcbcbc" strokeDasharray="3 3" />
            <ReferenceLine y={5} stroke="#bcbcbc" strokeDasharray="3 3" />

            <Scatter data={competitors} shape={renderDot}>
              <LabelList dataKey="name" content={renderLabel} />
            </Scatter>
            <Scatter data={ecobottle} shape={renderStar}>
              <LabelList dataKey="name" content={renderEcoLabel} />
            </Scatter>

            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              formatter={(_value: any, _name: any, item: any) => [
                `T ${item?.payload?.x} | S ${item?.payload?.y}`,
                item?.payload?.name,
              ]}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function PositioningDataReferenceTable() {
  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", borderRadius: "8px", overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", color: "#2A3D30", margin: 0 }}>
        <thead>
          <tr>
            <th>Evidenza dal sondaggio</th>
            <th>Dato</th>
            <th>Implicazione per il posizionamento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Driver di acquisto principale</td>
            <td>Qualita materiali 30,2%</td>
            <td>Promessa prodotto centrata su affidabilita e qualita percepita</td>
          </tr>
          <tr>
            <td>Driver economico</td>
            <td>Prezzo 22,2%</td>
            <td>Posizionamento premium accessibile, non luxury estremo</td>
          </tr>
          <tr>
            <td>Interesse smart</td>
            <td>79,4% (molto + abbastanza)</td>
            <td>Tecnologia come leva reale, non solo narrativa</td>
          </tr>
          <tr>
            <td>Fasce prezzo preferite</td>
            <td>20-35 + 35-50 = 68,3%</td>
            <td>Sweet spot percepito in area medio-premium</td>
          </tr>
          <tr>
            <td>Disponibilita premium (&gt;50 euro)</td>
            <td>20,6%</td>
            <td>Esiste una nicchia premium, ma non e il mercato principale</td>
          </tr>
          <tr>
            <td>Brand awareness (top 3)</td>
            <td>Air Up 38,1%, Stanley 30,2%, Chilly&apos;s 28,6%</td>
            <td>Concorrenza percepita guidata da marchi forti e gia noti</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function PositioningBenefitsTable() {
  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", borderRadius: "8px", overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", color: "#2A3D30", margin: 0 }}>
        <thead>
          <tr>
            <th>Tipo di beneficio</th>
            <th>Contenuto ECOBOTTLE</th>
            <th>Base empirica</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Funzionali</td>
            <td>Materiali robusti, isolamento termico, esperienza d&apos;uso pratica</td>
            <td>Qualita materiali 30,2%; importanza mantenimento temperatura 52,4%</td>
          </tr>
          <tr>
            <td>Esperienziali</td>
            <td>Uso quotidiano semplice e integrazione con routine personali</td>
            <td>71,4% del campione usa già borracce quotidianamente; 66,7% le utilizza durante attività sportive</td>
          </tr>
          <tr>
            <td>Sociali</td>
            <td>Coerenza con stile di vita eco-smart e riconoscibilità</td>
            <td>Interesse verso design/sostenibilita nei driver (14,3% + 14,3%)</td>
          </tr>
          <tr>
            <td>Psicologici</td>
            <td>Senso di controllo dell&apos;idratazione e responsabilità ambientale</td>
            <td>Interesse smart 79,4% + attenzione ai materiali ecologici</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function PositioningSacrificesTable() {
  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", borderRadius: "8px", overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", color: "#2A3D30", margin: 0 }}>
        <thead>
          <tr>
            <th>Tipo di sacrificio</th>
            <th>Rischio percepito</th>
            <th>Risposta di posizionamento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Economico</td>
            <td>Prezzo troppo alto rispetto alle alternative base</td>
            <td>Prezzo target in fascia 35-50 euro, coerente con WTP prevalente</td>
          </tr>
          <tr>
            <td>Transazionale</td>
            <td>Difficolta di scelta e confronto tra modelli</td>
            <td>Messaggio semplice su 3 pilastri: qualita, smart, sostenibilita</td>
          </tr>
          <tr>
            <td>Psicologico</td>
            <td>Timore di promessa non mantenuta</td>
            <td>Comunicazione con claim verificabili e tono non iperbolico</td>
          </tr>
          <tr>
            <td>Di apprendimento</td>
            <td>Percezione di complessita delle funzioni smart</td>
            <td>Onboarding app essenziale e focus su utilità immediata</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function PositioningProgrammedVsPerceivedTable() {
  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", borderRadius: "8px", overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", color: "#2A3D30", margin: 0 }}>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Definizione operativa</th>
            <th>Stato attuale ECOBOTTLE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Posizionamento programmato</td>
            <td>Eco-smart premium accessibile, centrato su utilità reale</td>
            <td>Definito con chiarezza nel piano marketing</td>
          </tr>
          <tr>
            <td>Posizionamento percepito</td>
            <td>Immagine effettivamente costruita nella mente dei clienti</td>
            <td>Da validare post-lancio con tracking brand e customer feedback</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function PositioningKanoTable() {
  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", borderRadius: "8px", overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", color: "#2A3D30", margin: 0 }}>
        <thead>
          <tr>
            <th>Tipo attributo (Kano)</th>
            <th>Applicazione ECOBOTTLE</th>
            <th>Implicazione strategica</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basic</td>
            <td>Tenuta stagna, resistenza materiali, sicurezza alimentare</td>
            <td>Prerequisiti: se assenti generano forte insoddisfazione</td>
          </tr>
          <tr>
            <td>One-dimensional</td>
            <td>Isolamento termico, usabilita, qualita percepita</td>
            <td>La soddisfazione cresce in modo proporzionale alla performance</td>
          </tr>
          <tr>
            <td>Exciting</td>
            <td>Esperienza smart semplice, valore eco-smart integrato, design distintivo</td>
            <td>Leva di differenziazione per aumentare desiderabilita e preferenza</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
