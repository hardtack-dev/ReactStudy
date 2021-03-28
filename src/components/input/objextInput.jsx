import React, {useState} from 'react'
import styled from 'styled-components'

const DIV = styled.div`
    margin: 0 auto;
    text-align: center;

    background-color: rgb(173, 199, 255);
    border-radius: 10px;
`

const ObjInput = () =>{

    const [Person, setInfo] = useState({
        name: '',
        number:'',
    });

    const watchChange = (e) =>{
        setInfo( //setInfo는 Person의 값을 지정한다.
            {
            ...Person,

            [e.target.name] : e.target.value, //아마도 e.target.name을 했는데 어째서 number까지 바뀔수 있는지 궁금할 수 있다. 
            //사실 이는 input에 태그에들어있는 name속성을 이용하여 바꾸는 것인데, 그러는 동시에 []를 이용해 해당이름을 가진 Person 객체에 있는 name, number를 키 값으로 사용한다([]로 감싸면 키로 사용가능), 참고로 아까도 말했듯이
            //e.target.name 은 input태그에 있던 name 속성을 변경하는 것이기에 e.target.name에 있는 number라는 값이 들어오면서 이를 []를 이용해 student에 키 값으로 사용한 것이다.
            //살짝 둘이 동시에 공유하는 느낌이랄까..?
            
            //참고로 이렇게 따로 써줘도 되더라!
            // [e.target.number] : e.target.value,
            });

    } 
    
    return(
        <DIV>
            <h2>객체를 이용한 states</h2>

            <label>이름</label>
            <input name="name" type="text" onChange={watchChange} value={Person.name}/>

            <br/>

            <label>번호</label>
            <input name="number" type="text" onChange={watchChange} value={Person.number}/>

            <hr/>

            <div>입력된 이름: {Person.name}</div>
            <div>입력된 번호: {Person.number}</div>
        </DIV>
    );
}

export default ObjInput