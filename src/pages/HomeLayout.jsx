import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function HomeLayout() {
  return (
    <main>
      <Navbar />
      <section className='page'>
        <Outlet />
      </section>
    </main>
  );
}
export default HomeLayout;
