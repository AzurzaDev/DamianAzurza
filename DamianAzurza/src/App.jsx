import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Panel from "./Components/Admin/Panel";
import AgendaShows from "./Components/Admin/AgendaShows";
//import ProtectedRoutes from './utils/ProtectedRoutes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
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
        path="/panel/shows"
        element={
          // <ProtectedRoutes>
          <AgendaShows />
          // </ProtectedRoutes>
        }
      />
    </Routes>
  );
}

export default App;
