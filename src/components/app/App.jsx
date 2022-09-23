import React, {Component} from "react";
import Modal from "components/modal/Modal";
import ImageGallery from "components/imageGallery/ImageGallery";
import Searchbar from "components/searchbar/Searchbar";


export class App extends Component {

  state = {
    showModal: false,
    photos: [],
    inputValue: '',
  }

  FormSubmit = inputValue => {
    this.setState({inputValue: inputValue})
  };





  // toggleModal = () => {
  //   this.setState(state => ({
  //     showModal: !state.showModal})
  //   )
  // }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ 
      showModal: !showModal }));
  };

  render() {
const { showModal } = this.state;

    return (
      <div>
        <button type="button" onClick={this.toggleModal}>Open modal</button>
        <Searchbar onSubmit={this.FormSubmit}/>
        <ImageGallery/>
          {showModal && <Modal onClose={this.toggleModal}>
          <button type="button" onClick={this.toggleModal}>Close</button>
           </Modal>}
      </div>
    );
  }
};
