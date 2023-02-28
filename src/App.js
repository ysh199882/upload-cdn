import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);

  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', file);

    fetch('https://45ka3u4ky8.hk.aircode.run/index', {
      method: 'POST',
      body: formData
    })
    .then(response => 
      response.json())
    .then(data => setUrl(data.file.url))
    .catch(error => console.error(error));
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <form onSubmit={handleFormSubmit} encoding="utf-8" action="/upload" method="post" enctype="multipart/form-data" accept-charset="UTF-8">
          <input type="file" onChange={handleFileInputChange} name="files" multiple="multiple" encoding="utf-8"/>
          <input type="submit" value="提交" encoding="utf-8"></input>
        </form>
        {url && <img src={url} alt="Uploaded" />}
      </header>
    </div>
  );
}

export default App;
