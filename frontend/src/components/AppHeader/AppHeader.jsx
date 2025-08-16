import { Link } from "react-router-dom";


const navBar = [
  {
    id: 1,
    value: "Latest Test",
    link: "test",
  },
  {
    id: 2,
    value: "Results",
    link: "/results",
  },
  {
    id: 3,
    value: "Achievements",
    link: "/achievements",
  },
  {
    id: 4,
    value: "Balance/Tariff",
    link: "/balance",
  },
  {
    id: 5,
    value: "Profile",
    link: "/profile",
  },
];

export default function AppHeader() {
  return (
    <header className="border-b-1 border-gray-500">
      <div>
        <nav className="flex flex-row w-11/12 m-auto h-[50px]">
          <ul className="flex flex-row gap-6 ml-auto mr-auto">
            {navBar.map((item) => (
              <li key={item.id} className="flex items-end h-full">
                <Link
                  to={item.link}
                  className="pb-1 border-b-2 w-[120px] text-center border-stone-800 hover:text-xl hover:border-white hover:transition ease-in-out duration-200"
                >
                  {item.value}
                </Link>
              </li>
            ))}
          </ul>
          <img src="vite.svg" className="m-auto mr-0 size-[35px] " />
        </nav>
      </div>
    </header>
  );
}
