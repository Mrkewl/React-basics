import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (SelectedYear) => {
    console.log(SelectedYear);
    console.log("Expenses.js");
    setFilteredYear(SelectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>

        {/* {props.items.map((e, index) => {
          if (e.date.getFullYear().toString() === filteredYear) {
            return (
              <ExpenseItem
                key={e.id}
                title={e.title}
                amount={e.amount}
                date={e.date}
              />
            );
          } else {

          }
        })} */}
      </Card>
    </div>
  );
};

export default Expenses;
