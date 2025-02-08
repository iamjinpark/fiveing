function ListType({ data }) {
  return (
    <div className="w-full h-auto flex flex-col gap-3 pt-4">
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`p-4 rounded-2xl text-center min-h-[50px] flex flex-col gap-6 items-center justify-center break-words
              ${index % 2 === 0 ? "bg-tomato text-white" : "bg-beige text-tomato"}
            `}
        >
          <p className="text-lg font-bold">{item.eng}</p>
          <p className="text-md">{item.kor}</p>
        </div>
      ))}
    </div>
  );
}

export default ListType;
