import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    value: string
    changeCallBack: (event: string) => void
    pressKeyCallBack: (event: KeyboardEvent<HTMLInputElement>) => void

}

export const Input = ({pressKeyCallBack, changeCallBack, ...props}: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => changeCallBack(e.currentTarget.value)
    const onPressHandler = (event: KeyboardEvent<HTMLInputElement>) => pressKeyCallBack(event)

    return (
        <input value={props.value}
               onChange={onChangeHandler}
               onKeyPress={onPressHandler}/>
    )
}