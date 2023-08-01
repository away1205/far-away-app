import { useState } from 'react';
import Stats from './Stats';
import PackingList from './PackingList';
import Logo from './Logo';
import Form from './Form';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <>
      <div className='app'>
        <Logo />
        <Form onAddItem={handleAddItem} />
        <PackingList
          listItems={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onSetItems={setItems}
        />
        <Stats items={items} />
      </div>
    </>
  );
}

export default App;
