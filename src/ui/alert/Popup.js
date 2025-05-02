import { useState } from "react";
import { LuConstruction } from "react-icons/lu";

export default function AlertPopup() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={() => setShow(true)}
        className="bg-blue-950 text-white px-4 py-2 rounded"
      >
        Login
      </button>

      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <p className="text-gray-800">
            <LuConstruction
            className="text-lg"
            />
              Componente en  contruccion
            </p>
            <button
              onClick={() => setShow(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}