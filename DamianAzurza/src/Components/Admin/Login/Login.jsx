import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAdmin } from '../../../redux/Actions/actions'; // Asegúrate de que esta ruta sea correcta
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../../assets/LogoNavbar.png";
import { IoEyeOff, IoEye } from 'react-icons/io5'; // Importa los íconos

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const adminData = { username, password };
  
    try {
      const response = await dispatch(loginAdmin(adminData));
  
      if (response.token && response.admin) {
        const role = response.admin.role;
  
        console.log('Rol del admin:', role); // Agregado para depuración
        if (role === 'admin') {
          console.log('Redirigiendo a /panel');
          navigate('/panel');
        } else {
          alert('No tienes permisos para acceder a esta área');
        }
      }
    } catch (error) {
      alert('Error al iniciar sesión: ' + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-opacity-50" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <Link to="/" className="flex justify-center mb-4">
          <img src={Logo} alt="Logo" className="h-12" />
        </Link>
        <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
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
              placeholder="Ingresa tu usuario"
            />
          </div>
          <div className="mb-6 ">
            <label className="block text-gray-700 mb-2" htmlFor="password">Contraseña</label>
            <div className="mb-6 flex items-center relative">
            <input
              type={showPassword ? 'text' : 'password'} // Cambia entre 'text' y 'password'
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded pr-10" // Añade padding a la derecha para el ícono
              placeholder="Ingresa tu contraseña"
            />
            {/* Ícono de ver/ocultar contraseña */}
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <IoEyeOff size={24} /> : <IoEye size={24} />}
            </button>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-bold py-3 rounded hover:bg-blue-600">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;


