import React from "react";
import gbr from "../../public/Lbinus.jpg"

function Profil() {
  
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Profil Pengguna</h2>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
        
        <img
          src={gbr}
          alt=""
          className="w-32 h-32 rounded-full border"
        />

        
        <div>
          <p className="text-2xl font-bold">Ayyas Abdullah</p>
          <p className="text-gray-600">Mahasiswa</p>
          <p className="text-gray-600">ayyas@example.com</p>
          <p className="text-gray-600">Korsel utara</p>
        </div>
      </div>

      
      <div className="mt-6 bg-gray-200 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Tentang Saya</h3>
        <p className="text-gray-700 leading-relaxed">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, autem cumque?
         Vero voluptatem vel neque sed tempore repellendus error minus. Libero, earum 
         tenetur? Nihil autem omnis ea alias dolorum recusandae.
        </p>
      </div>
      <div className="mt-7 bg-gray-100 p-6 rounded-lg">
        <h4 className="text-lg font-bold">Info Tambahan</h4>
        <p>Anggrek Mekar Pontianak, Kapal Karam, Bumbu Kacang Khas Kebumen, Lumpur LapinBludo kutuk-blukutuk,
           Puding Pak Hambali, Agar-agar Mas Rehan Usluk-usluk, Agar-agar Khas Grobongan, Kereta Argo Ngawi Ges Gejes,
            Steak Wagyu Impor Aseli Tiongkok, Lato-lato Khas Mojokerto, Kapal Kargo Banyuwangi,
             Buah Khuldi Asli Samarinda, Piscok Lumer Asli Probolinggo, Bandung Lautan Api, Rudal Jawa Siap Hantam Israel
             , Yanto Pasuruan Gempa Bumi, Gendang Klutuk Sunda Taktuktaktuk, Fuad 12 Nyapu di Kebun Raya Bogor,</p>
      </div>
    </div>
  );
}

export default Profil;
