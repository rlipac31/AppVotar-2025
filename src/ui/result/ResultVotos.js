import { useEffect, useState } from 'react';
//import PieChart from './PieChart'
import BarChart from './BartChart'
import styles from './result.module.css'
import useVotos from '../../hooks/useVotos'
import { set } from 'mongoose';

const ResultVotos = () => {


  const votos = useVotos();
 
   const [chartData, setChartData] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      //const URL=`https://app-votos-cnnb.onrender.com/api/votos/result-votos`;

      const URL = `http://localhost:5000/api/votos/result-votos`;
      const res = await fetch(URL);
      const resultadoVotos = await res.json();

      setChartData(resultadoVotos.votosCandidato);
      setChartLabels(resultadoVotos.nameCandidatos);

    };

    fetchData();
  }, []); 


  return (
    <div className={styles.char__container}>
      <BarChart
        data={chartData}
        labels={chartLabels} />
    </div>
  );
};

export default ResultVotos;
