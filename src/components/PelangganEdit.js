import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

const PelangganEdit = () => {
    const [nama_pelanggan, setNamaPelanggan] = useState('')
    const [nomor_telepon, setNomorTelepon] = useState('')
    const history = useHistory()
    const { id } = useParams()

    useEffect(() => {
        getPelangganById()
    }, [])

    const updatePelanggan = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:5000/api/edit_pelanggan`, {
            id_pelanggan: id,
            nama_pelanggan: nama_pelanggan,
            nomor_telepon: nomor_telepon
        })
        history.push('/')
    }

    const getPelangganById = async () => {
        const response = await axios.get(`http://localhost:5000/api/data_pelanggan/${id}`)
        setNamaPelanggan(response.data.nama_pelanggan)
        setNomorTelepon(response.data.nomor_telepon)
    }


    return (
        <div>
            <form onSubmit={updatePelanggan}>
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
                    <button className='button is-primary'>Update</button>
                </div>
            </form>

        </div>
    )
}

export default PelangganEdit
