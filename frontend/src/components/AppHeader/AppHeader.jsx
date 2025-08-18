import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import navBar from "../../data/navBar";
import BurgerMenu from "../UI/BurgerMenu/BurgerMenu";

export default function AppHeader() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [idOpen, setIdOpen] = useState("0")

 

  return (
    <header className="border-b border-gray-500">
      <div className="flex justify-between items-center w-11/12 m-auto h-[50px]">
        <BurgerMenu onClick={() => setIsOpen(!isOpen)}/>
        <nav className="hidden md:flex flex-row gap-6 ml-auto mr-auto h-full">
          {navBar.map((item) => (
            <li  className="list-none flex items-end h-full">
              <Link
                to={item.link}
                onClick={() => setIdOpen(item.id)}
                className={`${idOpen == item.id ? "border-white" : ""} pb-1 border-b-2 w-[120px] text-center border-stone-800 hover:text-xl hover:border-white transition ease-in-out duration-200`}
              >
                {item.value}
              </Link>
            </li>
          ))}
        </nav>
        
        {window.location.pathname == '/balance' ? <p></p> : <img
          src="walletWhite.svg"
          onClick={() => navigate("/balance")}
          className="cursor-pointer size-[35px]"
        /> }
        
      </div>

      {isOpen && (
        <nav className="md:hidden bg-gray-800 text-white">
          <ul className="flex flex-col p-4 gap-4">
            {navBar.map((item) => (
              <li key={item.id} className="list-none">
                <Link
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center hover:bg-gray-700 rounded-md p-2"
                >
                  {item.value}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
