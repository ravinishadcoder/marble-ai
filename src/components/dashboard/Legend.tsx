import line from "../../assets/line.svg";

export const CustomLegend = ({ data }: any) => {
  const firstMonth = data[0].date;
  const lastMonth = data[data.length - 1].date;

  return (
    <div className="custom-legend   px-2 sm:px-4  border-red-700
     flex sm:justify-between items-center justify-center">
      <div></div>

      <div className="flex gap-2 sm:gap-5">
        <div className="flex rounded text-[10px] font-normal leading-[12px] tracking-[0em] text-left sm:px-4 py-1 bg-[#F1F1F1] items-center">
          <p>{` ${firstMonth}`}</p>
          <p>{` -  ${lastMonth}`}</p>
        </div>
        <div className="flex rounded text-[10px] font-normal leading-[12px] tracking-[0em] text-left sm:px-4 py-1 bg-[#F1F1F1] items-center">
          <img className="m-1 p-1" src={line} />
          <p>{` ${firstMonth}`}</p>
          <p>{` -  ${lastMonth}`}</p>
        </div>
      </div>
    </div>
  );
};
