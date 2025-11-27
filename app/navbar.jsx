import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full m-auto flex justify-center">
      <div className="grid grid-cols-2 justify-around items-center w-[80%]">
        <div>
          <h1>Hamza</h1>
        </div>
        <ul className="flex flex-row gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
