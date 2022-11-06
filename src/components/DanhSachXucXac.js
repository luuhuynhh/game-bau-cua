import React from 'react'

export default function DanhSachXucXac() {
    return (
        <div className='bg-white mt-5 ml-5' style={{ height: '300px', width: '300px', borderRadius: '50%' }}>
            <div className='row'>
                <div className='col-12 text-center'>
                    <img style={{ width: '40px', marginTop: '80px' }} src='./img/bau.png' alt='' />
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <img style={{ width: '40px', marginTop: '40px', transform: 'translateX(70px)' }} src='./img/bau.png' alt='' />
                </div>
                <div className='col-6 text-right'>
                    <img style={{ width: '40px', marginTop: '40px', transform: 'translateX(-70px)' }} src='./img/bau.png' alt='' />
                </div>
            </div>
        </div>
    )
}
