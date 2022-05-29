import ExpenseItem from "./ExpenseItem";

function NewComponent(props){
allComponents = props.expenses.map((e)=>
<ExpenseItem
 title={e.title}
 amount={e.amount}
 date={e.date}
/>
)






}