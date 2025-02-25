import Hello from "./components/hello";

export default function Home() {
  console.log("What is this? -- Server?");
  return (
    <>
      <h1 className="text-3xl underline">Welcome to Next.js</h1>
      <Hello />
    </>
  );
}
