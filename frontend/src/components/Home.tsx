import Blogs from "./Blogs";

function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 max-w-6xl mx-auto py-8 px-4 md:px-8">
        <div className="container mx-auto space-y-8">
          <Blogs />
        </div>
        <div className="mt-8 flex justify-center"></div>
      </main>
    </div>
  );
}

export default Home;
