export function Filter({ filter, setFilter }) {
  const handleFilterChange = evt => {
    evt.preventDefault();
    setFilter(evt.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleFilterChange} />
    </div>
  );
}
