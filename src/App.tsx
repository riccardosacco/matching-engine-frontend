import React, { useState, useContext } from 'react';

// Import Context state
import Context from "./context/app.context"

// Import components
import Header from "./components/Header"
import TextInput from "./components/TextInput"
import TextResponse from "./components/TextResponse"

import "./assets/styles.scss";

const App: React.FC = () =>  {
  const [form, setForm] = useState({
    query_title: "",
    query_director: "",
    query_year: ""
  })
  
  const inputChange = (e: any) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    })
  }
  
  const context: any = useContext(Context)

  const { query, result, generateQuery, executeQuery } = context;

  const executeQueryClick = () => {
    generateQuery(form);

    executeQuery(query)
  }


  // const changeQueryText = (e: any) => {
  //   changeQuery(e.target.value)
  // }

  return (
      <div className="app">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <TextInput id="query_title" label="Query title" value={form.query_title} onChange={inputChange}/>
              <TextInput id="query_director" label="Query director" value={form.query_director} onChange={inputChange}/>
              <TextInput id="query_year" label="Query year" value={form.query_year} onChange={inputChange}/>
              <button className="btn btn-primary btn-block" onClick={executeQueryClick}>Run query</button>
            </div>
            <div className="col-sm">
              <TextResponse id="query" label="Query" value={query} rows={10} />
              <TextResponse id="result" label="Result" value={result} rows={10} />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
