import React from 'react'

function Layaut({children, className}) {
    return (
        <div className={`row py-3 mx-auto ${className}`}>
            <div className={'col-sm-1 col-md-1 col-lg-2 col-xl-2'}/>
            <div className={'col-sm-10 col-md-10 col-lg-8 col-xl-8 mt-4'}>
                {children}
            </div>
            <div className={'col-sm-1 col-md-1 col-lg-2 col-xl-2'}/>
        </div>
    )
}

export default Layaut
