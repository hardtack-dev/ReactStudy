import React, {useState} from 'react'
import styled from 'styled-components';

const DIV = styled.div`
    background-color: #fde0e0;

    margin: 0 auto;
    text-align: center;
`
    



const Input = () =>{
    const [Name, setName] = useState();
    const [Number, setNumber] = useState();  

    const watchNameChange = (e) =>{ //watchNameChnage라는 함수로 값이 들어올떄 매개변수로 input의 event (e)를 받았다, 이를 활용할 수 있다.
        setName(e.target.value) //e.target.value를 사용한 이유는 Name을 바꿔버리면 실시간으로 적용이 안되기 때문이다. (e.target.value는 input에 value 값을 가져오는 코드이다)
    }
    
    const watchNumberChange = (e) =>{
        setNumber(e.target.value) //e.target.value를 사용한 이유는 Name을 바꿔버리면 실시간으로 적용이 안되기 때문이다.
    }

    return(
        <DIV>
            <h2>2개의 state를 이용</h2>
            
            <label> 이름 </label>
            <input type="text" onChange={watchNameChange} name="NAME" value={Name}/>

            <br/>

            <label > 번호 </label>
            <input type="text"  onChange={watchNumberChange} name="NUMBER" value={Number}/>

            <hr/>

            <div>입력된 이름: {Name}</div>
            <div>입력된 번호: {Number}</div>
        </DIV>
    ); 
}

export default Input
