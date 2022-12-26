import {UpdateErrorTemplate} from './AppTemplates.js';
import '../../STYLES/styles.scss';
import {useAppBloc} from "../../App.tsx";


const handleSubmit = (event) => {
  // Prevent page reload
  event.preventDefault();
};


const UpdateError = () => {
  
  const bloc = useAppBloc();

  function Retry() {
    
    //bloc.UpdateError();

  }

  return (
    <div className="form">
    
      <UpdateErrorTemplate onClick={Retry}/>

  </div>
  );
};

export default UpdateError;