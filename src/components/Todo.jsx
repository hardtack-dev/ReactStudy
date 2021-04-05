import React, {useState, useRef} from 'react'
import styled from 'styled-components'



const Blank = styled.div`
    width:  ${(props) => props.Wspace + 'px'};
    height: ${(props) => props.Hspace + 'px'};
    /* background-color: #f0f0f0; */

    margin-top: ${(props) => props.mt + 'px'};
    margin-right: ${(props) => props.mr + 'px'};
    margin-bottom: ${(props) => props.mb + 'px'};
    margin-left: ${(props) => props.ml + 'px'};
`;


const Container = styled.div`
    margin: 0 auto;
    width: 1200px;
    text-align: center;

    border: 1px solid #ececec;
`;

const InputBox = styled.input`
    width: ${(props) => props.w + 'px'};
    height: ${(props) => props.h + 'px'};


    border-radius: ${(props) => props.r + 'px'};
    border: 1px solid grey;
`;

const Button = styled.button`
    width: ${(props) => props.w + 'px'};
    height: ${(props) => props.h + 'px'};

    border-radius: ${(props) => props.r + 'px'};
    background-color: ${(props) => props.color};

    border: 1px solid grey;

    &:hover{
        cursor: pointer;
        background-color: #dbdbdb;
    }
`;

const Box = styled.div`
    margin: 0 auto;

    width: 300px;
    height: 40px;

    border: 1px solid grey;

    border-radius: 5px;
    background-color: #ececec;    
`;

const Todo = () =>{

    /////////// START OF UseState //////////
    const [Input, setInput] = useState({
        ID: '',
        TITLE: '',
        CONTENT: '',
    });

    const [List, setList] = useState([
        //List는 새로운 배열을 map으로 복사하기 위한 배열,
    ]);

    /////////// UseRef /////////////////
    const THEID = useRef(1);

    /////////// START OF Functions //////////
    const whileChange = (event) =>{
        setInput({
            ...Input, 

            [event.target.name]: event.target.value 
        });
    }

    const whenClicked = () =>{
        setList(           // SetList를 이용하여 List 배열의 값을 지정해주는데, SetList가 실행될때마다 Spread 문법을 이용하여 List 배열을 복사한다. 따라서 배열에는 객체가 쌓이게 된다.
            [...List,
                {
                ID: THEID.current,

                TITLE: Input.TITLE,
                CONTENT: Input.CONTENT,
            },
        ]);
        console.log("List 배열:" + List); //List Array는 ID, CONTENT, TITLE로 이루어진 객체의 배열로 이루어져 있다
        console.log("MapArray 배열:" + MapArray); //MapArray는 Div가 담겨있다
        THEID.current = THEID.current + 1; //ADD +1 TO THEID
        
    }

    const MapArray = List.map(x => <Box>{x.ID} - {x.TITLE} {x.CONTENT} </Box> ); 
    //map이 각각의 함수 밖에서 실행 될 수 있는 이유는 현재 함수로 이루어져 전체틀 Todo 컴포넌트가 샐행되고 있기 때문?!

    
    return(
        <div>
            
            <Container> 
                <Blank Hspace={30}/>   
                <p>제목</p>
                <InputBox type="text" name="TITLE" value={Input.TITLE}onChange={whileChange} w={300} h={30} r={5}/>
                <br/>

            
                <p>내용</p>
                <InputBox type="text" name="CONTENT" value={Input.CONTENT} onChange={whileChange} w={300} h={80} r={5}/>
                <br/>
                
                <Blank Hspace={20}/> 
                <Button onClick={whenClicked} w={80} h={30} r={5}>추가!</Button>

                <Blank Hspace={20}/>
                {MapArray}
                
            </Container>
        </div>
    );
}

export default Todo