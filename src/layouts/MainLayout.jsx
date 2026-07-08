import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import PageTransition from "../components/PageTransition";
export default function MainLayout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </main>
    </div>
  );
}