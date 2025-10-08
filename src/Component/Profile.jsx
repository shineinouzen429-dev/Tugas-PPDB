import React from "react";
import gbr from "../../public/Lbinus.jpg"

function Profil() {
  
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Profil Pengguna</h2>

      <div className="bg-white p-6 space-x-6 flex flex-col items-center">
        
        <img
          src={gbr}
          alt=""
          className="w-32 h-32 rounded-full border"
        />

        
        <div className="text-center spa">
          <p className="text-2xl font-bold ">Ayyas Abdullah</p>
          <i class="ri-phone-line"> 08572132837</i>
          <p><i class="ri-mail-line"> shineinouzen429@gmail.com</i></p>
          <i class="ri-home-2-fill"> Krapyak</i>
        </div>
      </div>

      <div className="flex space-x-3">

      <div className="mt-6 bg-gray-200 p-6 rounded-lg  container">
        <h3 className="text-xl font-bold mb-3">Tentang Saya</h3>
        <p className="text-gray-700 leading-relaxed">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, autem cumque?
         Vero voluptatem vel neque sed tempore repellendus error minus. Libero, earum 
         tenetur? Nihil autem omnis ea alias dolorum recusandae.
        </p>
      </div>
      <div className="mt-7 bg-gray-100 p-6 rounded-lg container">
        <h4 className="text-lg font-bold">Info Tambahan</h4>
        <p>Anggrek Mekar Pontianak, Kapal Karam, Bumbu Kacang Khas Kebumen, Lumpur LapinBludo kutuk-blukutuk,
           Puding Pak Hambali, Agar-agar Mas Rehan Usluk-usluk, Agar-agar Khas Grobongan, Kereta Argo Ngawi Ges Gejes,
            Steak Wagyu Impor Aseli Tiongkok, Lato-lato Khas Mojokerto, Kapal Kargo Banyuwangi,
             Buah Khuldi Asli Samarinda, Piscok Lumer Asli Probolinggo, Bandung Lautan Api, Rudal Jawa Siap Hantam Israel
             , Yanto Pasuruan Gempa Bumi, Gendang Klutuk Sunda Taktuktaktuk, Fuad 12 Nyapu di Kebun Raya Bogor,</p>
      </div>
      </div>
    </div>
  );
}

export default Profil;