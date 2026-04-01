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
    { name: "Pensionato", value: 0 },
    { name: "Altro", value: 0 },
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
    { name: "Meno di 0,5 litri", value: 0.0 },
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
