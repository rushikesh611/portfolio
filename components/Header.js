import Link from "next/link";
import { withRouter } from "next/router";
import { SunIcon } from "@heroicons/react/outline";
import { MoonIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";

function Header({ router }) {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center justify-end">
      <div className="flex justify-end mr-6 px-6 lg:py-6">
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="p-3 h-12 w-12 order-2 md:order-3"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme == "light" ? (
            <MoonIcon className="ml-6 h-9 w-9" />
          ) : (
            <SunIcon className="ml-6 h-9 w-9" />
          )}
        </button>
      </div>
    </div>
  );
}

export default withRouter(Header);
