import { useState } from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
import ExpenseDate from '../Expenses/ExpenseDate';

const NewExpense=(props)=>{

  const saveExpenseDataHandler=(enteredExpenseData)=>{
    const expsenseData={
      ...enteredExpenseData,
      id:Math.random.toString()
    };
    props.onAddExpense(expsenseData);

    setIsEditing(false);
  }
   const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };


 

    return(
        <div className='new-expense'>
             {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
         {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />)}
        </div>
    )
};

export default NewExpense;