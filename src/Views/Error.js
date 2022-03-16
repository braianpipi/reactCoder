import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div className='container'>
            <p>
                Hubo un problema, Por Favor Dirigite a nuestro <Link to="/">Inicio
                </Link>
            </p>
        </div>
    )
}
