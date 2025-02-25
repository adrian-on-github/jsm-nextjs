const Home = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Fetch failed");
  const albums = await response.json();

  return (
    <div>
      {albums.map((album: { id: number; title: string }) => (
        <div key={album.id}>
          {album.title} {album.id}
        </div>
      ))}
    </div>
  );
};

export default Home;
