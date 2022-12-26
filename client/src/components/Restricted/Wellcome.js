import React from 'react';
import '../../STYLES/styles.scss';

//const [errorMessages, setErrorMessages] = useState({});
//const [isSubmitted, setIsSubmitted] = useState(false);

const handleSubmit = (event) => {
  // Prevent page reload
  event.preventDefault();
};


const Wellcome = () => {
  
  function logout() {
    alert('Attempt to logout');
  }

  return (
    <button onClick={logout}>BIENVENIDO</button>
  );
};

export default Wellcome;