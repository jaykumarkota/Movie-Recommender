import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
function MainLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default MainLayout;