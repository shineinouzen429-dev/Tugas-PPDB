import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Berhasil Mendaftar Akun",
      icon: "success",
      draggable: true,
    }).then(() => {
      navigate("/D");
    });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen h-14 bg-gray-400 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/68/3b/8b/683b8b8a0775518e4a66498e60522160.jpg')",
      }}
    >
      <div className="p-10 mt-10 rounded-lg shadow-md w-full max-w-sm bg-white">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 opacity-100">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="border-0 border-b-2 border-gray-300 focus:border-black focus:outline-none w-full py-2 px-0 text-gray-700 leading-tight"
              id="name"
              type="text"
              name="name"
              value={formdata.name}
              onChange={handleChange}
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border-0 border-b-2 border-gray-300 focus:border-black focus:outline-none w-full py-2 px-0 text-gray-700 leading-tight"
              id="email"
              type="text"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Password"
            >
              Password
            </label>
            <input
              className="border-0 border-b-2 border-gray-300 focus:border-black focus:outline-none w-full py-2 px-0 text-gray-700 leading-tight"
              id="password"
              type="password"
              name="password"
              value={formdata.password}
              onChange={handleChange}
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="flex flex-col items-center gap-2 justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Daftar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
