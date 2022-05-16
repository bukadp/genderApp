import {useState} from 'react'
import './App.css'
import Input from "./components/input";
import Output from "./components/output";

function App() {
    const [gender, setGender] = useState('')
    const [name, setName] = useState('')

    return (
        <div>
            <Input updateGender={setGender} updateName={setName}/>
            <Output newGender={gender} newName={name}/>
        </div>
    )
}

export default App


// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {}
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.changeName(this.state.name)
//   }

//   handleChange(e) {
//     const { value } = e.target;
//     this.setState({
//       name: value
//     })
//   }

//   async changeName(name) {

//     const serverUrl = 'https://api.genderize.io';
//     const url = `${serverUrl}?name=${name}`;
//     try {
//       const response = await fetch(url); 
//       const responseJson = await response.json();

//       this.setState({
//         value: responseJson.gender,
//         name: name,
//         nameValue: ""
//       })
//     }
//     catch(err){
//       console.log(err);
//     }
// };

/*  thennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn  
  fetch(url)
      .then((response) => response.json())
      .then(data => {
        this.setState({
          value: data.gender,
          name: name,
          nameValue: ""
        })
      })
  };
*/
//   render() {
//     return (
//       <div className="App">
//         <Input handleSubmit={this.handleSubmit} handleChange={this.handleChange} nameValue={this.state.nameValue}/>
//         <Output text={this.state.value} name={this.state.name}/>
//       </div>
//     )
//   }
// }

/*
function Button() {
  return (
    <div className="Button">
      <button className='btn' type="submit" >Нажмите для проверки</button>
    </div>
  );
}*/


/*
import './App.css'
const firstName = document.querySelector(".name");
function App() {

  return (
    <div className="App">
        <Input />
        <Output />
    </div>
  )
}

function Input() {
  return (
      <div className="Form">
        <form className="add-name" onSubmit={changeName}>
          <input className="name" type="text" placeholder="Имя" />
          <Button />
        </form>
      </div>
  );
}

    function changeName(e) {
        e.preventDefault();

        const serverUrl = 'https://api.genderize.io';
        const url = `${serverUrl}?name=${firstName.value}`;

        fetch(url)
            .then((response) => response.json())
            .then(data => {
                let result = document.querySelector(".output");
                result.innerHTML = `${firstName.value} is ${data.gender}`
            })
            .then(clearTask);

    };

function clearTask (){
    firstName.value = "";
}

function Button() {
  return (
      <div className="Button">
          <button className='btn' type="submit">Нажмите для проверки</button>
      </div>
  );
}

function Output() {
    return (
        <div className="Output">
            <div className='output'>Результат</div>
        </div>
    );
}

export default App
*/