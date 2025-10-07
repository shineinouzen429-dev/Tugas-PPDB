import React, { useEffect, useState } from "react";
import Sidnav from "./Sidnav";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [jumlahPrestasi, setJumlahPrestasi] = useState(0);
  const [jumlahZonasi, setJumlahZonasi] = useState(0);
  const [jumlahAfirmasi, setJumlahAfirmasi] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [resPrestasi, resZonasi, resAfirmasi] = await Promise.all([
          axios.get("http://localhost:5000/prestasi"),
          axios.get("http://localhost:5000/zonasi"),
          axios.get("http://localhost:5000/afirmasi"),
        ]);

        setJumlahPrestasi(resPrestasi.data.length);
        setJumlahZonasi(resZonasi.data.length);
        setJumlahAfirmasi(resAfirmasi.data.length);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  return (
    <div
      className="flex"
    >
      <Sidnav />
      <div className="flex-1 p-6 ml-60">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          DASHBOARD
        </h1>

        {loading ? (
          <p className="text-center mt-10">Loading...</p>
        ) : (
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="p-4 shadow rounded text-center">
              <h2>Jalur Prestasi</h2>
              <p className="text-green-600 text-2xl font-bold">
                {jumlahPrestasi}
              </p>
            </div>
            <div className="p-4 shadow rounded text-center">
              <h2>Jalur Zonasi</h2>
              <p className="text-blue-600 text-2xl font-bold">{jumlahZonasi}</p>
            </div>
            <div className="p-4 shadow rounded text-center">
              <h2>Jalur Afirmasi</h2>
              <p className="text-yellow-500 text-2xl font-bold">
                {jumlahAfirmasi}
              </p>
            </div>
            <div className="p-4 shadow rounded text-center">
              <h1 className="text-2xl text-green-600 font-bold">
                Jalur Prestasi
              </h1>
              <p className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                quis consequatur porro eos deleniti mollitia!
              </p>
              <button
                onClick={() => navigate("/TambahM1")}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow mt-20"
              >
                Daftar
              </button>
            </div>
            <div className="p-4 shadow rounded text-center">
              <h1 className="text-2xl text-blue-600 font-bold">Jalur Zonasi</h1>
              <p className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                quis consequatur porro eos deleniti mollitia!
              </p>
              <button
                onClick={() => navigate("/TambahM2")}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow mt-20"
              >
                Daftar
              </button>
            </div>
            <div className="p-4 shadow rounded text-center">
              <h1 className="text-2xl text-yellow-500 font-bold">
                Jalur Afirmasi
              </h1>
              <p className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                quis consequatur porro eos deleniti mollitia!
              </p>
              <button
                onClick={() => navigate("/TambahM3")}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow mt-20"
              >
                Daftar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
