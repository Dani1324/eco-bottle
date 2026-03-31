"use client";

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

const COLORS = [
  "#2A3D30", // green-dark
  "#3D6B3D", // green-medium
  "#5A8A5A", // green-light
  "#E4EDE4", // green-pale
  "#EDE7D9", // cream-dark
  "#666666", // gray
  "#999999", // gray-light
  "#1A1A1A", // black
  "#F5F0E6", // cream
  "#FFFAE0", // white
];

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
    { name: "Preferisco non dire", value: 4.8 },
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
    { name: "Lavoratore dipendente", value: 42.9 },
    { name: "Studente", value: 36.5 },
    { name: "Autonomo/Freelancer", value: 19.0 },
    { name: "Atleta", value: 1.6 },
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
    { name: "Sud Italia e Isole", value: 12.7 },
    { name: "Nord Italia", value: 12.7 },
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

export function WaterConsumptionChart() {
  const data = [
    { name: "<0,5L", value: 6.3 },
    { name: "0,5-1L", value: 6.3 },
    { name: "1-1,5L", value: 39.7 },
    { name: "1,5-2L", value: 42.9 },
    { name: ">2L", value: 4.8 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
          <Bar dataKey="value" fill="#3D6B3D" name="%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function BottleUsageChart() {
  const data = [
    { name: "Sì, quotidianamente", value: 44.4 },
    { name: "Sì, occasionalmente", value: 27.0 },
    { name: "No, ma vorrei", value: 25.4 },
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

export function MaterialPreferenceChart() {
  const data = [
    { name: "Acciaio inossidabile", value: 38.1 },
    { name: "Bio-based", value: 23.8 },
    { name: "Plastica riciclata", value: 17.5 },
    { name: "Nessuna preferenza", value: 15.9 },
    { name: "Vetro", value: 4.8 },
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
    { name: "Grande (750ml-1L)", value: 41.3 },
    { name: "Media (500-750ml)", value: 33.3 },
    { name: "Extra large (>1L)", value: 15.9 },
    { name: "Piccola (350-500ml)", value: 9.5 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-15} textAnchor="end" height={80} />
          <YAxis />
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
          <Bar dataKey="value" fill="#3D6B3D" name="%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function AppInterestChart() {
  const data = [
    { name: "Molto interessato", value: 38.1 },
    { name: "Abbastanza interessato", value: 38.1 },
    { name: "Poco interessato", value: 15.9 },
    { name: "Per niente interessato", value: 7.9 },
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

export function WTPChart() {
  const data = [
    { name: "<20€", value: 12.7 },
    { name: "20-35€", value: 25.4 },
    { name: "35-50€", value: 27.0 },
    { name: "50-70€", value: 20.6 },
    { name: "70-100€", value: 11.1 },
    { name: ">100€", value: 3.2 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
          <Bar dataKey="value" fill="#3D6B3D" name="%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PurchaseDriverChart() {
  const data = [
    { name: "Qualità materiali", value: 23.8 },
    { name: "Prezzo", value: 20.6 },
    { name: "Design ed estetica", value: 17.5 },
    { name: "Sostenibilità ambientale", value: 15.9 },
    { name: "Funzionalità smart", value: 11.1 },
    { name: "Recensioni/passaparola", value: 6.3 },
    { name: "Marca nota", value: 4.8 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 200 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={200} />
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
          <Bar dataKey="value" fill="#3D6B3D" name="%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function BrandAwarenessChart() {
  const data = [
    { name: "Air Up", value: 31.7 },
    { name: "Chilly's", value: 28.6 },
    { name: "Stanley", value: 23.8 },
    { name: "CamelBak", value: 9.5 },
    { name: "24Bottles", value: 7.9 },
    { name: "Hydro Flask", value: 6.3 },
    { name: "Nessuno", value: 15.9 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 150 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={150} />
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
          <Bar dataKey="value" fill="#3D6B3D" name="%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PurchaseChannelChart() {
  const data = [
    { name: "Amazon/Marketplace", value: 33.3 },
    { name: "Grande Distribuzione", value: 25.5 },
    { name: "Sito ufficiale Brand", value: 21.6 },
    { name: "Articoli Sportivi", value: 19.6 },
    { name: "Design/Lifestyle Store", value: 17.6 },
    { name: "Negozi Elettronica", value: 13.7 },
    { name: "Negozi Bio/Eco", value: 9.8 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 180 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={180} />
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
          <Bar dataKey="value" fill="#3D6B3D" name="%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CommunicationChannelChart() {
  const data = [
    { name: "YouTube", value: 35.3 },
    { name: "Instagram", value: 33.3 },
    { name: "Blog specializzati", value: 31.4 },
    { name: "Influencer/Creator", value: 27.5 },
    { name: "Pubblicità tradizionale", value: 25.5 },
    { name: "Facebook", value: 21.6 },
    { name: "Passaparola", value: 19.6 },
    { name: "TikTok", value: 17.6 },
    { name: "Newsletter Email", value: 15.7 },
  ];

  return (
    <div style={{ marginBottom: "32px", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 150 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={150} />
          <Tooltip formatter={(value: any) => `${(value as number).toFixed(1)}%`} />
          <Bar dataKey="value" fill="#3D6B3D" name="%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function InfluencerFollowingChart() {
  const data = [
    { name: "Sì, occasionalmente", value: 41.2 },
    { name: "Sì, regolarmente", value: 39.2 },
    { name: "No", value: 19.6 },
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
