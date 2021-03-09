import submit from "../../utils/validators/validators";
import s from "../mainPage/mainPage.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormsControl/FormsControls";
import React from "react";

const addSearchForm = (props) => {

    return (
        <div>
            <form className={s.searchFormBlock}
                  onSubmit={props.dirty ? props.handleSubmit : props.handleSubmit(submit)}>
                <Field name="textField" type="input" component={Input} label="TextField"/>
                <button className={s.searchFormBtn} disabled={props.preload}> поиск</button>
            </form>
        </div>
    )
}
export const AddSearchFormRedux = reduxForm(
    {form: 'searchGif'})(addSearchForm)