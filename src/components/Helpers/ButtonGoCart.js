import React, { useState, useEffect} from "react";
import { Button } from "react-bootstrap";

const ButtonGoCart=()=>{

    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }
    
    const LoadingButton=()=> {
        const [isLoading, setLoading] = useState(false);
        
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
    }
}, [isLoading]);

    const handleClick = () => setLoading(true);
  
    return (
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? 'Loading…' : 'Click to load'}
      </Button>
    );
  }
  
  // eslint-disable-next-line no-undef
  return(LoadingButton());
}
  
export default ButtonGoCart;