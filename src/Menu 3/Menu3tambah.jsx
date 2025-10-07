import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Tambahmenu3() {
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    keterangan_afirmasi: "",
    jarak: "",
    nisn: "",
    nilai: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/afirmasi",
        formData
      );

      console.log("Respon server:", response.data);
      Swal.fire({
        title: "Yatta, Berhasil",
        icon: "success",
        draggable: true,
      });

      setFormData({
        nama_lengkap: "",
        keterangan_afirmasi: "",
        bukti_dokumen: "",
        nisn: "",
        nilai: "",
      });

      navigate("/M3");
    } catch (error) {
      console.error("Error saat menambahkan data:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="mr-12 bg-white p-8 rounded-lg shadow-2xl w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Tambah Data</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nama_lengkap"
            >
              Nama Lengkap
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nama_lengkap"
              type="text"
              name="nama_lengkap"
              value={formData.nama_lengkap}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="keterangan_afirmasi"
            >
              Keterangan <br /> afirmasi
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="keterangan_afirmasi"
              type="text"
              name="keterangan_afirmasi"
              value={formData.keterangan_afirmasi}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="bukti_dokumen"
            >
             Bukti <br />Dokumen
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="bukti_dokumen"
              type="text"
              name="bukti_dokumen"
              value={formData.bukti_dokumen}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nisn"
            >
              NISN
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nisn"
              type="text"
              name="nisn"
              value={formData.nisn}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nilai"
            >
              Rata-rata
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nilai"
              type="text"
              name="nilai"
              value={formData.nilai}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {loading ? "Loading..." : "Tambah"}
            </button>

            <Link
              to="/D"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Kembali
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Tambahmenu3;
