import books from "../../database";

export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  console.log(context.params.id);
  const id = +context.params.id;
  const book = await request.json();
  const index = books.findIndex((book) => book.id === id);
  books[index] = book;
  return Response.json(book);
}

export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  const id = +context.params.id;
  const index = books.findIndex((book) => book.id === id);
  books.splice(index, 1);
  return Response.json(books);
}
