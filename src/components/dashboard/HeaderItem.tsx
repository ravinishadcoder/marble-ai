import { FaPencilAlt } from "react-icons/fa";
import { BiSolidUpArrow } from "react-icons/bi";
import { SetStateAction, useState } from "react";
import menu from "../../assets/menu.svg";
import { menuList } from "./data";

export const HeaderItem = ({ title, total, percentage, index }: any) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState(-1);

  const toggleMenuVisibility = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuMouseEnter = (index: SetStateAction<number>) => {
    setActiveMenuIndex(index);
  };

  const handleMenuMouseLeave = () => {
    setActiveMenuIndex(-1);
  };
  return (
    <div
      className={`px-4 md:px-6 py-4 ${index === 0 ? "bg-[#F1F1F1]" : ""} rounded-lg cursor-pointer hover:bg-[#F1F1F1] mb-4 sm:mb-0`}
    >
      <div className="flex justify-between items-center py-1 px-1  border-b-2 border-dashed">
          <p className="font-semibold text-[#303030]">{title}</p>
        <p
          className={`rounded  p-1 relative text-[#70707A] hidden hover:p-1 hover:bg-[#aeabab]`}
        >
          <span className="rounded focus:outline-none" onClick={toggleMenuVisibility}>
            <FaPencilAlt />
          </span>

          {menuOpen && (
            <div
              className="fixed inset-0 sm:inset-auto lg:inset-auto z-50 flex items-center justify-center bg-opacity-50
              sm:top-40 sm:right-0 sm:left-20
              "
              onClick={toggleMenuVisibility}
            >
              <div className="bg-white p-4 rounded shadow-lg">
                <ul className="list-none p-0">
                  {menuList.map((item: any, index: any) => (
                    <li
                      key={index}
                      onMouseEnter={() => handleMenuMouseEnter(index)}
                      onMouseLeave={handleMenuMouseLeave}
                      className={`py-2 w-56 cursor-pointer px-2 rounded-lg hover:bg-[#F1F1F1] flex justify-between items-center ${
                        activeMenuIndex === index ? "bg-[#F1F1F1]" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={menu}
                          className="w-4 h-4"
                          alt="Trend Icon"
                        />
                        <p className="text-sm truncate">{item.title}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </p>
      </div>

      <div className="items-center gap-2 py-1 md:px-1 flex flex-row">
        <p className="font-bold text-[#303030] text-lg">{total}</p>
        <div className="flex items-center">
          <BiSolidUpArrow className="text-sm text-[#70707A]" />
          <p className="text-[#70707A] text-[.8rem] ml-1">{percentage}</p>
        </div>
      </div>
    </div>
  );
};
