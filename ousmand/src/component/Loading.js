import React from 'react';
import ReactLoading from 'react-loading';
import './acceuil.css';

const Loading = () => (
    
    <div className='load'>
            <ReactLoading 
                className='loading' 
                type='bars'
                color='#EB5A33'
             /> 
        
    </div>
)
export default Loading