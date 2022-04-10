import React from 'react';
import axios from 'axios';
import Movie from './Movie.js';

class App extends React.Component {
  state = {
    isLoading : true,
    movies : [],
  };

  getMovies = async () => {
    // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    // console.log("🚀  movies : ", movies.data.data.movies)
    
    //구조분해할당
    const {
      data : {
        data : { movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    // this.setState({movies : movies}) //객체의 키와 대입할 변수명이 같으면 하나로 축약 가능
    this.setState({ movies, isLoading : false });

  }

  //App 컴포넌트가 그려지면 ( render가 실행되면 ) 호출
  componentDidMount(){
    //영화 데이터 로딩!
    // //첫번째 인자 값을 두번째 인자값(밀리초) 후에 실행 
    // setTimeout(() => {
    //   this.setState({ isLoading : false});
    // }, 6000)
    this.getMovies();
    
  }

  render() {
    //구조 분해 할당으로 state에서 isLoading과 movies를 얻음
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ):(
          <div className="movies">
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
