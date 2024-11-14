import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerAdmin, getAllAdmins } from '../../../redux/Actions/actions'; // Asegúrate de importar la acción
import { FaEdit, FaTrash } from 'react-icons/fa'; // Iconos para editar y eliminar
import { toast } from 'react-toastify'; // Usaremos toast para los mensajes de alerta

const RegisterAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  // Obtener los administradores desde el estado global de Redux
  const admins = useSelector(state => state.admins || []);

  // Obtener todos los administradores cuando el componente se monta
  useEffect(() => {
    dispatch(getAllAdmins()); // Llamar a la acción para obtener los administradores
  }, [dispatch]);

  // Acción para registrar un nuevo administrador
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const adminData = { username, password };
    
    try {
      const response = await dispatch(registerAdmin(adminData));
      
      // Mostrar alerta si el usuario fue creado correctamente
      if (response && response.payload) {
        toast.success('¡Administrador creado con éxito!');
        setUsername('');
        setPassword('');
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message); // Mostrar alerta si ya existe el usuario o algún error
      }
    }
  };

  // Función para eliminar un administrador
  const handleDelete = (id) => {
    const updatedAdmins = admins.filter((admin) => admin.id !== id);
    // Aquí podrías despachar una acción para eliminar el admin desde el backend
    // dispatch(deleteAdmin(id)); // Despachar acción de eliminación
  };

  // Función para editar un administrador (puedes expandirla según sea necesario)
  const handleEdit = (id) => {
    const adminToEdit = admins.find((admin) => admin.id === id);
    setUsername(adminToEdit.username);
    setPassword(adminToEdit.password);
    // Aquí podrías implementar una lógica para actualizar el admin
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Registrar Administrador</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Ingresa el nombre de usuario"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Ingresa la contraseña"
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white font-bold py-3 rounded hover:bg-blue-600">
            Registrar Administrador
          </button>
        </form>

        {/* Mostrar la lista de administradores registrados */}
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">Administradores Registrados</h3>
          <div className="space-y-4">
            {admins.length > 0 ? (
              admins.map((admin) => (
                <div key={admin.id} className="flex justify-between items-center border-b pb-2 mb-2">
                  <div className="flex items-center">
                    <span className="font-semibold">{admin.username}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(admin.id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(admin.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash size={20} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No hay administradores registrados.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterAdmin;
