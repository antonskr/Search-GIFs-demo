import {SubmissionError} from 'redux-form'

const submit = (values) => {
    if (values.textField) {
        return undefined
    } else if (!values.textField) {
        throw new SubmissionError({
            textField: 'Can\'t be empty'
        })
    }
}

export default submit