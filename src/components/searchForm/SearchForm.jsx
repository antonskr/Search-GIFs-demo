import { Field, reduxForm, reset } from "redux-form";
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
        <button disabled={preload}> поиск</button>
      </form>
    </div>
  );
};
const afterSubmit = (result, dispatch) => dispatch(reset("searchGif"));

const AddSearchFormRedux = reduxForm({
  form: "searchGif",
  onSubmitSuccess: afterSubmit,
})(addSearchForm);
export default AddSearchFormRedux;
