import React from 'react'
export default function CryptoCard(props) {
    return (
        <div className='cryptoCard'>
            <div className='cryptoCard--title'>

                <img src={props.icon} />
                <h3>{props.name} </h3>

            </div>
            <p><b>{props.price.toPrecision(7)}</b></p>
        </div>

    )
}