import { useRef } from "react";
import { useStateContext } from "../core/ContextProvider";
import axiosClient from "../core/axiosClient";

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { setToken, setUser } = useStateContext();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    axiosClient.post("auth/login", payload)
      .then(({ data }) => {
        setToken(data.token);
        // Ensure the data has the correct structure
        setUser(data.data); // Pass the correct user object here
        console.log(data.data);
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
        }
      });
    console.log(payload);
  };

  return (
    <section className="container mx-auto">
      <section className="login flex flex-col justify-center items-center m-9">
        <form
          onSubmit={handleLogin}
          className="flex flex-col w-96 justify-center bg-gray-100 shadow-lg rounded-lg p-8"
        >
          <img
            src="https://adminconvoys.ewdclinic.com/public/img/logo.png"
            alt="Logo"
            className="mx-auto w-24 h-24 mb-6"
          />
          <h2 className="text-center text-2xl font-semibold text-blue-700 mb-4">
            Login
          </h2>
          <input
            ref={emailRef}
            type="text"
            placeholder="Email"
            className="my-2 py-2 px-4 border border-blue-300 rounded-full bg-blue-50 text-blue-700 outline-none placeholder:text-blue-500"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="my-2 py-2 px-4 border border-blue-300 rounded-full bg-blue-50 text-blue-700 outline-none placeholder:text-blue-500"
          />
          <button
            type="submit"
            className="bg-[#BF222F] text-white py-3 px-6 rounded-full hover:bg-b[#8B0E19FF] transition-all duration-300 mt-4"
          >
            Login
          </button>
        </form>
      </section>
    </section>
  );
}
