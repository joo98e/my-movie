import React from 'react';
import { Button, Typography } from '@material-ui/core';
import axios from 'axios';

import CardUI from './components/CardUI';

// import PropTypes from 'prop-types';

// App.PropTypes = {
//     id : PropTypes.number
// }

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      num: 0
    }
  }

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({ movies, isLoading: false });
    console.log(this.state);
  }
  plus = () => {
    this.setState(current => ({ num: current.num + 1 }))
  };

  minus = () => {
    this.setState(current => ({ num: current.num - 1 }))
  };

  componentDidMount() {
    console.log('컴포넌트 마운트(태어남) 완료');
    this.getMovies();
  }

  componentDidUpdate() {
    console.log('컴포넌트 업데이트 완료');
  }

  componentWillUnmount() {
    console.log('컴포넌트가 언마운트 되었음');
  }

  render() {
    console.log('컴포넌트 렌더링 시작');

    const { num, isLoading, movies } = this.state;
    return (
      <div>
        

        <Typography>num : {num}</Typography>
        <Button onClick={this.plus} variant="contained" color="primary">
          PLUS
        </Button>
        <Button onClick={this.minus} variant="contained" color="secondary">
          MINUS
        </Button>

        {isLoading ? "is Loading" : movies.map(movie => {
          console.log(movies);
          return <CardUI
            key={movie.id}
            id={movie.id}
            title={movie.title}
            url={movie.url}
            poster={movie.large_cover_image}
          />
        })}
      </div>
    )
  }
}
