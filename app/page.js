import Link from "next/link";

const HomePage = () => {
  // This is the route page

  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Next.js Tutorial</h1>

      {/* This is link */}
      <Link href="/client" className="btn btn-accent">
        Get Started
      </Link>
    </div>
  );
};

export default HomePage;
