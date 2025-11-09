import { createRootRoute, Outlet } from "@tanstack/react-router";
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

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[var(--ref-primary-40)]">
      <h1 className="text-6xl font-bold mb-4 text-gray-900">404</h1>
      <p className="text-2xl text-gray-700 mb-8">
        Oops! This page doesn't exist.
      </p>
      <a
        href="/"
        className="px-8 py-4 bg-[var(--ref-primary-50)] text-white rounded-full text-lg font-semibold hover:opacity-90 transition-all"
      >
        Back to Home
      </a>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});
