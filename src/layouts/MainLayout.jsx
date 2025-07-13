import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { MovieContext } from '../contexts/MovieContext.jsx';
function MainLayout() {
  return (
    <>
      <NavBar />
      <main className='main-content'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
  {/* <MovieContext.Provider value={{ name: "Guruvu Garu" }}> */ }
  // </MovieContext.Provider>
}
export default MainLayout;