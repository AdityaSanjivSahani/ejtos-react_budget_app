import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Budget= () =>{
    const {budget} =useContext(AppContext);
    const [budget1,setBudget1]=useState(budget);
    const{expenses}=useContext(AppContext);
    const handleChange=(event)=>{
        setBudget1(event.target.value);
        if(budget1>20000)
        {
            console.log('Inside if loop');
            alert('The value cannot be greater than 20000');
            setBudget1(budget);
        }
        if(budget1<expenses)
        {
            console.log(expenses);
            alert('You cannot reduce the budget value lower than spending');
        }
    }
    return(
        <div className='alert alert-secondary'>
            Budget :£<input type='number' onChange={handleChange} value={budget1} /> 
        </div>
    );
};

export default Budget;