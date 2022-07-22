import React from 'react';
import ItemCard from '../itemCard/ItemCard';
import Search from '../search/Search';
import './listView.scss';

function ListView ( { data}) {
   
  return (
    <>
      <div>List View</div>
      <Search />
      {data.map( item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </>
  );
}

export default ListView;
