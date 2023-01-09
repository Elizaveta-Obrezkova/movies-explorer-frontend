import './FilterCheckbox.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function FilterCheckbox(props) {

    const [value, setValue] = useState(true);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/movies') {
            setValue(props.checkbox);
            props.changeCheckbox(props.checkbox)
            return
        }
        else {
            setValue(false);
            props.changeCheckbox(false)
            return
        }
    }, [location, props.checkbox])

    function handleChange(event) {
        props.changeCheckbox(event.target.checked)
        if (value) {setValue(false)}
        else {setValue(true)}
    };

    return (
        <label className="checkbox">
            <input type="checkbox" className="checkbox__input" checked={value} onChange={handleChange}/>
            <span className="checkbox__mark"></span>
        </label>
    );
}

export default FilterCheckbox;