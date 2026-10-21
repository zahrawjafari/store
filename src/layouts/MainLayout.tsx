import { Outlet, ScrollRestoration } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
function MainLayout() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <main className="min-h-screen pt-[104px]">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
export default MainLayout;
