import { Outlet } from "react-router-dom";
import PageTransition from "../components/PageTransition";

// Navbar now lives in AppRoutes (outside the animated area) so it doesn't
// remount on every navigation. No `key` here: AppRoutes already keys the
// whole <Routes>, and re-keying the exiting page broke its exit animation.
export default function MainLayout() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <main>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
    </div>
  );
}
