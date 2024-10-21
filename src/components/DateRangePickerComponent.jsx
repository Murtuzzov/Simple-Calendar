import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangePickerComponent = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;

    console.clear();
    console.log("Выбранная начальная дата:", startDate.toLocaleDateString());
    console.log("Выбранная конечная дата:", endDate.toLocaleDateString());

    const timeDifference = Math.abs(endDate - startDate);
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    console.log("Промежуток между датами (в днях):", daysDifference);

    setState([ranges.selection]);
  };

  return (
    <div className="flex justify-center items-start py-10 space-x-4">
      <div
        className="bg-white shadow-lg p-6 rounded-lg h-full flex-shrink-0"
        style={{ height: "auto" }}
      >
        <ul className="text-left">
          <li className="py-2 cursor-pointer hover:bg-gray-200">Сегодня</li>
          <li className="py-2 cursor-pointer hover:bg-gray-200">Вчера</li>
          <li className="py-2 cursor-pointer hover:bg-gray-200">
            Последние 7 дней
          </li>
          <li className="py-2 cursor-pointer hover:bg-gray-200">
            Последние 30 дней
          </li>
          <li className="py-2 cursor-pointer hover:bg-gray-200">
            Последние 90 дней
          </li>
          <li className="py-2 cursor-pointer hover:bg-gray-200">
            От начала работы
          </li>
        </ul>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">
          Применить
        </button>
      </div>
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <DateRange
          editableDateInputs={true}
          onChange={handleSelect}
          moveRangeOnFirstSelection={false}
          ranges={state}
          rangeColors={["#007bff"]}
          showDateDisplay={false}
          months={3}
          direction="horizontal"
          className="custom-calendar"
        />
      </div>
    </div>
  );
};

export default DateRangePickerComponent;
