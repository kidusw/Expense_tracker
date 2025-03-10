import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm=(props)=>{
    //sliced states
    const [enteredTitle,setEnteredTitle] =useState('');
    const [enteredAmount,setEnteredAmouunt]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    //one-state

    // const  [userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
        // setUserInput({...userInput,enteredTitle:event.target.value});
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredTitle:event.target.value}
        // });
    };
     
    const amountChangeHandler=(event)=>{
        setEnteredAmouunt(event.target.value);
        // setUserInput({...userInput,
        //     enteredAmount:event.target.value
        // });
    };

    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
        // setUserInput({...userInput,enteredDate:event.target.value});
    };

    const submitHandler=(event)=>{
        event.preventDefault();

        const ExpenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }

        props.onSaveExpenseData(ExpenseData);

        setEnteredTitle('');
        setEnteredAmouunt('');
        setEnteredDate('');
    };

    return <form onSubmit={submitHandler} action="">
        <div className="new-expense__controls">
        <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input type="number" value={enteredAmount} min="0.01" step="0.01"
            onChange={amountChangeHandler}/>
        </div>
         <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
            </div>
    </form>
};

export default ExpenseForm;

