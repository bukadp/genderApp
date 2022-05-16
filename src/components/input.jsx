import {useState} from "react";
import axios from "axios";

function Input(props) {
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')

    const baseURL = 'https://api.genderize.io'

    const fetchGender = (e) => {
        e.preventDefault();
        if (name.length) {
            axios
                .get(`${baseURL}?name=${name}`)
                .then((res) => {
                    setGender(res.data.gender);
                    console.log(res.data)
                    props.updateGender(res.data.gender)
                    props.updateName(res.data.name)
                });
            setName('')
        } else {
            alert('Type something')
        }
    };

    return (
        <div className="Form">
            <form className="add-name" onSubmit={fetchGender}>
                <input className="name" type="text" placeholder="Имя" value={name}
                       onChange={(e) => setName(e.target.value)}/>
                <button className='btn' type="submit">НАЖИМАЙ</button>
            </form>
        </div>
    );
}

export default Input