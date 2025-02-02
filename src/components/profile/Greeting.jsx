function Greeting() {
  const hours = new Date().getHours();

  let greetingMessage = "GOOD MORNING";
  if (hours >= 12 && hours < 18) {
    greetingMessage = "GOOD AFTERNOON";
  } else if (hours >= 18) {
    greetingMessage = "GOOD EVENING";
  }

  return (
    <div className="w-full h-[80px] pl-4 pt-2">
      <h1 className="text-tomato text-3xl font-extrabold transition-all duration-500">
        <span>{greetingMessage},</span>
        <br />
        {/* TODO : 로그인 구현 후 이름 추가 */}
        <span>NAME!</span>
      </h1>
    </div>
  );
}

export default Greeting;
