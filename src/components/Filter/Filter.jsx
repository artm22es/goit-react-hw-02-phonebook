export const Filter = ({ handleChangeFilter }) => {
  return (
    <input
      type="text"
      name="name"
      onChange={evt => handleChangeFilter(evt.target.value)}
    />
  );
};
