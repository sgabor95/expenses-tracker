import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>My app's heading!</h2>
      <ExpenseItem
        date={new Date("2020 03 28")}
        title={"Car insurance"}
        amount={1800}
      />
      <ExpenseItem
        date={new Date("2020 04 15")}
        title={"Car revision"}
        amount={2500}
      />
    </div>
  );
}

export default App;
