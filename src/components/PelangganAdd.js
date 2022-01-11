import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const PelangganAdd = () => {
    const [nama_pelanggan, setNamaPelanggan] = useState('')
    const [nomor_telepon, setNomorTelepon] = useState('')
    const history = useHistory()

    const savePelanggan = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/api/add_pelanggan', {
            nama_pelanggan: nama_pelanggan,
            nomor_telepon: nomor_telepon
        })
        history.push('/')
    }

    return (
        <div>
            <form onSubmit={savePelanggan}>
                <div className='field'>
                    <label className='label'>Nama Pelanggan</label>
                    <input
                        class="input"
                        type="text"
                        placeholder="Nama Pelanggan"
                        value={nama_pelanggan}
                        onChange={(e) => setNamaPelanggan(e.target.value)}
                    />
                </div>

                <div className='field'>
                    <label className='label'>Nomor Telepon</label>
                    <input
                        class="input"
                        type="text"
                        placeholder="Nomor Telepon"
                        value={nomor_telepon}
                        onChange={(e) => setNomorTelepon(e.target.value)}
                    />
                </div>

                <div className='field'>
                    <button className='button is-primary'>Simpan</button>
                </div>
            </form>

        </div>
    )
}

export default PelangganAdd
