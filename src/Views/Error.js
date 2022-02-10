import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div>
            <p>
                Hubo un incombeniente , Por Favor Dirigite a nuestro <Link to="/">Inicio
                </Link>
            </p>
        </div>
    )
}
