import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./pages/home.jsx";
import { Search } from "./pages/search.jsx";
import { AdminPanel } from "./pages/adminPanel.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/admin/dashboard.jsx";
import { Products } from "./pages/admin/products.jsx";
import { Orders } from "./pages/admin/orders.jsx";
import { Users } from "./pages/admin/users.jsx";
import { Pages } from "./pages/admin/pages.jsx";
import { CreateProductsModal } from "./components/admin/modals/create-product.jsx";
import { AdminProfileContext,DashboardContext } from "./core/admin-panel.jsx";
import BaseAuthPage from "./pages/admin/auth/baseAuthPage.jsx";
import ResponsiveProvider from "@shared/responsiveProvider";

createRoot(document.getElementById("root")).render(
  
    <AdminProfileContext value={{}}>
    <DashboardContext value={{}}>
    <BaseAuthPage class="flex bg-red-200">
    
    <ResponsiveProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/admin" element={<AdminPanel />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="users" element={<Users />} />
            <Route path="pages" element={<Pages />} />
            <Route path="products/create" element={<CreateProductsModal />} />
          </Route>

          {/* <AdminRoutes /> */}
        </Routes>
      </BrowserRouter>
      </ResponsiveProvider>
    </BaseAuthPage>
    </DashboardContext>
  </AdminProfileContext>

);
