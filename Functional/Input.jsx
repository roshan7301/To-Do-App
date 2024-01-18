import React, { useEffect, useState } from 'react'

export default function Input(props) {
    console.log(props);

    let [todos, setTodos] = useState('');
    let [error, setError] = useState(false)

    const changeInput = (event) => {
        setTodos(event.target.value);
        if (event.target.value.length > 0) {
            setError(false)
        } else {
            setError(true)
        }
    }


    const submit = (event) => {
        event.preventDefault()

        if (todos.length > 0) {
            if (props.editData.index !== '') {
                props.updateTodos(props.editData.index, todos)
            } else {
                props.addTodos(todos);

            }
        } else {
            setError(true)
        }

        setTodos("")
    }

    useEffect(() => {
        setTodos(props.editData.data)
    }, [props.editData.data])



    return ( 
        <div>
            <form className="row g-3" onSubmit={submit}>
                <div className="col-10">
                    <input type="text"
                        className="form-control"
                        placeholder="Enter Todos"
                        value={todos}
                        onChange={changeInput} />
                    {
                        error && <p className='text-danger'>Please Enter todos!</p>
                    }


                </div>
                <div className="col-2">
                    <button type="submit" className="btn btn-primary mb-3">
                        {
                            props.editData.index === '' ? "Add" : "Update"
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}
