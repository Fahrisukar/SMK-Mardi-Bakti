import React, { useState, useEffect } from 'react';
import  '../App';
import "./Register.css"

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        religion: '',
        date_of_birth: '',
        address: '',
        no_hp:'',
        jurusan:'',
        email: '',
      });
    
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const dataStr = JSON.stringify(formData);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'register_data.json';
        a.click();
        URL.revokeObjectURL(url);
      };
  return (
    <div className='Background'>
        <section className='Daftar'>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Nama:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <span>Gender:</span>
              <label className="label-container">
                <input
                  type="radio"
                  name="gender"
                  value="Laki-laki"
                  checked={formData.gender === 'Laki-laki'}
                  onChange={handleChange}
                  required

                />
                Laki-laki
              </label>
              <label className="label-container">
                <input
                  type="radio"
                  name="gender"
                  value="Perempuan"
                  checked={formData.gender === 'Perempuan' }
                  onChange={handleChange}
                  required
                />
                Perempuan
              </label>
            </div>
            <div>
              <label>
                Agama:
                <input
                  type="text"
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Tempat, Tanggal Lahir:
                <input
                  type="text"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Alamat Siswa
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                No HP Siswa
                <input
                  type="text"
                  name="no_hp"
                  value={formData.no_hp}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <span>Jurusan:</span>
              <label className="label-container">
                <input
                  type="radio"
                  name="jurusan"
                  value="Akutansi"
                  checked={formData.jurusan === 'Akutansi'}
                  onChange={handleChange}
                  required
                />
                Akutansi
              </label>
              <label className="label-container">
                <input
                  type="radio"
                  name="jurusan"
                  value="Perkantoran"
                  checked={formData.jurusan === 'Perkantoran'}
                  onChange={handleChange}
                  required
                />
                Perkantoran
              </label>
            </div>
            <div>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <button type="submit">Register</button>
          </form>
        </section>
    </div>
  );
};

export default Register;
