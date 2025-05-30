import { useParams } from 'react-router-dom';

const MenuItemPage = () => {
  const { slug } = useParams();

  return (
    <div>
      <h1>Menu Item - {slug}</h1>
    </div>
  );
};

export default MenuItemPage;
