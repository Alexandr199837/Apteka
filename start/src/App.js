import React, { Component } from "react";
import "./App.css";

const TABLES = [
  { name: "Лекарства", zip: "94303" },
  { name: "Производитель", zip: "94088" },
  { name: "Поставщик", zip: "95062" },
  { name: "Поступление", zip: "96803" },
  { name: "Продажа", zip: "96700" },
  { name: "История цены", zip: "96701" },
  { name: "Единица измерения", zip: "96702" },
  { name: "Место хранения", zip: "96873" }
];

class Head extends Component {
  render() {
    return <div className='App-header'>
      <div className='App-font'>Аптека+   </div>  
    <div>
      <button className='App-button-login'>Login</button>
      
      </div>
      </div>
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTable: 0
    };
  }
  render() {
    const activeTable = this.state.activeTable;
    return (
      <div className="App">
        <Head key={activeTable} zip={TABLES[activeTable].zip} />
        <div className='bgr'>
        {TABLES.map((table, index) => (
          <button className ='App-button'
            key={index}
            onClick={() => {
              this.setState({ activeTable: index });
            }}
          >
            {table.name}
          </button>
        ))}
        </div>
        
      </div>
    );
  }
}

export default App;
