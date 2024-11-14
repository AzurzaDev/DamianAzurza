import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerAdmin, getAllAdmins, deleteAdmin, editAdmin } from '../../../redux/Actions/actions'; // Importar las nuevas acciones
import { FaEdit, FaTrash } from 'react-icons/fa'; // Iconos para editar y eliminar
import { toast } from 'react-toastify';
import Navbar from '../../Navbar';

const RegisterAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [editingAdmin, setEditingAdmin] = useState(null); // Para controlar la edición

  const dispatch = useDispatch();
  const admins = useSelector(state => state.admins || []);

  // Obtener los administradores cuando el componente se monta
  useEffect(() => {
    dispatch(getAllAdmins());
  }, [dispatch]);

  // Función para registrar un nuevo administrador
  const handleSubmit = async (e) => {
    e.preventDefault();
    const adminData = { username, password };
    
    try {
      if (editingAdmin) {
        // Si estamos editando, despachamos la acción de editar
        await dispatch(editAdmin(editingAdmin.adminId, adminData));
        setEditingAdmin(null); // Limpiar el estado de edición
      } else {
        // Si estamos registrando, despachamos la acción de registrar
        await dispatch(registerAdmin(adminData));
      }
      setUsername('');
      setPassword('');
    } catch (error) {
      toast.error('Error al registrar o editar administrador');
    }
  };

  // Función para eliminar un administrador
  const handleDelete = (adminId) => {
    dispatch(deleteAdmin(adminId));
    
  };

  // Función para editar un administrador
  const handleEdit = (adminId) => {
    const adminToEdit = admins.find((admin) => admin.adminId === adminId);
    setUsername(adminToEdit.username);
    setPassword(adminToEdit.password);
    setEditingAdmin(adminToEdit); // Guardamos el administrador que estamos editando
  };

  return (
    <div className="bg-gray-100 min-h-screen py-2">
    <Navbar />
    <div className="max-w-md mx-auto bg-white mt-36 p-6 rounded-lg shadow-lg">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">{editingAdmin ? 'Editar Administrador' : 'Registrar Administrador'}</h2>

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
            {editingAdmin ? 'Actualizar Administrador' : 'Registrar Administrador'}
          </button>
        </form>

        {/* Mostrar la lista de administradores */}
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">Administradores Registrados</h3>
          <div className="space-y-4">
            {admins.length > 0 ? (
              admins.map((admin) => (
                <div key={admin.adminId} className="flex justify-between items-center border-b pb-2 mb-2">
                  <div className="flex items-center">
                    <span className="font-semibold">{admin.username}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(admin.adminId)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(admin.adminId)}
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
    </div>
  );
};

export default RegisterAdmin;
