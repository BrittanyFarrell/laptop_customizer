import React from 'react'

export default function Customize(props) {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {props.features}
        </form>
    )
}