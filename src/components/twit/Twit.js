import React from 'react'

const Twit = (props) => (
    <div className = 'twit'>
        <span className="name">{props.name}</span>
        <br/>
        <span>{props.post}</span>
        <br/>
        <div className="date">
            <span>{new Date(props.date).getHours()}</span>:
            <span>{new Date(props.date).getMinutes()}</span>
            <span>{new Date(props.date).getDate()}</span>.
            <span>{new Date(props.date).getMonth()}</span>
        </div>

    </div>
)


export default Twit;