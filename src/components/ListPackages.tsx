import { useTypedSelector } from "../hooks/useTypedSelector";
import PackageItem from "./PackageItem";

const ListPackages: React.FC = () => {
  const repositories = useTypedSelector((state) => state.repositories.items);
  const uiState = useTypedSelector((state) => state.ui);

  return (
    <div>
      {uiState.isLoading && <h3>Loading...</h3>}
      {uiState.error && <h3>{uiState.error}</h3>}
      <ul>
        {repositories.map((item) => (
          <PackageItem
            key={item.name}
            name={item.name}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListPackages;
