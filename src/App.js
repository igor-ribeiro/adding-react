import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: props.isOpened,
    };

    this.handleClose = this.handleClose.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({ ...props });
  }

  handleClose() {
    this.setState({ isOpened: false });
  }

  render() {
    const isOpened = this.state.isOpened
      ? 'flex'
      : 'none';

    return (
      <div className="App-modal" style={{display: isOpened}}>
        <header className="App-modal-header">
          Test {this.state.isOpened ? 'is-opened' : ''}
        </header>

        <section className="App-modal-body">
          This is an amazing content for a modal!
        </section>

        <footer className="App-modal-footer">
          <input className="App-modal-footer-action" onClick={this.handleClose} type="button" value="Close" />
        </footer>
      </div>
    );
  }
}

export default App;
