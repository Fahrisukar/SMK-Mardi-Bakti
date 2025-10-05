// src/components/Header.js
import React from "react";
import '../component/Header.css'
import logo from '../Picture/smkmardibakti.png';

//navbar 
    // Fungsi untuk menampilkan sidebar
    const showsidebar = () => {
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) {
        sidebar.style.display = 'flex';
      } else {
        console.error('Sidebar not found');
      }
    };
  
    // Fungsi untuk menyembunyikan sidebar
    const hidesidebar = () => {
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) {
        sidebar.style.display = 'none';
      } else {
        console.error('Sidebar not found');
      }
    };

const Header = () => {
  return (
    <header>
        <div className="container">
          <div className="logo">
            <img
              src={logo}
              alt="logo"
              className="clickable"
              onClick={() => (window.location.href = '/')}
            />
            <h1 className="clickable" onClick={() => (window.location.href = '/')}>
              SMK MARDI BAKTI
            </h1>
            <nav>
              <ul className="sidebar">
                <li className="apa" onClick={hidesidebar}>
                  <a className="yo" href="#" title="Close">
                    <i className="fa-solid fa-xmark saleh" />
                  </a>
                </li>
                <li>
                  <a href="/">Beranda</a>
                </li>
                <li className="dropdown">
                  <a>Tentang</a>
                  <ul className="isi-dropdown">
                    <li>
                      <a href='Header/sejarah.html'>Sejarah</a>
                    </li>
                    <li>
                      <a href="/VisiMisi">Visi & Misi</a>
                    </li>
                    <li>
                      <a href="">Profil Guru</a>
                    </li>
                    <li>
                      <a href="">Fasilitas</a>
                    </li>
                    <li>
                      <a href="/lokasi">Lokasi</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">Program Kejuruan</a>
                </li>
                <li>
                  <a href="Fasilitas.html">Fasilitas</a>
                </li>
                <li>
                  <a href="Contact.html">Berita</a>
                </li>
              </ul>
              <ul>
                <li id="hideonmobile">
                  <a href="/">Beranda</a>
                </li>
                <li id="hideonmobile" className="dropdown">
                  <a>Tentang</a>
                  <ul className="isi-dropdown">
                    <li>
                      <a href="Sejarah.html">Sejarah</a>
                    </li>
                    <li>
                      <a href="/VisiMisi">Visi & Misi</a>
                    </li>
                    <li>
                      <a href="/Profilguru">Profil Guru</a>
                    </li>
                    <li>
                      <a href="Fasilitas.html">Fasilitas</a>
                    </li>
                    <li>
                      <a href="/lokasi">Lokasi</a>
                    </li>
                  </ul>
                </li>
                <li id="hideonmobile" className="dropdown">
                  <a href="#">Akademik</a>
                  <ul className="isi-dropdown">
                    <li>
                      <a href="Sejarah.html">Kurikulum</a>
                    </li>
                    <li>
                      <a href="Visi&Misi.html">Program Studi</a>
                    </li>
                    <li>
                      <a href="">Prestasi</a>
                    </li>
                    <li>
                      <a href="">Jurusan</a>
                    </li>
                  </ul>
                </li>

                <li id="hideonmobile">
                  <a href="Contact.html">Berita</a>
                </li>
                <li className="menu" onClick={showsidebar}>
                  <a href="#" title="Bar">
                    <i className="fa-solid fa-bars" />
                  </a>
                </li>
              </ul>
            </nav>
            <button className="Tombol">
              <a href="/Register" title="Form">Daftar</a>
            </button>
          </div>
        </div>
      </header>
  );
};

export default Header;
