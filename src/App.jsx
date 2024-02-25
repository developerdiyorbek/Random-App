import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimatedNumbers from "react-animated-numbers";

const App = () => {
  const minValue = useRef();
  const maxValue = useRef();
  const [randomNumber, setRandomNumber] = useState("0");

  const handleSubmit = (e) => {
    e.preventDefault();
    const min = parseInt(minValue.current.value);
    const max = parseInt(maxValue.current.value);

    if (min < 0 || max < 0) {
      toast.warning("Please enter a positive number!");
      return;
    } else if (min >= max) {
      toast.warning("The max value must be greater than the min value!");
      return;
    }
    setRandomNumber(Math.floor(Math.random() * (max - min + 1)) + min);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-200 to-sky-300">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full md:max-w-[600px]">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>Random Number : </span>
          <AnimatedNumbers
            includeComma
            transitions={(index) => ({
              type: "spring",
              duration: 1,
            })}
            animateToNumber={randomNumber}
            fontStyle={{
              fontSize: 40,
              color: "#FBBF24",
            }}
          />
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="flex-1">
              <label
                htmlFor="minInput"
                className="block text-sm font-semibold text-gray-700"
              >
                Min
              </label>
              <input
                type="number"
                id="minInput"
                className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                ref={minValue}
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="maxInput"
                className="block text-sm font-semibold text-gray-700"
              >
                Max
              </label>
              <input
                type="number"
                id="maxInput"
                className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                ref={maxValue}
                required
              />
            </div>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
            Generate Number
          </button>
        </form>
      </div>
      <ToastContainer autoClose={1500} />
    </div>
  );
};

export default App;
