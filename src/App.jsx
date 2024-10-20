import { useEffect, useState } from 'react';
import { useExpedientes } from './hooks/useExpedientes';

function App() {

  const { expedientes, loading, error } = useExpedientes()
  /* const [expedientes, setExpedientes] = useState([]); // Inicializa como un array vacío
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExpedientes = async () => {
      try {
        const response = await fetch('http://localhost:3000/migration');
        
        
        const result = await response.json();
        console.log(result);
        

        if (response.ok) {
          setExpedientes(result); // Asigna los expedientes al estado
        } else {
          throw new Error(result.message || 'Error al obtener expedientes');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExpedientes();
  }, []);
 */
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Listado de Expedientes</h1>
      {expedientes.length > 0 ? ( // Comprueba si hay expedientes
        <ul>
          {expedientes.map(expediente => (
            <li key={expediente.idExpediente}>
              {expediente.titulo_expediente}: {expediente.descripcion}
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron expedientes.</p> // Mensaje alternativo si no hay datos
      )}
    </div>
  );
}

export default App;
