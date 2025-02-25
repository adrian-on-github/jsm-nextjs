import books from "../../api/database";

const Books = async () => {
  const response = await fetch("http://localhost:3000/api/books");
  if (!response.ok) throw new Error("Fetch failed");
  const books = await response.json();
  return (
    <div>
      {books.map((b: { id: number; name: string }) => (
        <div key={b.id} className="text-xl text-white">
          {b.name}
        </div>
      ))}
    </div>
  );
};

export default Books;
