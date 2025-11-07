import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Navbar } from "../Components/navbar";
import { Footer } from "../Components/footer";
const RootLayout = () => (
  <>
    <Navbar></Navbar>
    <Outlet />
    <TanStackRouterDevtools />
    <Footer></Footer>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
