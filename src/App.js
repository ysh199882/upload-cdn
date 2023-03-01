import React,{useState} from 'react';
import logo from './logo.png';
import './App.css';
import List from './List.js'



function App() {

  const [files, setFiles] = useState(null);
  const [dataList,setDataList] = useState(null);//获取到alioss返回的文件信息列表

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    setFiles(files);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();

    for (var i = 0, len = files.length; i < len; i++) {
      formData.append('file', files[i]);
    }

    fetch('http://192.168.103.101:8888/upload', {
      method: 'post',
      body: formData
    })
    .then(response => 
      response.json())
    .then(data => {
      setDataList(data)
    })
    .catch(error => console.error(error));
  }




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <form onSubmit={handleFormSubmit} encoding="utf-8" action="/upload" method="post" encType="multipart/form-data" >
          <input type="file" onChange={handleFileInputChange} multiple name='file' />
          <input type="submit" value="提交" encoding="utf-8"></input>
        </form>

        
          <div className='preview'>
            <List dataList={dataList}></List>
          </div>
        
      </header>
    </div>
  );
}

export default App;
