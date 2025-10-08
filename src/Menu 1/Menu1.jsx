import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Sidnav from "../Component/Sidnav";

function Menu1() {
  const [prestasi, setPrestasi] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/prestasi");
        setPrestasi(response.data);
      } catch (error) {
        console.error("Gagal ambil data prestasi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Yakin hapus?",
      text: "Data akan hilang😜!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/prestasi/${id}`);
          const newData = prestasi.filter((item) => item.id !== id);
          setPrestasi(newData);
          Swal.fire("Deleted!", "Data berhasil dihapus.", "success");
        } catch (err) {
          console.error("Gagal menghapus data:", err);
          Swal.fire("Error!", "Gagal menghapus data.", "error");
        }
      }
    });
  };


  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }
  return (
    <div className="p-6 ml-3">
      <div className="flex justify-between items-center mb-6 rounded-2xl py-5 px-20 bg-blue-500">
        <h2 className="text-2xl font-bold">Data jalur Prestasi</h2>
        <button
          onClick={() => navigate("/TambahM1")}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow"
        >
          + Tambah Data
        </button>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-2xl">
        <table className="table-auto w-full border-gray-300">
          <thead className="bg-gray-200">
            <tr className=" bg-blue-500">
              <th className="">No</th>
              <th className=" px-3 py-2">Nama Lengkap</th>
              <th className=" px-3 py-2">Asal Sekolah</th>
              <th className=" px-3 py-2">NIK</th>
              <th className=" px-3 py-2">NISN</th>
              <th className=" px-3 py-2">Rata-rata Nilai</th>
              <th className=" px-3 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {prestasi.length > 0 ? (
              prestasi.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className=" text-center">{index + 1}</td>
                  <td className="text-center px-3 py-2">{item.nama_lengkap}</td>
                  <td className="text-center px-3 py-2">{item.asal_sekolah}</td>
                  <td className="text-center px-3 py-2">{item.nik}</td>
                  <td className="text-center px-3 py-2">{item.nisn}</td>
                  <td className="text-center px-3 py-2">{item.nilai}</td>
                  <td className=" px-3 py-2 text-center">
                     <button
                    onClick={() => navigate(`/M1edit/${item.id}`)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                    <button
                      onClick={() => handleDelete(item.id)}a
                      className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded ml-4"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-6 text-gray-500 italic"
                >
                  Belum ada data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Menu1;
