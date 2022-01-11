import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PelangganList = () => {
    const [pelanggan, setPelanggan] = useState([])

    useEffect(() => {
        getPelanggan()
    }, [])

    const getPelanggan = async () => {
        const response = await axios.get('http://localhost:5000/api/list_pelanggan')
        setPelanggan(response.data)
    }

    const deletePelanggan = async (id) => {
        await axios.post('http://localhost:5000/api/delete_pelanggan', {
            id_pelanggan: id
        })
        getPelanggan()
    }

    return (
        <div>
            <Link to='/add' className='button is-primary mt-2'>Tambah Baru</Link>
            <table className='table is-stripped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Pelanggan</th>
                        <th>Nomor telepon</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pelanggan.map((pelanggan, index) => (
                            <tr key={pelanggan.id_pelanggan}>
                                <td>{index + 1}</td>
                                <td>{pelanggan.nama_pelanggan}</td>
                                <td>{pelanggan.nomor_telepon}</td>
                                <td>
                                    <Link to={`/edit/${pelanggan.id_pelanggan}`} className='button is-small is-info mr-2'>Edit</Link>
                                    <button onClick={() => deletePelanggan(pelanggan.id_pelanggan)} className='button is-small is-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default PelangganList
