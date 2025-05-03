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

const BarChart = ({ data, labels }) => {
  const colors = generatePredefinedSolidColors(data.length);

  const chartData = {
    Tooltip:true,
    Legend: true,
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor:colors,
           
     /*    backgroundColor: [  
          "rgb(255, 66, 9)",
          "rgba(14, 132, 211, 0.92)",
          "rgba(56, 219, 41, 0.5)",
          "rgba(217, 238, 29, 0.86)",
          "rgba(132, 75, 247, 0.76)",
          "rgba(139, 111, 32, 0.5)",
        ], */
       // hoverBackgroundColor: ['#EF5350', '#9C27B0', '#3F51B5','4CAF50','#FFEB3B',, '#FF7043'],
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
