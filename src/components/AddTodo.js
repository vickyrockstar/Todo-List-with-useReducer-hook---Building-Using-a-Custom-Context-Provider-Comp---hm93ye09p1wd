import React,{useRef} from "react"

const AddTodo = ({ dispatch }) => {
    const inputReference = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        let title = inputReference.current.value;
        if(!title) return;
        let id = Date.now();
        dispatch({type : 'addTodo', obj :{title,id}})
        inputReference.current.value = '';
    }

    return (
        <>
        <form id="todo-form" onSubmit={handleSubmit}>
            <label htmlFor="todo-input">Title</label>
            <input type="text" id="todo-input" ref={inputReference}/>
            <button type="submit">Add To-Do</button>
        </form>
        </>
    )
}

export { AddTodo }