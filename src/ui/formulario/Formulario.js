import { useRouter } from 'next/router';
import Alert from '../alert/Alert';
import departamentos from '../../pages/api/data';


import { useState } from 'react';

import styles from './formulario.module.css'
import Boton from '../boton/Boton';




const Formulario = () => {
    const { query } = useRouter();
    const { id } = query;

    const [seVoto, setSeVoto] = useState(false);// se gurado el voto correctamente
    const [errorVoto, setErrorVoto] = useState(false);

    const [localidad, setLocalidad] = useState('');
    const [identity, setIdentity] = useState('');

    const resetFormulario = () => {
        setIdentity('');
        setLocalidad('');
        setSeVoto(false);
        setErrorVoto(false);
    }

    const handleSubmit = async (e) => {
        setIdentity('');
        setLocalidad('');
        setTimeout(() => {
            resetFormulario()
        }, 1500);
        e.preventDefault();
        const data = {
            identity: identity,
            localidad: localidad
        }
        try {
            const URL=`https://app-votos-cnnb.onrender.com/api/votos/${id}`; //PRODUUC
            //const URL=`http://localhost:5000/api/votos/${id}`; //Pdesarrollo
            const res = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const { votacion } = await res.json();
            if (!votacion) {
                console.log(' erorr desde next: ');
                setSeVoto(false);
                setErrorVoto(true);
                return seVoto, setErrorVoto;

            } else {
                console.log('se voto correctamente:', votacion);
                setErrorVoto(false);
                setSeVoto(true);
                return seVoto, setErrorVoto;

            }

        } catch (error) {
            console.error('Error:', error);

        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form__container}>

            {seVoto === true
                ? (
                    <Alert
                        message={'Tu voto se realizó con éxito'}
                        bgColor={'rgb(216, 250, 165)'}
                        textColor={'rgb(25, 58, 25)'}
                        size={'small'}
                    />
                ) : errorVoto
                    ? (
                        <Alert
                            message={'hubo un Error y no se guardo en la BD'}
                            bgColor={'rgb(248, 167, 167)'}
                            textColor={'rgb(105, 28, 28)'}
                            size={'medium'}
                        />
                    ) :
                    <h3>Realiza tu Voto</h3>
            }


            <div className={styles.form__container__identity}>
                <label htmlFor="email">Ingresa tu DNI:</label>
                <input
                    className={styles.identity__input}
                    type="text"
                    id="identity"
                    value={identity}
                    max-length={8}
                    onChange={(e) => setIdentity(e.target.value)}
                />
            </div>
            <div className={styles.form__container__localidad}>
                <label htmlFor="opciones">Localidad:</label>
                <select
                    className={styles.localidad__select}
                    id="departamentos"
                    value={localidad}
                    onChange={(e) => setLocalidad(e.target.value)}
                >
                    <option value="">Seleccione una opción</option>
                    {departamentos.map((departamento) => (
                        <option key={departamento.id} value={departamento.name}>
                            {departamento.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* <Boton>
                 <button type="submit">Guardar</button>
             </Boton> */}
            <Boton
                type={'submit'}
                texto={'votar'}
                textColor={'#ffffff'}
                bgColor={'var(--primary-color)'}
                size={'medium'}
            />

        </form>
    );
};

export default Formulario;
