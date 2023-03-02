import React, { useState } from 'react';
import Copy from 'copy-to-clipboard';
import './App.css';


const List = ({ dataList }) => {
  const [copyText, setCopyText] = useState('');
  
  const handleClick = (text) => {
    setCopyText(text);
    Copy(text);
  };

  const handleCopyAll = async () => {
    const text = JSON.stringify(dataList.map(item => ({ [item.name]: item.url })));
    Copy(text);
    setCopyText(text)
  };
  
  return (
    <div className="list">
      {dataList?.map((item, index) => (
        <div className="list-item" key={index}>
          <a href={item.url}>{item.name}</a>
          <button className="copy-button" onClick={() => handleClick(item.url)}>Copy</button>
        </div>
      ))}
      {copyText && <div className="copy-text">{copyText}已复制.</div>}
      {dataList && <button onClick={handleCopyAll} className="copy-all-button">一键转换格式并复制</button>}
    </div>
  );
};

export default List;
