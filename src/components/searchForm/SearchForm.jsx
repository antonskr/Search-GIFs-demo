import { Field, reduxForm, reset } from "redux-form";
import React from "react";
import { useSelector } from "react-redux";
import submit from "../../utils/validators/validators";
import form from "./SearchForm.module.css";
import { Input } from "../FormsControl/FormsControls";
import icon from "../../assets/searchIcon/searchIcon.svg";

const AddSearchForm = ({ dirty, handleSubmit }) => {
  const error = useSelector((state) => state.mainPage.error);
  return (
    <form onSubmit={dirty ? handleSubmit : handleSubmit(submit)}>
      {/* eslint-disable-next-line react/button-has-type */}
      <button
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
        placeholder={error || null}
      />
    </form>
  );
};
const afterSubmit = (result, dispatch) => dispatch(reset("searchGif"));

const AddSearchFormRedux = reduxForm({
  form: "searchGif",
  onSubmitSuccess: afterSubmit,
})(AddSearchForm);
export default AddSearchFormRedux;
