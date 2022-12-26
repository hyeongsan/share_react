import logo from './logo.svg';
import './App.css';

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
  let c; // undefined => null이 아니라 하나의 값이다.(정의되지않은 값)
  console.log(1,c);

  const mystyle={
    color: 'red',
  };

  let list = [1,2,3]

  return <div>
    <div style={mystyle}>
    안녕{a===10?'10입니다':'10이 아닙니다.'}
    </div>
    <h1 className="box-style">해딩태크{b}</h1>
    <div>{list.map((n)=> n)}</div>

  </div>
}

export default App;
