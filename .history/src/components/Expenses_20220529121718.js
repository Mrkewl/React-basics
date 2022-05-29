import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

function Expenses(props) {
  const allComponents = props.expenses.map((e) => (
    <ExpenseItem title={e.title} amount={e.amount} date={e.date} />
  ));

  return <Card className="expenses">{allComponents}</Card>;
}

export default Expenses;