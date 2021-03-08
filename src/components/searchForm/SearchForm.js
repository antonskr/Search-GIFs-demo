import submit from "../../utils/validators/validators";
import s from "../mainPage/mainPage.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormsControl/FormsControls";
import React from "react";

const addSearchForm = (props) => {
    debugger
    return (
        <form onSubmit={props.dirty ? props.handleSubmit : props.handleSubmit(submit)}>
            <div className={s.form}>
                <Field name="textField" placeholder={props.values} type="input" component={Input} label="TextField"/>
                <button disabled={props.preload}> поиск</button>
            </div>
        </form>
    )
}
export const AddSearchFormRedux = reduxForm(
    {form: 'searchGif'})(addSearchForm)