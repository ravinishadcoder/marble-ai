import { headingData } from "./data";
import { HeaderItem } from "./HeaderItem";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Header = ({ SetActive, active }: any) => {
  const toggleActive = () => {
    SetActive((prev: any) => !prev);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 px-4 lg:px-8 gap-4 lg:gap-8">
    {headingData.map((ele, ind) => (
      <HeaderItem
        key={ind}
        index={ind}
        title={ele.title}
        total={ele.total}
        percentage={ele.percentage}
      />
    ))}
    <div className="m-auto">
      <button onClick={toggleActive} className="m-auto">
        {active ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>
    </div>
  </div>
  );
};

export default Header;
