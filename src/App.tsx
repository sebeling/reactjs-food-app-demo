import { useAppSelector } from './app/hooks';
import './App.css';

function App() {
  const { items } = useAppSelector((state) => state.menu);

  return (
    <main>
      <h1>Food App Demo</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
