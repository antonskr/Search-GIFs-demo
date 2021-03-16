import { Field, reduxForm, reset } from "redux-form";
import React from "react";
import submit from "../../utils/validators/validators";
import form from "./SearchForm.module.css";
import { Input } from "../FormsControl/FormsControls";

const addSearchForm = ({
  dirty,
  handleSubmit,
  preload,
  updateTotalCount,
  isActive,
}) => {
  return (
    <div>
      <form onSubmit={dirty ? handleSubmit : handleSubmit(submit)}>
        <Field
          name="textField"
          type="input"
          component={Input}
          label="TextField"
        />
        {/* eslint-disable-next-line react/button-has-type */}
        <button disabled={preload}>поиск</button>
        <button
          type="button"
          className={form.showMoreBtn}
          hidden={isActive}
          onClick={updateTotalCount}
        >
          Показать ещё
        </button>
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
