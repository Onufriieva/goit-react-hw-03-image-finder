import React, {Component} from "react";
import Modal from "components/modal/Modal";


export class App extends Component {

  state = {
    showModal: false,
  }


  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal})
    )
  }

  render() {
const { showModal } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        {showModal && <Modal>
          <button type="button" onClick={this.toggleModal}>Close</button>
           </Modal>}
      </div>
    );
  }
};
