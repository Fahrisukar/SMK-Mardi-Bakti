import "./Home.css"
import 'animate.css/animate.min.css';
import iklan from '../Picture/Ungu Kuning Ilustrasi Pendaftaran Universitas Mahasiswa Baru Poster.png';
import teacher from '../Picture/teacher-icon-linear-isolated-thin-vector-34886781.jpg';
import Book from '../Picture/pngtree-book-icon-outline-style-png-image_5084522.jpg';
import berita from '../Picture/sakds.jpeg';
import collab from '../Picture/kemenpen.png';
import React, { useState, useEffect, useRef } from 'react';
  

  

  // animasi scroll
  

function Home() {
  const [isContainereVisible, setIsContainereVisible] = useState(false);
  const [isPararelVisible, setIsPararelVisible] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const containereRef = useRef();
  const pararelRef = useRef();
  const infoRef = useRef();

  // containere
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContainereVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Elemen terlihat saat 10% dari elemen muncul di viewport
      }
    );

    if (containereRef.current) {
      observer.observe(containereRef.current);
    }

    return () => {
      if (containereRef.current) {
        observer.unobserve(containereRef.current);
      }
    };
  }, []);

  // pararel
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPararelVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Elemen terlihat saat 10% dari elemen muncul di viewport
      }
    );

    if (pararelRef.current) {
      observer.observe(pararelRef.current);
    }

    return () => {
      if (pararelRef.current) {
        observer.unobserve(pararelRef.current);
      }
    };
  }, []);

  // information
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInfoVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Elemen terlihat saat 10% dari elemen muncul di viewport
      }
    );

    if (infoRef.current) {
      observer.observe(infoRef.current);
    }

    return () => {
      if (infoRef.current) {
        observer.unobserve(infoRef.current);
      }
    };
  }, []);


  return (
    <div>  
      
      

      

      <section className="Hero">
        <div className="Isi">
          <div className="Awal">
            <h2>SMK Mardi Bakti</h2>
            <h2>Membangun Generasi Unggul dan Berkarakter</h2>
          </div>
        </div>
      </section>

      <section className="jurusan-container">
      <div className="our-course-categories-two">
          <div className="container">
            <div className="categories_wrap">
              <ul className="unorderList">
              <li>
                  {/* single-course-categories */}
                  <div className="categories-course">
                    <div className="item-inner">
                      <div className="cours-icon">
                        <span className="coure-icon-inner">
                          <img src={teacher} alt="Teacher Icon" />
                        </span>
                      </div>
                      <div className="cours-title">
                        <h4>Guru Profesional</h4>
                        <p className='card-name-252ds'>
                          Sekolah kami memiliki guru profesional berpengalaman yang
                          menggunakan metode inovatif, personal, dan interaktif untuk
                          memotivasi siswa mencapai potensi terbaik.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*// single-course-categories */}
                </li>
                <li>
                  {/* single-course-categories */}
                  <div className="categories-course">
                    <div className="item-inner">
                      <div className="cours-icon">
                        <span className="coure-icon-inner">
                          <img src={Book} alt="Book Icon" />
                        </span>
                      </div>
                      <div className="cours-title">
                        <h4>Mutu Pendidikan</h4>
                        <p>
                          Kami menjaga mutu pendidikan dengan kurikulum terstruktur,
                          evaluasi berkelanjutan, dan fasilitas lengkap untuk membangun
                          keterampilan yang esensial dalam kehidupan sehari-hari siswa
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*// single-course-categories */}
                </li>
                <li>
                  {/* single-course-categories */}
                  <div className="categories-course">
                    <div className="item-inner">
                      <div className="cours-icon">
                        <span className="coure-icon-inner">
                          <img src={Book} alt="Support Icon" />
                        </span>
                      </div>
                      <div className="cours-title">
                        <h4>Teknik Jaringan</h4>
                        <p>
                          Sekolah kami menyediakan internet cepat dan stabil di seluruh area sekolah
                          mendukung e-learning dengan kebijakan keamanan digital untuk
                          penggunaan teknologi yang aman.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*// single-course-categories */}
                </li>
                <li>
                  {/* single-course-categories */}
                  <div className="categories-course">
                    <div className="item-inner">
                      <div className="cours-icon">
                        <span className="coure-icon-inner">
                          <img src={Book} alt="Teacher Icon" />
                        </span>
                      </div>
                      <div className="cours-title">
                        <h4>Guru Profesional</h4>
                        <p className='card-name-252ds'>
                          Sekolah kami memiliki guru profesional berpengalaman yang
                          menggunakan metode inovatif, personal, dan interaktif untuk
                          memotivasi siswa mencapai potensi terbaik.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*// single-course-categories */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="About">
        <div className="Jaft">
        <div ref={containereRef} id='containere' className={`animate__animated ${isContainereVisible ? 'animate__lightSpeedInLeft' : ''}`}>
        <p className="Yu">
              SMK Mardi Bakti mengemban amanah membentuk generasi siap kerja dan
              inovatif dengan kurikulum terpadu, fasilitas modern, dan kerjasama
              industri. Didukung oleh tenaga pendidik berpengalaman dan pendekatan
              pembelajaran proyek digital, kami menciptakan lulusan yang siap kerja
              dan inovatif.
            </p>
            <h3 style={{ textAlign: "left" }}>Dwi Karwati</h3>
            <p className="Tu">Kepala Sekolah</p>
            {/* <div class="go"><a>Selengkapnya</a></div>         */}
          </div>
        </div>
      </section>
      <section className="Motivasi">
        <div className="Disini">
          <div ref={pararelRef} id='pararel' className={`animate__animated ${isPararelVisible ? 'animate__lightSpeedInRight' : ''}`}>
            <h1>
              Siapa bilang hanya sekolah terkenal yang bisa memberi pengalaman
              terbaik? Dapatkan beasiswa, tinggal di ruang kelas yang nyaman,
              fasilitas lengkap, kurikulum berkualitas, dan berteman dengan
              talenta-talenta luar biasa dari di sekolah kami.
            </h1>
          </div>
        </div>
      </section>
      <section className="News">
        <h2>Berita dan Pengumuman</h2>
        <div className="Formasi">
          <div id='Information' ref={infoRef} className={`animate__animated ${isInfoVisible ? 'animate__fadeIn' : ''}`}>
            <img src={berita} alt='sekolah'/>
            <p>Berikut adalah jadwal kegiatan sekolah selama bulan juli.....</p>
          </div>
          <div id='Information' ref={infoRef} className={`animate__animated ${isInfoVisible ? 'animate__fadeIn' : ''}`}>
            <img src={berita} alt='sekolah'/>
            <p>Kami bangga mengumumkan bahwa siswa kami telah </p>
          </div>
          <div id='Information' ref={infoRef} className={`animate__animated ${isInfoVisible ? 'animate__fadeIn' : ''}`}>
            <img src={berita} alt='sekolah'/>
            <p>Berikut adalah jadwal kegiatan sekolah selama bulan juli.....</p>
          </div>
          <div id='Information'ref={infoRef} className={`animate__animated ${isInfoVisible ? 'animate__fadeIn' : ''}`}>
            <img src={berita} alt='sekolah'/>
            <p>Kami bangga mengumumkan bahwa siswa kami telah </p>
          </div>
        </div>
      </section>
      <section className="gallery">
        <div className="containera">
          <h2 style={{ fontFamily: "cursive" }}>PARTNERS</h2>
          <div className="gallery-images">
            <img src={collab} alt='patner'/>
            
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          {/* Informasi Kontak */}
          <div className="contact-info">
            <h3>Alamat</h3>
            <p>
              SMK Mardi Bakti MVJ7+PM3, Jl. Raya Jakarta-Bogor, RT.5/RW.6, Cijantung,
              Kec. Ps. Rebo, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13770
            </p>
            <p>Telepon: (021) 123-4567</p>
            <p>Email: info@sekolahku.edu</p>
        </div>
        {/* Tautan Cepat */}
        <div className="quick-links">
            <h3>Tautan Cepat</h3>
            <ul>
              <li>
                <a href="/about">Visi Misi</a>
              </li>
              <li>
                <a href="/curriculum">Kurikulum</a>
              </li>
              <li>
                <a href="Header/Lokasi.html">Lokasi</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
        </div>
          {/* Media Sosial */}
          <div className="Home-Icon">
            <h3>Ikuti Kami</h3>
            <a href="/" title="Icon" className="Facebook">
              <i className="fa-brands fa-facebook icon" />
            </a>
            <a href="/" title="Icon" className="Youtube">
              <i className="fa-brands fa-youtube icon" />
            </a>
            <a href="/" title="Icon" className="Twitter">
              <i className="fa-brands fa-x-twitter icon" />
            </a>
            <a href="/" title="Icon" className="Instagram">
              <i className="fa-brands fa-instagram icon" />
            </a>
            <a href="/" title="Icon" className="Tiktok">
              <i className="fa-brands fa-tiktok icon" />
            </a>
          </div>
          {/* Informasi Legal */}
          <div className="legal">
            <h3>Informasi Legal</h3>
            <ul>
              <li>
                <a href="/privacy-policy">Kebijakan Privasi</a>
              </li>
              <li>
                <a href="/terms-conditions">Syarat dan Ketentuan</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 SMK Mardi Bakti.</p>
        </div>
      </footer>

    </div>
  );
}

export default Home;

