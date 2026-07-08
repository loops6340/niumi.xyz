import Link from "next/link";

interface NavBarProps {
    route: string;
}

const NavBar = ({ route }: NavBarProps) => {
  return (
    <nav className="px-5 dark:text-dm-light-primary dark:bg-dm-dark-primary p-2 flex items-center w-full">
      <div className="flex items-center pt-1 w-full">
        <Link href="/">
          <h1 className="text-3xl font-bold">Ñumi.xyz <span className="text-xl">/{route}</span></h1>
        </Link>

        <Link href="/login" className="ml-auto">
          Iniciar sesión
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
