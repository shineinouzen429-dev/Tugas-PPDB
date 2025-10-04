import React from 'react'
import { Link } from 'react-router-dom'

export const Fanservice = () => {
  return (
    <div className='h-screen items-center justify-center flex bg-cover bg-center bg-no-repeat'
     style={{ backgroundImage: "url('https://i.pinimg.com/736x/42/79/95/427995f59934e5d8a22b6be59d4bcfb1.jpg')" }} >
      <div className='bg-black p-8 rounded-lg shadow-md w-full max-w-sm justify-center items-center'>
        <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque hic molestiae
           consequuntur eum a accusantium ipsum amet dolores voluptas dolore. Repellendus
            impedit ducimus molestias consequuntur, dolorem quas non obcaecati, deserunt
             sapiente magni unde aspernatur praesentium accusamus accusantium amet tempora.
              Inventore illo atque, ipsam corrupti laudantium itaque delectus, vel sapiente,
               fugiat repudiandae dignissimos dolorem necessitatibus mollitia temporibus
                numquam possimus soluta non tenetur qui voluptas. Totam veniam eveniet impedit
                 quisquam minus debitis?
        </p>
           <Link to="/L">
          <button className="px-30 py-4 bg-orange-400 ml-5 mt-5 font-semibold rounded-xl shadow-lg hover:bg-orange-700">
            Lanjut?
          </button>
        </Link>
       
          <button className="px-6 py-3 text-white ml-27 font-semibold rounded-xl shadow-lg transition hover:text-gray-300">
            <a href="/">Kembali</a>
          </button>
       

      </div>
    </div>
  )
}

export default Fanservice
