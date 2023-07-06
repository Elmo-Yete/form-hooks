import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit } = useForm();
  return (
    <main className="bg-slate-800 h-screen text-white">
      <aside className="flex bg-slate-600 flex-col w-1/5 ">
        <div>
          <h1 className="font-bold text-center"> Form </h1>
          <form
            className="flex flex-col  justify-center items-center gap-5"
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <input
              {...register("firstname")}
              type="text"
              placeholder="Ingrese.."
              className="bg-slate-500"
            ></input>
            <input
              {...register("lastname")}
              type="text"
              placeholder="Ingrese..."
              className="bg-slate-500"
            ></input>
            <button type="submit" className="bg-slate-400 w-full">
              Submit
            </button>
          </form>
        </div>
      </aside>
      <section className=" bg-slate-700"></section>
    </main>
  );
}
