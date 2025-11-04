import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <div className="w-full flex justify-between p-2 h-[10vh] min-h-[75px] bg-[var(--ref-primary-30)] fixed">
      <div className="w-[12%] min-w-[100px] h-full flex justify-center items-center">
        <Link to="/" className="[&.active]:font-bold">
          Menu
        </Link>
      </div>
      <div className="w-[15%] min-w-[150px] h-full flex justify-center items-center">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
      </div>
      <div className="w-[15%] min-w-[150px] h-full flex justify-center items-center">
        <Link to="/" className="[&.active]:font-bold">
          Order Now
        </Link>
      </div>
    </div>
  );
}
