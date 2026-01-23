'use client';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from 'react-chartjs-2';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);
import {   generateSolidRandomColors, generatePredefinedSolidColors  } from '../../utils/generarColor'

const BarChart = ({ data = [], labels = [] }) => {  // Valores por defecto
  console.log('Datos recibidos:', { data, labels });
  
  // Validación adicional
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No hay datos disponibles</div>;
  }
  const colors = generatePredefinedSolidColors(data.length);

  const chartData = {
    Tooltip:true,
    Legend: true,
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor:colors,
           

      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      legend: {
        position: "top",
        labels: {
          color: "#ffffff", // Color de los textos de la leyenda (rojo)
        
        }
      
      },
      title: {
        display: true,
        text: "Resultdos al Momento",
        color: "#ffffff", // Color del texto del título (verde)
        font: {
          size: 16,
        },
      }
    },
    scales: {
        x: {
          ticks: {
            color: '#ffffff' // Color del texto en eje X
          }
        },
        y: {
          ticks: {
            color: '#ffffff' // Color del texto en eje Y
          }
        }
      }
  };

  return <Bar data={chartData}  options={options} />;
};

export default BarChart;
