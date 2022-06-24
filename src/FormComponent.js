import { useState } from 'react';
import PropTypes from 'prop-types';

function FormComponent(props) {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !distance) {
      return;
    }
    props.onAddItem({date, distance});
    setDate('');
    setDistance('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-wrapper">
      <div className="date-input_wrapper">
        <label htmlFor="dateId"> Дата (ДД.ММ.ГГ)</label>
        <input name="date" id="dataId"
               value={date}
               onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="distance-input_wrapper">
        <label htmlFor="distanceId">Пройдено км</label>
        <input name="distance" id="distanceId"
               value={distance}
               onChange={(e) => setDistance(Number(e.target.value))}
        />
      </div>
      <button type="submit">ОК</button>
    </form>
  );
}

export default FormComponent;

FormComponent.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};
