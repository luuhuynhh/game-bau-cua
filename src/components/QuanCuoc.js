import React from 'react'

export default function QuanCuoc() {
    return (
        <div className='mt-3 d-flex' style={{ flexDirection: 'column', alignItems: 'center' }}>
            <img src='./img/bau.png' alt='' style={{ width: 'auto' }} />
            <div className='bg-success py-2 px-4 d-inline-block mt-3' style={{ borderRadius: '.8rem' }}>
                <button className='btn btn-danger' style={{ fontSize: '1.3rem' }}>+</button>
                <span className='text-warning mx-2' style={{ fontSize: '1.5rem', lineHeight: '1.3rem' }}>1000</span>
                <button className='btn btn-danger' style={{ fontSize: '1.3rem' }}>-</button>
            </div>
        </div>
    )
}
