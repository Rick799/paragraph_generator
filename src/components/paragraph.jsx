import { useState } from "react";
import data from "./data";

function Paragraph() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 12) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <div className="bg-gradient-to-b from-blue-200 to-purple-400">
      <section className=" text-center w-11/12 max-w-xl py-20 mx-auto lg:w-full">
        <h3 className="text-xl text-emerald-900 font-bold tracking-widest uppercase lg:text-3xl">
          Interesting Facts About India
        </h3>
        <form
          className="capitalize mt-8 mb-16 tracking-widest flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <label className="text-xl text-violet-500" htmlFor="amount">
            paragraphs:
          </label>
          <input
            className="text-xl py-1 px-2 w-16 rounded-lg border-2 border-violet-300 bg-emerald-200 my-0 mx-3 shadow-md shadow-violet-500"
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className="py-2 px-3 text-xl cursor-pointer rounded-2xl border-2 border-emerald-500 bg-violet-500 text-emerald-200 tracking-wide font-semibold uppercase shadow-md shadow-lime-600 ease-linear duration-300 inline-block hover:bg-violet-300 hover:text-emerald-900 hover:border-emerald-500">
            generate
          </button>
        </form>
        <article className="lorem-text">
          {text.map((item, index) => {
            return (
              <p
                className="mb-7 text-lg font-medium tracking-wide text-emerald-800 text-center"
                key={index}
              >
                {item}
              </p>
            );
          })}
        </article>
      </section>
    </div>
  );
}

export default Paragraph;
