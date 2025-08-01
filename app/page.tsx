import BlogList from "../components/BlogList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Utkrusht Blog</h1>
        <BlogList />
      </div>
    </main>
  );
}
