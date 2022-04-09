import React from 'react';

class App extends React.Component {
  //생명주기 : constructor > render > componentDidUpdate(업데이트시) > componentDidMount > componentWillUnmount 순으로 실행
  //이 중 constructor는 생명주기 함수는 아님.

  //컴포넌트가 처름 화면에 그려지면 실행되는 함수
  componentDidMount() {
    console.log('component redered');
  }

  //화면이 업데이트(render) 된 뒤 실행
  componentDidUpdate() {
    console.log('I just update');
  }

  //화면에서 떠날 때 실행. 이벤트리스터 제거 시 주로 사용
  componentWillUnmount() {
    console.log('Good bye');
  }
  
  constructor(props) {
    super(props);
    console.log('hello');
  }

  state = {
    count : 0,
  };

  add = () => {
    //current는 this.state가 담겨있다.
    this.setState(current => ({
      count: current.count + 1,
    }))
  };
  
  minus = () => {
    this.setState(current => ({
      count: current.count - 1,
    }))
  };

  //클래스형 컴포넌트는 리액트의 컴포넌트를 상속받아 기능을 사용할 수 있다.
  //render함수를 사용해서 JSX를 리턴할 수 있는데, 
  //따로 구현하지 않아도 리액트 컴포넌트 상속으로 인해 사용이 가능하다.
  render() {
    console.log('render');
    return (
    <div>
      <h1>리액트 클래스 {this.state.count}</h1>
      <button onClick={this.add}>증가</button>
      <button onClick={this.minus}>감소</button>
    </div>
    );
  }
}

export default App;
