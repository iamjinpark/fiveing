const DateSlider = ({ selectedDate, setSelectedDate }) => {
  const today = new Date().getDate();
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(today - 3 + i);
    return date.getDate();
  });

  return (
    <div className="w-[320px] flex justify-between items-end gap-3 pt-7">
      {dates.map((date, index) => (
        <button
          key={index}
          className={`flex justify-center items-center cursor-pointer
            ${date === selectedDate ? "w-20 h-10 bg-tomato text-beige text-2xl font-bold rounded-t-full" : "text-tomato/50 text-xl font-semibold"}`}
          onClick={() => setSelectedDate(date)}
        >
          {date}
        </button>
      ))}
    </div>
  );
};

export default DateSlider;
