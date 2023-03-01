import React, { useState } from 'react';
import Clipboard from 'clipboard';
import './App.css';


const List = ({ dataList }) => {
  const [copyText, setCopyText] = useState('');
  
  const handleClick = (text) => {
    setCopyText(text);
    const clipboard = new Clipboard('.copy-button');
    clipboard.on('success', () => {
      clipboard.destroy();
    });
  };
  
  return (
    <div className="list">
      {dataList?.map((item, index) => (
        <div className="list-item" key={index}>
          <a href={item.url}>{item.name}</a>
          <button className="copy-button" onClick={() => handleClick(item.url)}>Copy</button>
        </div>
      ))}
      {copyText && <div className="copy-text">{copyText} copied to clipboard.</div>}
    </div>
  );
};

export default List;
