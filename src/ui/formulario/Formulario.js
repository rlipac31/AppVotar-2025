'use client'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Alert from '../alert/Alert';
import departamentos from '../../pages/api/data';
import { ShieldCheck, Fingerprint, MapPin, SendHorizontal } from 'lucide-react';

const Formulario = () => {
    const router = useRouter(); // <-- Aquí funciona
    const { query } = useRouter();
    const { id } = query;

    const [seVoto, setSeVoto] = useState(false);
    const [errorVoto, setErrorVoto] = useState(false);
    const [errors, setErrors] = useState(null);
    const [localidad, setLocalidad] = useState('');
    const [identity, setIdentity] = useState('');

    const resetFormulario = () => {
        setIdentity('');
        setLocalidad('');
        setSeVoto(false);
        setErrorVoto(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { identity, localidad };

        try {
            const URL = `${process.env.NEXT_PUBLIC_API_URL}/votos/${id}`;
            const res = await fetch(URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const responseBody = await res.json();

            if (!res.ok) {
                setSeVoto(false);
                setErrorVoto(true);
                setErrors(responseBody.errors?.msg || responseBody.msg || 'Error inesperado');
                return;
            }

            if (!responseBody.votacion) {
                setSeVoto(false);
                setErrorVoto(true);
                setErrors('No se registró el voto');
                return;
            }

            setErrorVoto(false);
            setSeVoto(true);
            setErrors(null);
            setTimeout(resetFormulario, 2000);
             setTimeout(() => {
                router.push('/'); // <-- 'router' está disponible aquí
            }, 2100);
        } catch (error) {
            setErrorVoto(true);
            setErrors('Fallo en la conexión al servidor');
        }
    };

    return (
        <div className="w-full  mx-auto overflow-hidden rounded-2xl bg-white shadow-xl border-2 border-gray-100 dark:border-french-blue-900
         dark:bg-french-blue-950 dark:border-french-blue-800">
            {/* Banner de Justificación de Seguridad */}
            <div className="bg-french-blue-700 p-4 text-white flex items-start gap-3">
                <ShieldCheck className="w-12 h-12 flex-shrink-0 text-french-blue-100" />
                <div className=" leading-tight">
                    <p className="font-bold mb-1">Tu voto es único y seguro</p>
                    <p className="opacity-90">Solicitamos tu DNI para validar tu identidad y evitar votos duplicados.
                         Tus datos se encriptan al instante para asegurando la trasparencia, tus datos no son registrado
                          ni comercializados.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Cabecera / Alertas */}
                <div className="text-center">
                    {seVoto ? (
                        <Alert message={'Tu voto se realizó con éxito'} bgColor={'#e6f0ff'} textColor={'green'} size={'medium'} />
                    ) : errorVoto ? (
                        <Alert message={errors || "DNI no válido o ya votó"} bgColor={'#fee2e2'} textColor={'#991b1b'} size={'medium'} />
                    ) : (
                        <h3 className="text-xl font-black text-french-blue-900 dark:text-french-blue-50">Realiza tu Voto</h3>
                    )}
                </div>

                {/* Input DNI */}
                <div className="space-y-1">
                    <label htmlFor="identity" className="text-xs font-bold text-gray-500 dark:text-french-blue-300 flex items-center gap-1">
                        <Fingerprint className="w-4 h-4  text-french-blue-200"  /> NÚMERO DE DNI
                    </label>
                    <div className="relative group">
                        <input
                            required
                            id="identity"
                            type="text"
                            maxLength={8}
                            placeholder="8 dígitos"
                            value={identity}
                            onChange={(e) => setIdentity(e.target.value.replace(/\D/g, ''))}
                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl outline-hidden transition-all
                             focus:border-french-blue-500 focus:bg-french-blue-00 dark:bg-french-blue-900/50 dark:border-french-blue-800  dark:text-white"
                        />
                        <div className={`absolute right-3 top-3.5 w-2 h-2 rounded-full ${identity.length === 8 ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-gray-300'}`} />
                    </div>
                </div>

                {/* Select Localidad */}
                <div className="space-y-1">
                    <label htmlFor="departamentos" className="text-xs font-bold text-gray-500 dark:text-french-blue-300 flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-french-blue-200" /> REGIÓN DE VOTO
                    </label>
                    <select
                        required
                        id="departamentos"
                        value={localidad}
                        onChange={(e) => setLocalidad(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl outline-hidden appearance-none transition-all focus:border-french-blue-500 dark:focus:bg-french-blue-900 dark:bg-french-blue-900/50 dark:border-french-blue-800 dark:text-white"
                    >
                        <option value="">Selecciona tu región</option>
                        {departamentos.map((dep) => (
                            <option key={dep.id} value={dep.name}>{dep.name}</option>
                        ))}
                    </select>
                </div>

                {/* Botón de Envío */}
                <button
                    type="submit"
                    disabled={identity.length !== 8 || !localidad}
                    className="w-full flex items-center justify-center gap-2 bg-french-blue-700 hover:bg-french-blue-800 disabled:bg-gray-500 text-white font-black py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-french-blue-600/20 disabled:shadow-none cursor-pointer disabled:cursor-not-allowed"
                >
                    <SendHorizontal className="w-5 h-5" />
                    ENVIAR MI VOTO
                </button>
            </form>
        </div>
    );
};

export default Formulario;