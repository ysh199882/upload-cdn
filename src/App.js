import React,{useState} from 'react';
import logo from './logo.png';
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

    // fetch('https://45ka3u4ky8.hk.aircode.run/index', {
    fetch('http://192.168.103.101:8888/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => 
      response.json())
    .then(data => {
      setUrl(data.data.file.url)})
    .catch(error => console.error(error));
  }
  
  const copyUrl = ()=>{
    const textToCopy = document.getElementById('text-to-copy');
    const range = document.createRange();
    range.selectNode(textToCopy);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('已复制');
  }


  return (
    <div className="App">
      <header className="App-header">
        {!url && <img src={logo} className="App-logo" alt="logo" />}

        <form onSubmit={handleFormSubmit} encoding="utf-8" action="/upload" method="post" >
          <input type="file" onChange={handleFileInputChange} name="files" multiple="multiple" encoding="utf-8"/>
          <input type="submit" value="提交" encoding="utf-8"></input>
        </form>

        {url &&
          <div className='preview'>
            <img src={url} alt="Uploaded" className='preview-img' />

            <div className='copy'>
              <div className='preview-copy' id="text-to-copy">{url}</div>
              <button onClick={()=>{copyUrl()}} className='copy-btn'>Copy</button>
            </div>

          </div>
        }
      </header>
    </div>
  );
}

export default App;
