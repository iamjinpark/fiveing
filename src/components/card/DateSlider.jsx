const DateSlider = ({ selectedDate, setSelectedDate }) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const todayDate = today.getDate();

  const week = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(currentYear, currentMonth, todayDate - 3 + i);
    return date.getDate();
  });

  const handleDateSelect = (date) => {
    const selectedDate = new Date(currentYear, currentMonth, date);
    const formattedDate = selectedDate.toLocaleDateString("sv-SE");
    setSelectedDate(formattedDate);
  };

  return (
    <div className="w-[320px] flex justify-between items-end gap-1 pt-7">
      {week.map((date, index) => (
        <button
          key={index}
          className={`flex justify-center items-center cursor-pointer
              ${date === new Date(selectedDate).getDate() ? "w-20 h-10 bg-tomato text-beige text-2xl font-extrabold rounded-t-full" : "text-tomato/50 text-xl font-semibold"}`}
          onClick={() => handleDateSelect(date)}
        >
          {date}
        </button>
      ))}
    </div>
  );
};

export default DateSlider;
