import React from 'react';
const Todo = ({title,dispatch,id}) => {
    return (
        <div className='todo'>
            <div className="tdo-title">{title}</div>
            <button className='todo-delete' onClick={() =>
            {dispatch({type:'delTodo',id})}}>Remove</button>
        </div>
    )
}


export { Todo }

