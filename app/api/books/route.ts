import books from "../database";

export async function GET() {
  return Response.json(books);
}

export async function POST(request: Request) {
  const books = await request.json();
  books.push(books);

  return Response.json(books);
}
