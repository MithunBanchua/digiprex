

import './ExpenseItem.css';
function ExpenseItem(props){   //props
    const month=props.date.toLocalString('en-US',{month: 'long'}); //mrthods
    const year=props.date.getFullYear();
    const day=props.date.toLocalString('en-US',{day: '2-digit'});
    
    return (
        <div className='expense-item'>
            <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>   
            </div>
        </div>
    );
}

export default ExpenseItem;