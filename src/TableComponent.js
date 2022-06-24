import PropTypes from 'prop-types';

function TableComponent(props) {
  const { list, onDelete } = props;

  return (
    <table className="table-wrapper">
      <thead>
      <tr>
        <th>Дата (ДД.ММ.ГГ)</th>
        <th>Пройдено км</th>
        <th>Действие</th>
      </tr>
      </thead>
      <tbody>
      {
        list.map((item) => {
          return (
            <tr key={item.date}>
              <td>{item.date}</td>
              <td>{item.distance}</td>
              <td>
                <span className="material-icons cursor" onClick={() => onDelete(item)}>close</span>
              </td>
            </tr>
          );
        })
      }
      </tbody>
    </table>
  );
}

export default TableComponent;

TableComponent.propTypes = {
  onDelete: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape(
      {
        date: PropTypes.string,
        distance: PropTypes.number,
      }
    )
  ),
};
