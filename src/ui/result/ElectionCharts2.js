'use client';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  PieChart, Pie, Legend 
} from 'recharts';

// Colores del tema French Blue
const COLORS = ['#cdcbcb', '#b4b1b1', '#9b9797', '#827d7d', '#686464', '#4e4b4b', '#343232'];

export const ElectionResults = ({ resultadoVotos = [] }) => {
  
  // 1. Transformamos los datos de tu API para que Recharts los entienda
  const formattedData = resultadoVotos.map(item => ({
    name: `${item.candidateDetails.nameCandidatos} ${item.candidateDetails.Surname}`,
    votos: item.totalVotes,
    img: item.candidateDetails.candidateImageUrl
  }));

  // Ordenamos por votos de mayor a menor para que se vea mejor
  const sortedData = [...formattedData].sort((a, b) => b.votos - a.votos);

  return (
    <div className="space-y-8">
      {/* Gráfico de Barras */}
      <div className="w-full h-[500px] bg-french-blue-950 p-6 rounded-2xl border border-french-blue-800 shadow-2xl">
        <h2 className="text-french-blue-50 text-xl font-bold mb-6 flex items-center gap-2">
          <span className="w-2 h-6 bg-french-blue-400 rounded-full"></span>
          Conteo de Votos por Candidato
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={sortedData} layout="vertical" margin={{ left: 30, right: 30 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#343232" horizontal={true} vertical={false} />
            <XAxis type="number" hide />
            <YAxis 
              dataKey="name" 
              type="category" 
              stroke="#b4b1b1" 
              fontSize={11} 
              width={120}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip 
              cursor={{fill: '#1a1919'}}
              contentStyle={{ backgroundColor: '#121111', border: '1px solid #4e4b4b', borderRadius: '8px', color: '#fff' }}
              itemStyle={{ color: '#f3f2f2' }}
              formatter={(value) => [`${value} votos`, 'Votos']}
            />
            <Bar dataKey="votos" radius={[0, 4, 4, 0]} barSize={25}>
              {sortedData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico de Pie */}
      <div className="w-full h-[400px] bg-french-blue-950 p-6 rounded-2xl border border-french-blue-800 shadow-2xl">
        <h2 className="text-french-blue-50 text-xl font-bold mb-6 text-center">Distribución de Participación</h2>
       
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={sortedData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={4}
              dataKey="votos"
            >
              {sortedData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: ' #b4b1b1', border: '1px solid #4e4b4b', borderRadius: '8px' }} />
            <Legend verticalAlign="top" height={36}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};