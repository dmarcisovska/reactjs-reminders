import React from 'react'


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
