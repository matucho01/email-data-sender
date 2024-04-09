'use client' // This means that the file will be executed on the client side

import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const HomePage = () => {
  const [data, setData] = useState({
    empresa: '',
    programa: '',
    fechaEmision: '',
    fechaVencimiento: '',
    monto: '',
    clase: '',
  });

  const sendEmail = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      alert('¡Email enviado!')
      setData({})
      e.target.reset()
    } else {
      alert('Error al enviar el email')
    }
  }

  return (
    <div className='mt-25 flex flex-col items-center justify-center h-screen bg-slate-900'>
      <h1 className='text-4xl text-white mb-8'>Ingreso de datos</h1>
      <form onSubmit={sendEmail} className='bg-slate-800 p-8 rounded-lg shadow-lg'>
        <label htmlFor='empresa' className='block text-white'>
          Nombre de la empresa
        </label>
        <input
          type='text'
          name='empresa'
          className='block w-full px-3 py-2 rounded-lg bg-slate-700 text-white'
          value={data.empresa}
          onChange={e => setData({ ...data, empresa: e.target.value })}
          placeholder='Nombre de la empresa'
          required
        />
        <br />
        <label htmlFor='programa' className='block text-white'>
          Programa
        </label>
        <input
          type='text'
          name='programa'
          className='block w-full px-3 py-2 rounded-lg bg-slate-700 text-white'
          value={data.programa}
          onChange={e => setData({ ...data, programa: e.target.value })}
          placeholder='Ej.: Primero, Segundo'
          required
        />
        <br />
        <label htmlFor='fechaEmision' className='block text-white'>
          Fecha de emisión
        </label>
        <input
          type='date'
          name='fechaEmision'
          className='block w-full px-3 py-2 rounded-lg bg-slate-700 text-white'
          value={data.fechaEmision}
          onChange={e => setData({ ...data, fechaEmision: e.target.value })}
          required
        />
        <label htmlFor='fechaVencimiento' className='block text-white'>
          Fecha de vencimiento
        </label>
        <input
          type='date'
          name='fechaVencimiento'
          className='block w-full px-3 py-2 rounded-lg bg-slate-700 text-white'
          value={data.fechaVencimiento}
          onChange={e => setData({ ...data, fechaVencimiento: e.target.value })}
          required
        />
        <br />
        <label htmlFor='monto' className='block text-white'>
          Monto
        </label>
        <input
          type='number'
          name='monto'
          className='block w-full px-3 py-2 rounded-lg bg-slate-700 text-white'
          value={data.monto}
          onChange={e => setData({ ...data, monto: e.target.value })}
          placeholder='Ej.: 1000'
          required
        />
        <label htmlFor='clase' className='block text-white'>
          Clase
        </label>
        <input
          type='text'
          name='clase'
          className='block w-full px-3 py-2 rounded-lg bg-slate-700 text-white'
          value={data.clase}
          onChange={e => setData({ ...data, clase: e.target.value })}
          placeholder='Ej.: A, B, C'
          required
        />
        <br />
        <div className='flex justify-center'>
          <button type="submit" className='bg-sky-500 px-10 py-2 rounded-full'>Enviar datos</button>
        </div>
      </form>
      <h1>Hola NIX</h1>
    </div>
  );
}

export default HomePage