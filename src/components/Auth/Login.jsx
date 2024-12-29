import { useState } from "react";

function Login({handleLogin}) {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
   handleLogin(email,password)

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center text-white">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2  outline-none bg-transparent border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400"
            type="email"
            placeholder=" enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2  outline-none bg-transparent border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400 mt-3"
            type="password"
            placeholder=" enter your password"
          />
          <button className=" text-white border-none outline-none  bg-emerald-600 py-3 px-5 text-xl w-full rounded-full placeholder:text-white mt-10">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
