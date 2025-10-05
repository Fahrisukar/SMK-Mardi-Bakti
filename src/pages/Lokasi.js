import React from 'react';
import '../pages/Lokasi.css'
import  '../App';

const Lokasi = () => {
  return (
    <>
      <div className="locate">
            <p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.659817222966!2d106.86160317355578!3d-6.318224261824616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eda01d68ca1d%3A0x9ee53c0301b2c260!2sSMK%20Mardi%20Bakti!5e1!3m2!1sid!2sid!4v1720444291000!5m2!1sid!2sid"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </p>
            <p className="alamat">
                SMK Mardi Bakti terletak di lokasi yang strategis dan mudah dijangkau,
                tepatnya di Jl. Raya Bogor. Sekolah kami berada di sebelah jalan besar,
                sehingga akses menuju sekolah sangat mudah baik menggunakan kendaraan
                pribadi maupun transportasi umum. Anda dapat melihat peta di sebelah ini
                untuk mendapatkan petunjuk arah menuju SMK Mardi Bakti. Kami juga
                menyediakan informasi mengenai transportasi umum yang dapat digunakan untuk
                mencapai sekolah kami.
            </p>
        </div>

    </>
  );
};

export default Lokasi;
