import { Outlet } from "react-router-dom";
import AppHeader from "../../AppHeader/AppHeader";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />   {/* всегда сверху */}
      <main className="flex-grow flex p-4">
        <Outlet />    {/* сюда подставляется контент выбранной страницы */}
      </main>
    </div>
  );
}
