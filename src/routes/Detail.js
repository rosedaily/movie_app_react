import React from 'react';
import './Detail.css';

// function Detail(props) {
//   console.log(props);
//   return <span>hello</span>
// }

class Detail extends React.Component {
  //detail 컴포넌트가 마운트 되면, 
  componentDidMount() {
    //구조분해 할당으로 location, history를 얻고
    const { location, history } = this.props;
    //location.state가 없는 경우 
    if(location.state === undefined) {
      //Home으로 이동
      history.push('/');
    }
  }

  render() {
    const { location } = this.props;
    if(location.state){
      return (
        <div className="movie_detail">
          <div className="movie__data">
            <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
            <h3 className="movie__title">{location.state.title}</h3>
            <h5 className="movie__year">{location.state.year}</h5>
            <ul className='movie__genres'>
              {location.state.genres.map((genre, index) => {
                return <li key={index} className="movie__genre">{genre}</li>;
              })}
            </ul>
            <p className="movie__summary">{location.state.summary}</p>
          </div>
        </div>
      );
    }else{
      return null;
    }
    
  }
}

export default Detail;