import { useProductContext } from "../context/ProductContext";

const Filter = () => {
  const { filter, setFilter } = useProductContext();

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
