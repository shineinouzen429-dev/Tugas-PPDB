import React from 'react'
import Lbinus from '../../public/Lbinus.jpg'
import { Link } from 'react-router-dom'
import Binus1 from "../../public/Binus1.jpg"
import Binus2 from "../../public/Binus2.jpg"
import Binus3 from "../../public/Binus3.jpg"
import Binus4 from "../../public/Binus4.jpg"

function Homepage () {
  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-950 to-blue-950">
      <div className='bg-blue-600 rounded-b-3xl p-4 shadow-lg grid-cols-3 gap-6'>
        <div className='ml-350'>
          <img src={Lbinus} alt="" className='w-15 rounded-full'/>
        </div>
      </div>
      <div className='flex gap-6 scroll-auto'>
      <div className="mt-12 ml-20 bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <img 
          src={Lbinus}
          alt="L" 
          className="mx-auto w-32 h-32 mb-6 rounded-full shadow-lg"
        />

        <h1 className="text-4xl font-bold mb-4">
          Selamat Datang di<br /> SMK Bina Nusantara
        </h1>
        <p className="mb-6 text-lg">Penerimaan Peserta Didik Baru <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum, quidem nisi ipsam molestiae, maiores cum ipsum esse provident dolore molestias tenetur magni repudiandae, in nesciunt? Temporibus nulla expedita labore.</p>

        <Link to="/L">
          <button className="px-6 py-3 bg-white text-indigo-600 ml-25 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition">
            Daftar
          </button>
        </Link>
      </div>
              <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto px-4 w-2/3 mt-10">
              <h1 className='text-5xl font-bold text-center'>Jurusan</h1>
          <div className="p-4 border-4 border-black rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-white">TKJ</h2>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis provident quibusdam et accusamus assumenda, non sint voluptates voluptatibus molestiae temporibus!</p>
          </div>

          <div className="p-4 border-4 border-black rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-white">TSM</h2>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, doloremque atque debitis ipsum esse eius perspiciatis culpa porro veniam voluptatem.</p>
          </div>

          <div className="p-4 border-4 border-black rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-white">AKL</h2>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nam rem tempora nisi incidunt deleniti optio, tempore ullam quod voluptatum.</p>
          </div>

          <div className="p-4 border-4 border-black rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-white">TB</h2>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reprehenderit quibusdam magni excepturi fugiat temporibus numquam non, autem saepe unde?</p>
          </div>  
      </div>
      </div>
      <div>
        <h1 className='text-5xl mt-10 font-bold text-center'>Proyek</h1>
      </div>
      <div className='flex sapce-y gap-5 justify-center mt-10'>
        <img src={Lbinus} alt="" className="w-70 object-cover rounded-3xl"/>
        <img src={Lbinus} alt="" className="w-70 object-cover rounded-3xl"/>
        <img src={Lbinus} alt="" className="w-70 object-cover rounded-3xl"/>
        <img src={Lbinus} alt="" className="w-70 object-cover rounded-3xl"/>
      </div>
      <div>
        <h1 className='text-5xl mt-10 font-bold text-center' id="#pro">Tentang kami</h1>
      </div>
      <div className="py-10 px-10 shadow-md">
          <p className=' bg-gray-400 p-10 rounded-2xl'>SMK Bina Nusantara Semarang adalah sekolah menengah kejuruan swasta yang didirikan pada tahun 2010.
             Sekolah ini berlokasi di Jl. Kemantren I No.5 Rt.02 Rw.4, Kota Semarang, dan memiliki akreditasi B dari Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M).
              SMK Bina Nusantara menawarkan program pendidikan yang sesuai dengan kurikulum 2013 REV. Teknik Komputer dan Jaringan. Sekolah ini memiliki 379 siswa,
               di mana jumlah siswa laki-laki lebih banyak dari perempuan. SMK Bina Nusantara berkomitmen untuk meningkatkan ketrampilan wirausaha dan menyiapkan lulusan
                yang siap mengisi pasar kerja sesuai dengan bidang profesinya</p>
      </div>
      <div className='ml-150'>
        <Link to="/L">
          <button className="px-6 py-3 bg-white text-indigo-600 ml-25 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition">
            Daftar
          </button>
        </Link>
      </div>
      <div>
      
      <div className="flex items-center justify-between bg-gray-300 mt-20 rounded-t-lg shadow-lg">
         <p className="py-4">&copy; Copyright by <span className="font-bold ">Its mee</span>
         </p>
         <div className="social-footer flex items-center sm:gap-7 gap-2">
          <i className="ri-facebook-circle-fill text-2xl"></i>
          <i className="ri-twitter-fill text-2xl"></i>
          <i className="ri-youtube-fill text-2xl"></i>
          <i className="ri-linkedin-box-fill text-2xl"></i>
          <i className="ri-reddit-fill text-2xl"></i>
         </div>
      </div>
      </div>
    </div>
  )
}



export default Homepage;