import React from 'react'

export default function DiemCuoc() {
    return (
        <div>
            <h3 className='text-center display-4' style={{ color: 'green', marginTop: '0px' }}>Game Bầu Cua YLU</h3>
            <div className='text-center'>
                <span style={{ fontSize: '1.3rem', borderRadius: '.3rem' }} className="p-3 text-white bg-danger mt-1 d-inline-block">Tiền thưởng: <span className='text-warning'>100$</span></span>
            </div>
            <div className='text-center'>
                <button style={{ fontSize: '1.1rem', borderRadius: '.3rem', border: 'none', cursor: 'pointer' }} className="px-3 py-2 text-white bg-success mt-3 d-inline-block">Chơi lại</button>
            </div>
        </div>
    )
}
