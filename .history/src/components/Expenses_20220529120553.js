import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const allComponents = props.expenses.map((e) => (
    <ExpenseItem title={e.title} amount={e.amount} date={e.date} />
  ));

  return <div className="expenses">{allComponents}</div>;
}

export default Expenses;