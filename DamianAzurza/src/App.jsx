import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Panel from "./Components/Admin/Panel";
import AgendaShows from "./Components/Admin/AgendaShows";
import PhotosGallery from "./Components/PhotosGallery";
// import ProtectedRoutes from './utils/ProtectedRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Asegúrate de importar los estilos
import Login from "./Components/Admin/Login/Login";
import CarouselImages from "./Components/Admin/CarouselImages";
import ContactList from "./Components/Admin/ContactList";


function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
        onClose={() => toast.dismiss()}
      />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/fotos" element={<PhotosGallery />} />
        {/* Ruta protegida: solo los administradores pueden ver el Panel */}
        <Route
          path="/panel"
          element={
            // <ProtectedRoutes>
            <Panel />
            // </ProtectedRoutes>
          }
        />
          <Route
          path="/panel/Images"
          element={
            // <ProtectedRoutes>
            <CarouselImages />
            // </ProtectedRoutes>
          }
        />
           <Route
          path="/panel/contact"
          element={
            // <ProtectedRoutes>
            <ContactList />
            // </ProtectedRoutes>
          }
        />
        <Route
          path="/panel/shows"
          element={
            // <ProtectedRoutes>
            <AgendaShows />
            // </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;
