import React from 'react';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullpath: '',
      item: '',
      fullpathSearch: '',
      itemSearch: ''
    }
  }

  componentDidMount() {
    this.getParams();
  }

  getParams() {
    // Get Full path
    this.setState({ fullpath: this.props.location.pathname })
    console.log(this.props.location.pathname);

    // Get param
    const { match: { params } } = this.props;
    this.setState({ item: params.item })
    console.log(params.item);

    // Get fullpathSearch 
    this.setState({ fullpathSearch: this.props.location.search })
    console.log(this.props.location.search);

    // Get param from pathSearch 
    var url_string = `http://dominigo.com/${this.props.location.search}`; //window.location.href
    var url = new URL(url_string);
    var number = url.searchParams.get("no");
    this.setState({ itemSearch: number });
    console.log(number);
  }

  render() {
    let example1 = 'http://localhost:3000/comix/spiderman?no=13';
    let example2 = 'http://localhost:3000/comix/spiderman';

    return (
      <>
        <div style={{ marginBottom: '30px' }}>
          <span style={{ display: 'block' }}>
            Examples:
          </span>
          <span style={{ display: 'block' }}>
            <a href={example1}>{example1}</a>
          </span>
          <span style={{ display: 'block' }}>
            <a href={example2}>{example2}</a>
          </span>
        </div>
        <div>
          <span style={{ display: 'block' }}>
            Outs:
          </span>
          <span style={{ display: 'block' }}>
            Item: {this.state.item}
          </span>
          <span style={{ display: 'block' }}>
            Fullpath: {this.state.fullpath}
          </span>
          <span style={{ display: 'block' }}>
            FullpathSearch: {this.state.fullpathSearch}
          </span>
          <span style={{ display: 'block' }}>
            Item Search: {this.state.itemSearch}
          </span>
        </div>
      </>)
  }
}

export default Page;
