import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import PageTransition from "../components/PageTransition";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black/60 text-white">
      <Navbar />
      <main>
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </main>
    </div>
  );
}