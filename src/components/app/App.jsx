import React, {Component} from "react";
import Modal from "components/modal/Modal";
import ImageGallery from "components/imageGallery/ImageGallery";
import Searchbar from "components/searchbar/Searchbar";
import Loader from "components/loader/Loader";
// import Button from "components/button/Button";


export class App extends Component {

  state = {
    showModal: false,
    photos: [],
    inputValue: '',   
    currentPage: 1,  
    loading: false,
    error: null,  
    largePhoto: '',
    status: 'idle'
  };

 

  componentDidUpdate(prevProps, prevState) {
    const { inputValue, currentPage } = this.state;
    if (prevState.inputValue !== inputValue) {
      this.setState({loading: true})};   
    
      fetch (`https://pixabay.com/api/?key=29221253-dd17a46566e1be23f7ca8ff9b&image_type=photo&orientation=horizontal&safesearch=true&
      q=${inputValue}&page=${currentPage}&per_page=10`)
      .then(response => {
        if (response.ok) {
          return response.json()}; 
          return Promise.reject(new Error('Помилка! Спробуйте ще раз'))
          })
      .then(photosApi => this.setState({photos: [...this.state.photos, ...photosApi.hits] }))  
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({loading: false}))
    };
  
 
  FormSubmit = inputValue => {
    this.setState({inputValue: inputValue})
  };



  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal})
    )
  }
 

  render() {

    const { showModal } = this.state;


    return (

         <div>
          <p>{}</p>
        <button type="button" onClick={this.toggleModal}>Open modal</button>
        <Searchbar onSubmit={this.FormSubmit}/>
        {this.state.loading && <Loader/>}   
       
        <ImageGallery/>
          {showModal && <Modal onClose={this.toggleModal}>
          <button type="button" onClick={this.toggleModal}>Close</button>
           </Modal>}
      </div>
    );
  }













  //   const { showModal } = this.state;

  //   return (
  //     <div>
  //       <button type="button" onClick={this.toggleModal}>Open modal</button>
  //       <Searchbar onSubmit={this.FormSubmit}/>
  //       <ImageGallery/>
  //         {showModal && <Modal onClose={this.toggleModal}>
  //         <button type="button" onClick={this.toggleModal}>Close</button>
  //          </Modal>}
  //     </div>
  //   );
  // }
};
