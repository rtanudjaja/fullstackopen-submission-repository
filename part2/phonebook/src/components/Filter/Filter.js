export const Filter = ({ newFilter, handleFilterChange }) => (
  <div>
    filter shown with <input value={newFilter} onChange={handleFilterChange}/>
  </div>
)