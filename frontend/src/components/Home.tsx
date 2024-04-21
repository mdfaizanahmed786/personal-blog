import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 max-w-6xl mx-auto py-8 px-4 md:px-8">
        <div className="container mx-auto space-y-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
            <img
              alt="Blog Post Image"
              className="w-48 h-48 object-cover"
              height={225}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/225",
                objectFit: "cover",
              }}
              width={300}
            />
            <div className="p-6 flex-1">
              <h2 className="text-xl font-bold mb-2">
                <Link to="/">Mastering React: A Comprehensive Guide</Link>
              </h2>
              <p className="text-gray-600 mb-4">
                Discover the power of React and learn how to build dynamic and
                responsive web applications.
              </p>
              <div className="flex items-center text-gray-500 text-sm">
                <span>John Doe</span>
                <span className="mx-2">•</span>
                <span>May 1, 2023</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
            <img
              alt="Blog Post Image"
              className="w-48 h-48 object-cover"
              height={225}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/225",
                objectFit: "cover",
              }}
              width={300}
            />
            <div className="p-6 flex-1">
              <h2 className="text-xl font-bold mb-2">
                <Link to="/">Unleashing the Power of CSS Grid</Link>
              </h2>
              <p className="text-gray-600 mb-4">
                Explore the versatility of CSS Grid and learn how to create
                complex and responsive layouts.
              </p>
              <div className="flex items-center text-gray-500 text-sm">
                <span>Jane Smith</span>
                <span className="mx-2">•</span>
                <span>April 15, 2023</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
            <img
              alt="Blog Post Image"
              className="w-48 h-48 object-cover"
              height={225}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/225",
                objectFit: "cover",
              }}
              width={300}
            />
            <div className="p-6 flex-1">
              <h2 className="text-xl font-bold mb-2">
                <Link to="/">Optimizing Website Performance</Link>
              </h2>
              <p className="text-gray-600 mb-4">
                Learn effective techniques to improve the speed and performance
                of your website.
              </p>
              <div className="flex items-center text-gray-500 text-sm">
                <span>Michael Johnson</span>
                <span className="mx-2">•</span>
                <span>March 28, 2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center"></div>
      </main>
    </div>
  );
}

export default Home;
