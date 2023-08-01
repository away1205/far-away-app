import { useState } from 'react';

export default function Form({ onAddItem }) {
  const [desc, setDesc] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(ev) {
    ev.preventDefault();

    if (!desc) return;

    const newItem = { desc, quantity, packed: false, id: Date.now() };

    onAddItem(newItem);

    setDesc('');
    setQuantity(1);
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        name=''
        id=''
        value={quantity}
        onChange={(ev) => setQuantity(Number(ev.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={desc}
        onChange={(ev) => setDesc(ev.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
