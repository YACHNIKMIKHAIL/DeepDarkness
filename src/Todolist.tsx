import React, {KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./Components/Button";
import {Input} from "./Components/Input";


type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist({removeTask, changeFilter, addTask, ...props}: PropsType) {

    const [title, setTitle] = useState('')

    const onChangeHandler = (event: string) => setTitle(event)

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if ((event.key === 'Control') || event.key === 'Enter') {
            addTaskHandler()
        }
    }

    const addTaskHandler = () => {
        addTask(title)
        setTitle('')
    }
    const removeTaskHandler = (id: string) => removeTask(id)

    const onClickAllHandler = () => {
        changeFilter('all')
    }
    const onClickActiveHandler = () => {
        changeFilter('active')
    }
    const onClickComplitedHandler = () => {
        changeFilter("complited")
    }
    const tsarFooHandler = (value: FilterValuesType) => changeFilter(value)


    return <div>
        <h3>{props.title}</h3>
        <div>
            {/*<input value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>*/}
            <Input value={title} changeCallBack={onChangeHandler} pressKeyCallBack={onKeyPressHandler}/>
            <Button name={'add'} callBack={addTaskHandler}/>
        </div>
        <ul>
            {
                props.tasks.map(t => <li>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <Button name={'x'} callBack={() => removeTaskHandler(t.id)}/>
                    {/*<button onClick={() => {props.removeTask(t.id)}}>x</button>*/}
                </li>)
            }
        </ul>
        <div>
            <Button name={'all'} callBack={() => tsarFooHandler('all')}/>
            <Button name={'active'} callBack={() => tsarFooHandler('active')}/>
            <Button name={'complited'} callBack={() => tsarFooHandler('complited')}/>

        </div>
    </div>
}

