import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <Image alt="Faux" src={"/icon.png"} width={40} height={40} />

          <div className="hidden sm:flex sm:flex-col">
            <span className="font-semibold tracking-tight">Faux</span>

            <span className="text-xs text-muted-foreground">
              Create viral AI creators
            </span>
          </div>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:inline-flex" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
