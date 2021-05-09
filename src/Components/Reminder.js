import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

const Reminder = ({tasks}) => {
    return (
        <>
            {tasks.map((task)=> {
                const {id, name, priority} = task;
                return (
                    <>
                        <p key={id} className="mb-3">{name} <span className="badge bg-light text-dark"> {priority}</span></p>
                    </>
                )
            })}
        </>
    )
}

export default Reminder
