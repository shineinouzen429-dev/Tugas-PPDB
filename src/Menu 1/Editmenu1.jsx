import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Editmenu1() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nama_lengkap: "",
        asal_sekolah: "",
        nik: "",
        nisn:"",
        nilai:""
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/prestasi/${id}`);
            const data = Array.isArray(res.data) ? res.data[0]
            : res.data;
            setFormData(data)
        } catch (err) {
            console.error("Gagal mengambil data:", err);
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Gagal mengambil data,tutor deckk",
          });
        } finally {
            setLoading(false);
        }
    }

        fetchData();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    };

 const handleSubmit = async (e) => {
  e.preventDefault();

  Swal.fire({
    title: "Yakin mau di save🤨",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then(async (result) => {  
    if (result.isConfirmed) {
      try {
        await axios.put(`http://localhost:5000/prestasi/${id}`, formData);

        Swal.fire("Saved!", "", "success");
        navigate("/M1");
      } catch (err) {
        console.error("Gagal mengupdate data:", err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Gagal update cupu deck deck",
        });
      }
    }
  });
};


    if (loading) return <p className="text-center mt-10">Loading data</p>
    
    return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen"
     style={{
            backgroundImage:
              "url(https://i.pinimg.com/736x/4a/ee/99/4aee997b576e195fc60b4c06e640dcdf.jpg)",
          }}>
     <div className="container mx-auto p-4 max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
            Edit Data
        </h1>
        <form onSubmit={handleSubmit} className="shadow-md rounded-lg p-6"
       >
             <div className="mb-4">
                <label htmlFor="nama_lengkap" className="block text-sm font-bold mb-2">Nama lengkap: </label>
                <input
                className="border-0 border-b-2 border-black focus:border-black focus:outline-none w-full py-2 px-0 leading-tight"
                  id="nama_lengkap"
                  name="nama_lengkap"
                  type="text"
                  value={formData.nama_lengkap}
                  onChange={handleChange}
                />
               </div>
              <div className="mb-4">
                <label htmlFor="asal_sekolah" className="block text-sm font-bold mb-2">Asal sekolah: </label>
                <input
                className="border-0 border-b-2 border-black focus:border-black focus:outline-none w-full py-2 px-0 leading-tight"
                  id="asal_sekolah"
                  name="asal_sekolah"
                  type="text"
                  value={formData.asal_sekolah}
                  onChange={handleChange}
                />
               </div>
              <div className="mb-4">
                <label htmlFor="nik" className="block text-sm font-bold mb-2">NIK: </label>
                <input
                className="border-0 border-b-2 border-black focus:border-black focus:outline-none w-full py-2 px-0 leading-tight"
                  id="nik"
                  name="nik"
                  type="text"
                  value={formData.nik}
                  onChange={handleChange}
                />
             </div>
              <div className="mb-4">
                <label htmlFor="nisn" className="block text-sm font-bold mb-2">NISN: </label>
                <input
                className="border-0 border-b-2 border-black focus:border-black focus:outline-none w-full py-2 px-0 leading-tight"
                  id="nisn"
                  name="nisn"
                  type="text"
                  value={formData.nisn}
                  onChange={handleChange}
                />
             </div>
              <div className="mb-4">
                <label htmlFor="nilai" className="block text-sm font-bold mb-2">Rata-rata: </label>
                <input
                className="border-0 border-b-2 border-black focus:border-black focus:outline-none w-full py-2 px-0 leading-tight"
                  id="nilai"
                  name="nilai"
                  type="text"
                  value={formData.nilai}
                  onChange={handleChange}
                />
             </div>
            <div className="flex items-center justify-between">
                <button 
                type="submit"
                className="bg-green-500 hover:bg-green-950 text-white
                font-bold py-2 px-4 rounded"
                >
                    Update data
                </button>
                <button 
                type="button"
                onClick={() => navigate(-1)}
                className="bg-gray-500 hover:bg-gray-700 text-white
                font-bold py-2 px-4 rounded"
                >
                    Kembali 
                </button>
            </div>
        </form>
     </div>
     </div>
    )
}


export default Editmenu1