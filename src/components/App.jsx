import React from 'react';
import { fechImage } from 'api/api';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends React.Component {
  state = {
    hits: null,
    query: '',
    page: null,
    isLoading: false,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      try {
        this.setState({ isLoading: true });
        const data = await fechImage(query, page);
        const hits = data.hits;

        this.setState({ hits: hits });
        console.log(this.state.page);
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onSearchbarSubmit = query => {
    const page = 1;
    this.setState({ query: query, page: page });
  };

  render() {
    return (
      <div>
        <Searchbar onSearchbarSubmit={this.onSearchbarSubmit} />
      </div>
    );
  }
}
