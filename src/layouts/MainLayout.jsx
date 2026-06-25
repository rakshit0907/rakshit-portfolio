import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}