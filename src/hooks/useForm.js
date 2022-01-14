// write your custom hook here to control your checkout form
import {useState} from 'react';

const useForm = (initValues) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initValues);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return [values, showSuccessMessage, handleChanges, setShowSuccessMessage];
}

export default useForm;
