import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
import { useEffect } from 'react';

let a = 10; // 변수
const b = 20; // 상수

//0.React 엔진 - 데이터변경감해서 UI 그려줌
//1. 실행과정(index.html) - SPA
//2. JSX 문법

// (1) return시에 하나의 Dom만 리턴할 수 있다.
// (2) 변수선언은 let 혹은 const로만 해야함.
// (3) if사용 불가능X -> 삼항연산자 사용함 (조건?값(true):값(false))
// (4) 조건부렌더링 (조건==값&&(true))
// (5) css디자인
//      -내부에 적는방법
//      -외부 파일에 적는 방법
//      -라이브러리 사용(부트스트랩 등)

//3. 바벨(자바스크립트 ES5) -> ES6
function App() {

  const [data,setData] = useState(0);

  const download = () => {
    //다운로드 받고 (통신)
    let downloadData=5;// 가정
    setData(downloadData);
  }

  // 실행시점 : 
  //(1) App() 함수가 최초 실행될 때(마운트될 때)
  //(2) 상태 변수가 변경될 때
  //(3) 의존리스트 관리를 할 수 있다.
  useEffect(()=>{
    console.log("useEffect() 실행됨");
    download();
  },[]);


 // let number = 1; // 상태 값
 const [number,setNumber] = useState(0);
 const [num,setNum] = useState(5);
 const [search,setSearch] = useState(0);

  
  const add = () => {
    setNumber(number+1);
    console.log('add',number);
   }

   //다운로드 받음
   const [users,setUsers] = useState([]);


   let sample = [
    {id:1,name:'홍길동'},
    {id:2,name:'임꺽정'},
    {id:3,name:'장보고'},
    {id:4,name:'코스'},
  ];


   //렌더링 시점 = 상태값 변경
  return <div>
    <div>
      <h1>검색:</h1>
      <button onClick={()=>{setSearch(2)}}>검색하기</button>
      <h1>데이터:{data}</h1>
      <button onClick={()=>{setData(data+1)}}>더하기</button>
    </div>
  </div>
}

export default App;
