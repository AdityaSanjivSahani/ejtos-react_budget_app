import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{totalExpenses}</span>
            <div className="mb-3 color:green">
                    <label htmlFor="Currency" className="form-label">Currency</label>
                    <select  className="form-control" name="bankName" >
                        <option value="$">$ Dollar</option>
                        <option value="£">£ Pound</option>
                        <option value="€">€ Euro</option>
                        <option value="₹">₹ Rupee</option>
                    </select>
                </div>
</div>
    );
};

export default ExpenseTotal;
