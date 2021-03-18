import { Field, reduxForm, reset } from "redux-form";
import React from "react";
import submit from "../../utils/validators/validators";
import form from "./SearchForm.module.css";
import { Input } from "../FormsControl/FormsControls";
import icon from "../../assets/searchIcon/searchIcon.svg";

const addSearchForm = ({ dirty, handleSubmit, preload }) => {
  return (
    <form onSubmit={dirty ? handleSubmit : handleSubmit(submit)}>
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        disabled={preload}
        style={{
          backgroundImage: `url(${icon})`,
        }}
      >
        {" "}
      </button>
      <Field
        name="textField"
        type="input"
        component={Input}
        label="TextField"
      />
    </form>
  );
};
const afterSubmit = (result, dispatch) => dispatch(reset("searchGif"));

const AddSearchFormRedux = reduxForm({
  form: "searchGif",
  onSubmitSuccess: afterSubmit,
})(addSearchForm);
export default AddSearchFormRedux;
