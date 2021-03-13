import { Field, reduxForm } from "redux-form";
import React from "react";
import submit from "../../utils/validators/validators";
import s from "../mainPage/mainPage.module.css";
import { Input } from "../FormsControl/FormsControls";

const addSearchForm = ({ dirty, handleSubmit, preload }) => {
  return (
    <div>
      <form
        className={s.searchFormBlock}
        onSubmit={dirty ? handleSubmit : handleSubmit(submit)}
      >
        <Field
          name="textField"
          type="input"
          component={Input}
          label="TextField"
        />
        {/* eslint-disable-next-line react/button-has-type */}
        <button className={s.searchFormBtn} disabled={preload}>
          {" "}
          поиск
        </button>
      </form>
    </div>
  );
};
const AddSearchFormRedux = reduxForm({ form: "searchGif" })(addSearchForm);
export default AddSearchFormRedux;
