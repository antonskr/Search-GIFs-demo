import { SubmissionError } from "redux-form";

const submit = (values) => {
  if (!values.textField) {
    throw new SubmissionError({
      textField: "Can't be empty",
    });
  }

  return undefined;
};

export default submit;
