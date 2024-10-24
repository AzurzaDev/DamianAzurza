/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createShow, getAllShows, updateShow, deleteShow } from '../../redux/Actions/actions'; 
import Navbar from '../Navbar';
import { openCloudinaryWidget } from '../../cloudinaryConfig'; 
import { Link } from 'react-router-dom';


const AgendaShows = () => {
  const dispatch = useDispatch();
  const shows = useSelector((state) => state.shows); // Asegúrate de que el estado esté estructurado correctamente
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [direccion, setDireccion] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [editingShowId, setEditingShowId] = useState(null); // Estado para identificar si se está editando un show

  useEffect(() => {
    dispatch(getAllShows());
  }, [dispatch]);

  const handleImageUpload = () => {
    openCloudinaryWidget((uploadedImageUrl) => {
      setImages(prevImages => [...prevImages, uploadedImageUrl]);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const showData = {
      images,
      title,
      direccion, // Corrige el nombre de la variable aquí
      date,
      city,
    };

    if (editingShowId) {
      // Si se está editando, despacha la acción de actualización
      dispatch(updateShow(editingShowId, showData));
      setEditingShowId(null); // Limpia el ID de edición
    } else {
      // Si no se está editando, despacha la acción de creación
      dispatch(createShow(showData)); 
      console.log(showData)
    }

    // Limpiar los campos después de crear o editar el show
    setTitle('');
    setDireccion('');
    setDate('');
    setCity('');
    setImages([]);
  };

  const handleEditShow = (show) => {
    
    setTitle(show.title);
    setDireccion(show.direccion);
    setDate(show.date);
    setCity(show.city);
    setImages(show.images || []); 
    setEditingShowId(show.idShow); 
  };

  const handleDeleteShow = (show) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este show?')) {
      dispatch(deleteShow(show));
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-2">
      <Navbar /> 
      <div className="max-w-md mx-auto bg-white mt-36 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">{editingShowId ? 'Editar Show' : 'Agregar Show'}</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="Lugar y Horario" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <input 
              type="text" 
              placeholder="Dirección" 
              value={direccion} 
              onChange={(e) => setDireccion(e.target.value)} 
              required 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <input 
              type="text" 
              placeholder="Ciudad" 
              value={city} 
              onChange={(e) => setCity(e.target.value)} 
              required 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          
          <button 
            type="button" 
            onClick={handleImageUpload} 
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Subir Imágenes
          </button>
          <button 
            type="submit" 
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            {editingShowId ? 'Actualizar Show' : 'Crear Show'}
          </button>
        </form>
        <Link to="/panel" className="w-full mt-4 block text-center bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 transition">
          Volver al Panel
        </Link>
      </div>
      
      {/* Lista de Shows creados */}
      <div className="max-w-md mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-4 text-center">Shows Creados</h2>
        <ul className="space-y-4">
          {shows.map((show) => (
            <li key={show.idShow} className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">{show.title}</h3>
              <p>Dirección: {show.direccion}</p>
              <p>Ciudad: {show.city}</p>
              <p>Fecha: {show.date}</p>
              {/* Botón de edición */}
              <button 
                onClick={() => handleEditShow(show)} 
                className="mt-2 bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 transition mx-2"
              >
                Editar
              </button>
              <button 
                onClick={() => handleDeleteShow(show.idShow)} 
                className="mt-2 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AgendaShows;


