'use client' // This means that the file will be executed on the client side

import React, { useState } from 'react'

const HomePage = () => {
  const [data, setData] = useState({
    empresa: '',
    programa: '',
    fechaEmision: '',
    fechaVencimiento: '',
    fechaVencimientoClase: '',
    monto: '',
    clase: '',
    plazo: '',
  })

  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState('')

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true)

    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.status === 200) {
      //alert('¡Email enviado!')
      setFeedback('¡Email enviado!')
      setData({
        empresa: '',
        programa: '',
        fechaEmision: '',
        fechaVencimiento: '',
        fechaVencimientoClase: '',
        monto: '',
        clase: '',
        plazo: '',
      })
      setTimeout(() => {
        setFeedback('')
        setLoading(false)
      }, 3000)
      e.target.reset()
    } else {
      //alert('Error al enviar el email')
      setFeedback('Error al enviar el email')
      setTimeout(() => {
        setFeedback('')
        setLoading(false)
      }, 3000)
    }
  }

  return (
    <div className='mt-25 flex flex-col items-center justify-center h-screen bg-slate-900'>
      <br />
      <br />
      <br />
      <h1 className='text-4xl text-white mb-8'>Nuevo vencimiento</h1>
      <form onSubmit={sendEmail} className='bg-slate-800 p-8 rounded-lg shadow-lg'>
        <div className='flex flex-col sm:flex-row mx-auto'>
          <div className='flex flex-col w-full mb-4 sm:w-1/2 mx-4'>
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
            <label htmlFor='fechaEmision' className='block text-white'>
              Fecha de emisión del programa
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
              Fecha de vencimiento del programa
            </label>
            <input
              type='date'
              name='fechaVencimiento'
              className='block w-full px-3 py-2 rounded-lg bg-slate-700 text-white'
              value={data.fechaVencimiento}
              onChange={e => setData({ ...data, fechaVencimiento: e.target.value })}
              required
            />
          </div>
          <div className='flex flex-col w-full mb-4 sm:w-1/2 mx-4'>
            <label htmlFor='fechaVencimientoClase' className='block text-white'>
              Fecha de vencimiento de la clase
            </label>
            <input
              type='date'
              name='fechaVencimientoClase'
              className='block w-full px-3 py-2 rounded-lg bg-slate-700 text-white'
              value={data.fechaVencimientoClase}
              onChange={e => setData({ ...data, fechaVencimientoClase: e.target.value })}
              required
            />
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
            <label htmlFor='plazo' className='block text-white'>
              Plazo
            </label>
            <input
              type='number'
              name='plazo'
              className='block w-full px-3 py-2 rounded-lg bg-slate-700 text-white'
              value={data.plazo}
              onChange={e => setData({ ...data, plazo: e.target.value })}
              placeholder='Ej.: 30'
              required
            />
          </div>
        </div>
        <br />
        <div className='flex justify-center'>
          {loading ? (
            <p className='text-white'>Enviando correo...</p>
          ) : (
            <button type="submit" className='bg-sky-500 px-10 py-2 rounded-full'>
              Enviar correo
            </button>
          )}
        </div>
        {feedback && <p className='text-white text-center mt-4'>{feedback}</p>}
      </form>
    </div>
  )
}

export default HomePage