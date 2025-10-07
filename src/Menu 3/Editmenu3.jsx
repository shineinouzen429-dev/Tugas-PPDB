import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Editmenu3() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nama_lengkap: "",
        keterangan_afirmasi: "",
        bukti_dokumen: "",
        nisn:"",
        nilai:""
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/afirmasi/${id}`);
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
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then(async (result) => {  
    if (result.isConfirmed) {
      try {
        await axios.put(`http://localhost:5000/afirmasi/${id}`, formData);

        Swal.fire("Saved!", "", "success");
        navigate("/M3");
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
     <div className="container mx-auto p-4 max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
            Edit Data
        </h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
             <div className="mb-4">
                <label htmlFor="nama_lengkap">nama_lengkap: </label>
                <input
                  id="nama_lengkap"
                  name="nama_lengkap"
                  type="text"
                  value={formData.nama_lengkap}
                  onChange={handleChange}
                />
               </div>
              <div className="mb-4">
                <label htmlFor="keterangan_afirmasi">keterangan_afirmasi: </label>
                <input
                  id="keterangan_afirmasi"
                  name="keterangan_afirmasi"
                  type="text"
                  value={formData.keterangan_afirmasi}
                  onChange={handleChange}
                />
               </div>
              <div className="mb-4">
                <label htmlFor="bukti_dokumen">bukti_dokumen: </label>
                <input
                  id="bukti_dokumen"
                  name="bukti_dokumen"
                  type="text"
                  value={formData.bukti_dokumen}
                  onChange={handleChange}
                />
             </div>
              <div className="mb-4">
                <label htmlFor="nisn">nisn: </label>
                <input
                  id="nisn"
                  name="nisn"
                  type="text"
                  value={formData.nisn}
                  onChange={handleChange}
                />
             </div>
              <div className="mb-4">
                <label htmlFor="nilai">nilai: </label>
                <input
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
    )
}


export default Editmenu3