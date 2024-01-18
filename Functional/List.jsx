import React from 'react'

export default function List(props) {

    return (
        <div>
            {/* <ul className="list-group">
            {
            props.todos.length > 0 ? props.todos.map((value, index, arr) => (
                 <li className="list-group-item" key={index}>{value}</li>
            )):<li className="list-group-item">No todos</li>
            }
            
            </ul> */}



            <ul className="list-group">
                {
                    props.todos.length > 0 ? props.todos.map((value, index, arr) => {
                        return <li className="list-group-item d-flex justify-content-between" key={index}><div>{value}</div>
                            <div>
                                <button
                                    className='btn btn-warning mx-2'
                                    onClick={() => props.editTodos(index, value)}>Edit</button>
                                <button
                                    className='btn btn-danger'
                                    onClick={() => props.deleteTodos(value)}>Delete</button>
                            </div>
                        </li>
                    }) : <li className="list-group-item">No todos</li>
                }

            </ul>

        </div>
    )
}
