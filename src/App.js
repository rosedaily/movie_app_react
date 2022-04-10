import React from 'react';

class App extends React.Component {
  state = {
    isLoading : true,
    movies : [],
  };

  //App 컴포넌트가 그려지면 ( render가 실행되면 ) 호출
  componentDidMount(){
    //영화 데이터 로딩!
    //첫번째 인자 값을 두번째 인자값(밀리초) 후에 실행 
    setTimeout(() => {
      this.setState({ isLoading : false});
    }, 6000)
  }

  render() {
    const { isLoading } = this.state;
    return (
    <div>
      {isLoading ? 'Loading...' : 'We are ready'}
    </div>
    );
  }
}

export default App;
