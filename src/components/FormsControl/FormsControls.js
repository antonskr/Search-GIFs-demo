import React from 'react'
import s from './FormsControls.module.css'

export const FormControl = ({input, meta, child, element, ...props}) => {
 const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span> {meta.error} </span>}
        </div>
    )
}
export const Input = (props) => {
    const {input, meta, child, element, ...restProps} = props
    return (<FormControl {...props}> <input {...input} {...restProps}/> </FormControl>)
}