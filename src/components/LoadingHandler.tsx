import React from 'react';

const LoadingHandler : React.FC  = () =>{
    return (
        <React.Fragment>
           <img src={`${process.env.PUBLIC_URL}/assets/loading.gif`} alt="Loading..." width="22px" height="25px"/>
        </React.Fragment>
    );
}
export default LoadingHandler