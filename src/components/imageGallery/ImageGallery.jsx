import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';
import { Component } from 'react';

export default class ImageGallery extends Component {
//     state = {
//         loading: false,
//         inputValue: null,
//         error: null,
//     }

//     componentDidUpdate(prevProps, prevState) {
//         const BASE_URL = "https://pixabay.com/api/";
//         let currentPage = 1;
//         let perPage = 40;

//         this.setState({loading: true}); 

//     if(prevProps.inputValue !== this.props.inputValue) {
//     fetch (`${BASE_URL}?key=29221253-dd17a46566e1be23f7ca8ff9b&image_type=photo&orientation=horizontal&safesearch=true&
//     q=${this.props.inputValue}&page=${currentPage}&per_page=${perPage}`)
//     .then(response => {
//         if(response.ok){
//             return response.json()
//         }
//     })
//     .then(inputValue => this.setState({inputValue}))
//     .catch(error => this.setState({error}))
//     .finally(() => this.setState({loading:false}))
//  }
// }


    render(){

        // const { inputValue } = this.state
        return (
      
          <ul >
          <ImageGalleryItem/>
         </ul>

           
        )
    }
};

