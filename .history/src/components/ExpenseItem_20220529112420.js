import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props2) {


  return (
    <div className="expense-item">
   <ExpenseDate
   props = {props2}/>
      <div className="expense-item__description">
        <h2>{props2.title}</h2>
        <div className="expense-item__price">{props2.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
