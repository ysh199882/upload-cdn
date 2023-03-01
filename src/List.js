import React, { useState } from 'react';
import Copy from 'copy-to-clipboard';
import './App.css';


const List = ({ dataList }) => {
  const [copyText, setCopyText] = useState('');
  
  const handleClick = (text) => {
    setCopyText(text);
    Copy(text);
  };
  
  return (
    <div className="list">
      {dataList?.map((item, index) => (
        <div className="list-item" key={index}>
          <a href={item.url}>{item.name}</a>
          <button className="copy-button" onClick={() => handleClick(item.url)}>Copy</button>
        </div>
      ))}
      {copyText && <div className="copy-text">{copyText} 已复制.</div>}
    </div>
  );
};

export default List;
