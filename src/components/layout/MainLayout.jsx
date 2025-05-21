// src/components/layout/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const MainLayout = ({ children }) => { // Added children prop for errorElement
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children ? children : <Outlet />} {/* Render children if passed (for errorElement), else Outlet */}
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;