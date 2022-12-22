import './FilterCheckbox.css';

function FilterCheckbox(props) {
    return (
        <label className="checkbox">
            <input type="checkbox" className="checkbox__input"/>
            <span className="checkbox__mark"></span>
        </label>
    );
}

export default FilterCheckbox;