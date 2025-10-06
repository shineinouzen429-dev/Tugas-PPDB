import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Dashboard() {
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
      text: "Data akan hilang permanen!",
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
    <div className="p-6 pl-0">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Data jalur Prestasi</h2>
        <button
          onClick={() => navigate("/M1")}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow"
        >
          Tambah Data
        </button>
      </div>

      <div className="overflow-x-auto bg-white shadow-md">
        <table className="table-auto w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border">No</th>
              <th className="border px-3 py-2">Nama Lengkap</th>
              <th className="border px-3 py-2">Asal Sekolah</th>
              <th className="border px-3 py-2">NIK</th>
              <th className="border px-3 py-2">NISN</th>
              <th className="border px-3 py-2">Rata-rata Nilai</th>
              <th className="border px-3 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {prestasi.length > 0 ? (
              prestasi.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className="border text-center">{index + 1}</td>
                  <td className="border px-3 py-2">{item.nama_lengkap}</td>
                  <td className="border px-3 py-2">{item.asal_sekolah}</td>
                  <td className="border px-3 py-2">{item.nik}</td>
                  <td className="border px-3 py-2">{item.nisn}</td>
                  <td className="border px-3 py-2">{item.nilai}</td>
                  <td className="border px-3 py-2 text-center">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
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

export default Dashboard;
