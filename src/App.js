import { Button } from 'antd';
import './App.css';
import 'antd/dist/reset.css';
import { Card } from 'antd';
import React, { useState, useEffect } from "react";
import { Divider } from 'antd';


const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts/";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }


  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className='main'>
      <div className='first'>
        <div className='count' data-hover="100">User Count</div>
      </div>
      <div className="App">
        {data.map((dataObj, index) => {
          return (
            <div className='container'>


              <Card className='main_card'
                // title={dataObj.userId}
                extra={<a href="#">Github</a>}
                style={{
                  width: 300,
                }}
              >

                <h2>Title</h2>
                <div className='title_data'>{dataObj.title}</div>
                <Divider className='Divider' />
                <div className='id_main'>#{dataObj.userId}- {dataObj.id}</div>
                <div className='About' data-hover={dataObj.body}>About</div>

                <Divider className='Divider' />
                <Button className='button_visit'>Visit Me</Button>


              </Card>


            </div>
          )
        })}

      </div>
    </div>
  );
}

export default App;
