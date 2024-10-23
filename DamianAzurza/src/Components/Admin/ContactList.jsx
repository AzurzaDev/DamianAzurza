import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from '../../redux/Actions/actions';
import { Link} from 'react-router-dom';
import NavBar from '../Navbar';

const ContactList = () => {
  const dispatch = useDispatch();
  const  contacts = useSelector(state => state.contacts); 
  const  loading = useSelector(state => state.loading); 
  const error  = useSelector(state => state.error); 

  useEffect(() => {
    dispatch(getAllContacts()); // Llama a la acción al montar el componente
  }, [dispatch]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4 mt-10">
    <div className='fixed top-0 left-0 z-50 w-full'>
      <NavBar />
    </div>
        <Link to="/panel" className="w-1/4 mt-16 mb-4 block text-center bg-gray-300 text-gray-700 py-2 rounded font-Montserrat hover:bg-fondoServicios transition">
          Volver al Panel
        </Link>
      <h1 className="text-2xl font-bold font-Montserrat text-slate-300 text-center bg-gray-500 mb-4">Lista de Contactos</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 font-Montserrat border-b text-start">Nombre</th>
            <th className="py-2 px-4 font-Montserrat border-b text-start">Email</th>
            <th className="py-2 px-4 font-Montserrat border-b text-start">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td className="py-2 px-4 border-b">{contact.name}</td>
              <td className="py-2 px-4 border-b">{contact.email}</td>
              <td className="py-2 px-4 border-b">{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default ContactList;
