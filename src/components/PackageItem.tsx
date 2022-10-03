interface PackageItemProps {
  name: string;
  description: string;
}

const PackageItem: React.FC<PackageItemProps> = (props) => {
  return (
    <li>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </li>
  );
};

export default PackageItem;
