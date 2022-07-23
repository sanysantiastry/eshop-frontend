import React,{useState} from "react";


function HelloWorld({name}){

    const [stateName,setStateName] = useState('');

    return (
        <div>
        Nama :{stateName}
        <button onClick={() => setStateName(name)}>set</button>
        </div>
    
    );
}

export default HelloWorld;
