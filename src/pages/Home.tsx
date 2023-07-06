import { Link } from "react-router-dom";
export default function Home() {
  return (
    <main className="bg-slate-800 min-h-screen flex flex-col justify-center items-center text-neutral-100 gap-14">
      <header>
        <img
          src="../src/assets/gato.jpg"
          alt="gato meme"
          className="w-80 rounded-xl"
        />
      </header>
      <h1 className="text-2xl">Esta es la Landing</h1>
      <Link to="/form" className="bg-teal-500 text-neutral-100 rounded-md p-4">
        Ir al Form
      </Link>
    </main>
  );
}
