import React from 'react';

//컴포넌트 안에 새로운 컴포넌트를 넣는 방법.
//  1. 다른 화면에서 생성된 파일을 import해서 그 파일에서 export한 컴포넌트를 사용.
//  2. 동일 파일에 컴포넌트를 추가해서 불러와서 사용
function Food({ yogiyo }){
  return (
    <div>
      <h3> 안녕. 난 { yogiyo }가 먹고싶어 </h3>
    </div>
    );
}

//App 컴포넌트에서 Food 컴포넌트로 props(데이터) 보내기
//  1. 보낼 곳(App)의 컴포넌트에서 props명 = props 값으로 설정.(주의. 값은 문자열은 "" 그 외는 {}를 통해 감싸서사용.)
//  2. 받는 곳(Food)에서 인자값으로 받아서 사용한다.
//      1. 컴포넌트명(props) 을 통해 App에서 보낸 값들을 받는다. // (props의 명칭은 자유지만, 보편적으로 props로 사용)
//        1.1 사용 할 곳에서 바로 사용 
//          예) <h1>여기서 사용 { props.props명 }</h1>
//        1.2 구조 분해 할당.
//            예)
//            const { props명 } = props;
//            return <h1>여기서 사용 { props명 }</h1>
//        1.3 컴포넌트명({ props명 }) 으로 분해해서 받은 뒤 바로 사용한다. 
//            예)
//            return <h1>여기서 사용 { props명 }</h1>           

function App() {  //App 컴포넌트를 정의
  //HTML을 반환.
  return (
    <div>
      <h1>안녕 리액트</h1>
      <Food yogiyo="김치!"></Food>
      <Food yogiyo="라면!"></Food>
      <Food yogiyo="커피!"></Food>
    </div>
  );
}

export default App;
