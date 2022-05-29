import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const allComponents = props.expenses.map((e) => (
    <ExpenseItem title={e.title} amount={e.amount} date={e.date} />
  ));

  return <div className="expenses">{allComponents}</div>;
}

export default Expenses;