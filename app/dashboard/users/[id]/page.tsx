const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <h1 className="text-3xl">USER DETAILS PAGE FOR USER: {id}</h1>;
};

export default Page;
