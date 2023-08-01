export default function Stats({ items }) {
  if (items.length === 0) {
    return <em className='stats'>Lets packed your thing!</em>;
  }

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className='stats'>
      {percentage === 100 ? (
        'Everything is packed, Lets Go✈️'
      ) : (
        <em>
          You have {numItems} items on your list, and you already packed{' '}
          {packedItems} ({percentage}%)
        </em>
      )}
    </footer>
  );
}
