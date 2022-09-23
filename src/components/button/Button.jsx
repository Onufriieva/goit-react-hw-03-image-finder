

// const Button = () => {
//     return(
//         <button type="button">Load more</button>
//     )
// };

// export default Button;


import React from 'react';
import PropTypes from 'prop-types';


const Button = ({ fetchImages, children }) => (
  <div>
    <button type="button" onClick={fetchImages}>
      {children}
    </button>
  </div>
);

Button.propTypes = {
  fetchImages: PropTypes.func,
  children: PropTypes.string,
};

export default Button;