import * as React from "react";

interface iToDo {
    text: string,
    complete: boolean,
}

const ToDo = () => {
    const [item, setItem] = React.useState("");
    const [toDoList, setToDoList] = React.useState<iToDo[]>([]);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addToDo(item);
        setItem("");
    }

    const addToDo = (text: string) => {
        const newToDo: iToDo[] = [...toDoList, {text, complete: false}];
        setToDoList(newToDo);
    }

    const completeToDo = (index: number) => {
        const newToDoList: iToDo[] = toDoList;
        newToDoList[index].complete = !newToDoList[index].complete;
        setToDoList([...newToDoList]);
    }

    const removeToDo = (index: number) => {
        const newToDoList: iToDo[] = toDoList;
        newToDoList.splice(index, 1);
        setToDoList([...newToDoList]);
    }

    return (
        <div className="todo-container">
            <form action="" onSubmit={onSubmit}>
                <label htmlFor="todo-item">
                    <input type="text" id="todo-field" value={item} placeholder="Enter todo list item" onChange={event => setItem(event.target.value)}/>
                </label>
                <button>Add ToDo</button>
            </form>
            <section className="todo-items">
                {
                    toDoList.map((todo: iToDo, index: number) => (
                        <div key={"todo-" + index} id={"todo-" + index} className="todo-item-container">
                            {console.log(todo)}
                            <div style={{ textDecoration: todo.complete ? 'line-through' : '' }} className="todo-item">{todo.text}</div>
                            <button onClick={() => completeToDo(index)}>{todo.complete ? 'Pending': 'Done'}</button>
                            <button onClick={() => removeToDo(index)}>X</button>
                        </div>
                    ))
                }
            </section>
        </div>
    );
}

export default ToDo;