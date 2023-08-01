import { useState } from 'react';
import Item from './Item';

export default function PackingList({
  listItems,
  onDeleteItem,
  onToggleItem,
  onSetItems,
}) {
  const [sortBy, setSortBy] = useState('packed');

  let sortedItem;

  if (sortBy === 'input') sortedItem = listItems;
  if (sortBy === 'description')
    sortedItem = listItems.slice().sort((a, b) => a.desc.localeCompare(b.desc));
  if (sortBy === 'packed')
    sortedItem = listItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  function handleClearList() {
    const confirmed = window.confirm('Are you sure want to delete all items?');

    if (confirmed) onSetItems([]);
  }

  return (
    <div className='list'>
      <ul>
        {sortedItem.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            key={item.id}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className='actions'>
        <select value={sortBy} onChange={(ev) => setSortBy(ev.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description order</option>
          <option value='packed'>Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}
