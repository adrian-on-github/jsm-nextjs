import Hello from "../components/hello";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Page",
  description: "First Page description",
};

export default function Home() {
  console.log("What is this? -- Server?");

  return (
    <>
      <h1 className="text-3xl underline">Welcome to Next.js</h1>
      <Hello />
    </>
  );
}
