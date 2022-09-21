import React, {Component} from "react";
import Modal from "components/modal/Modal";
import ImageGallery from "components/imageGallery/ImageGallery";
import Searchbar from "components/searchbar/Searchbar";


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
        <button type="button" onClick={this.toggleModal}>Open modal</button>
        <Searchbar/>
        <ImageGallery/>
          {showModal && <Modal onClose={this.toggleModal}>
          <button type="button" onClick={this.toggleModal}>Close</button>
           </Modal>}
      </div>
    );
  }
};
