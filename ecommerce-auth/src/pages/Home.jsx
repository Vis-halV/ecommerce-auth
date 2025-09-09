import Navbar from "../components/Navbar";
import Button from "../components/Button";
import HeroImg from "../assets/hero.svg";

function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 md:mx-[5%]">

      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Empower Your Shopping with{" "}
            <span className="text-indigo-600">Secure Authentication</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Experience seamless, fast, and secure login for your e-commerce platform. 
            Built with modern authentication and user-first design.
          </p>

          <div className="flex gap-4">
            <Button variant="secondary" size="lg">Get Started</Button>
            <Button variant="primary" size="lg">Learn More</Button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <p className="text-2xl font-bold text-emerald-500">500+</p>
              <p className="text-gray-600 text-sm">Secure Logins Daily</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-indigo-600">99.9%</p>
              <p className="text-gray-600 text-sm">Uptime Guaranteed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-emerald-500">1M+</p>
              <p className="text-gray-600 text-sm">Users Protected</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={HeroImg}
            alt="Shopping Illustration"
            className="w-full max-w-md rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
