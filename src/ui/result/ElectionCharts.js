'use client';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
    PieChart, Pie, Legend
} from 'recharts';
import Image from 'next/image';

//const COLORS = ['#cdcbcb', '#b4b1b1', '#9b9797', '#827d7d', '#686464', '#4e4b4b', '#343232'];
const COLORS = [
    '#FAEBD7', '#0000ff', '#D2B48C', '#BC8F8F', '#CD853F', '#DAA520',
    '#B8860B', '#9ACD32', '#6B8E23', '#2E8B57', '#3CB371', '#40E0D0',
    '#AFEEEE', '#87CEEB', '#ADD8E6', '#B0C4DE   ', '#4682B4', '#1E90FF',
    '#483D8B', '#8A2BE2', '#9932CC', '#8B008B', '#DB7093', '#FF1493',
    '#FF7F50', '#FF4500', '#CD5C5C', '#B22222', '#800000', '#808000',
    '#696969', '#A9A9A9', '#808080', '#36454F', '#2F4F4F'
];






// --- COMPONENTE PARA LA ETIQUETA PERSONALIZADA ---
const CustomYAxisTick = ({ x, y, payload, formattedData }) => {
    // Buscamos la imagen del candidato según el nombre
    const candidate = formattedData.find(c => c.name === payload.value);

    return (
        <g transform={`translate(${x},${y})`}>
            {/* Imagen del Candidato circular */}
            <defs>
                <clipPath id={`clip-${payload.index}`}>
                    <circle cx="-100" cy="0" r="15" />
                </clipPath>
            </defs>
            <image
                x="-115"
                y="-15"
                width="30"
                height="30"
                href={candidate?.img}
                clipPath={`url(#clip-${payload.index})`}
                preserveAspectRatio="xMidYMid slice"
            />
            {/* Texto del nombre */}
            <text
                x="-80"
                y="4"
                fill="#b4b1b1"
                fontSize="11"
                textAnchor="start"
                className="font-medium"
            >
                {payload.value.length > 15 ? `${payload.value.substring(0, 15)}...` : payload.value}
            </text>
        </g>
    );
};

export const ElectionResults = ({ resultadoVotos = [] }) => {

    const formattedData = resultadoVotos.map(item => ({
        name: `${item.candidateDetails.nameCandidatos} ${item.candidateDetails.Surname}`,
        votos: item.totalVotes,
        img: item.candidateDetails.candidateImageUrl
    })).sort((a, b) => b.votos - a.votos);
    // Calculamos una altura dinámica basada en la cantidad de candidatos
    // Asumimos 50px por candidato más un padding extra
    // para el título y márgenes
    const dynamicHeight = Math.max(formattedData.length * 50 + 80, 400);
    // para el Pie inferior
    // --- CONFIGURACIÓN DINÁMICA ---
    // Calculamos 45px por cada candidato + 80px de margen para el título/base
    const dynamicHeight2 = Math.max(formattedData.length * 25 + 40, 300);

    return (
        <div className=" space-y-10 font-sans">

            {/* Gráfico de Barras */}
            <div
                className=" bg-french-blue-900 dark:bg-french-blue-950 p-2 md:p-6 rounded-2xl border border-french-blue-100 dark:border-french-blue-800 shadow-2xl"
                style={{ height: `${dynamicHeight}px` }}
            >
                <div className="mb-6">
                    <h2 className="text-french-blue-100 dark:text-french-blue-50 text-xl font-bold flex items-center gap-2">
                        <span className="w-1.5 h-6  bg-french-blue-400 rounded-full"></span>
                        Conteo de Votos
                    </h2>
                </div>

                <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                        data={formattedData}
                        layout="vertical"
                        margin={{ left: 100, right: 30, top: 0, bottom: 0 }}
                        color='red'
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#343232" horizontal={false} vertical={true} />
                        <XAxis type="number" hide />
                        <YAxis
                            dataKey="name"
                            type="category"
                            tick={<CustomYAxisTick formattedData={formattedData} />}
                            width={30} // El ancho real lo manejamos con el margin del BarChart
                            tickLine={false}
                            axisLine={false}
                        />
                        <Tooltip
                            cursor={{ fill: '#1a1919', opacity: 0.4 }}
                            contentStyle={{ backgroundColor: '#121111', color: '#ffffff', border: '1px solid #4e4b4b', borderRadius: '12px' }}
                            itemStyle={{ color: '#f3f2f2' }}
                        />
                        <Bar dataKey="votos" radius={[0, 4, 4, 0]} barSize={23}>
                            {formattedData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Gráfico de Pie */}



            <div className="hidden md:block  w-full text-french-blue-950 bg-french-blue-900 dark:bg-french-blue-950 p-8 rounded-2xl dark:border border-french-blue-800 shadow-2xl"
                style={{ height: `${dynamicHeight2}px` }}
            >
                <h2 className=" text-french-blue-100 dark:text-french-blue-50 text-xl font-bold mb-8 text-center uppercase tracking-tighter">
                    Distribución
                </h2>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart >
                    
                            <Pie
                                data={formattedData}
                                cx="50%"
                                cy="45%"
                                innerRadius={80}
                                outerRadius={110}
                                paddingAngle={5}
                                dataKey="votos"
                                stroke="none"
                            >
                                {formattedData.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                           
                                <Tooltip 
                                  
                                />
                          
                                
                                <Legend verticalAlign="top" iconType="circle" wrapperStyle={{ fontSize: '14px' }} />

                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};