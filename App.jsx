class App extends React.Component {
  state = {
    taskData: [],
  };

  taskHandler = (value) => {
    let tempArr = this.state.taskData;
    tempArr.push(value);
    this.setState({ taskData: tempArr });
  };

  removeTask = (task) => {
    let filterArr = this.state.taskData.filter((el) => {
      return el != task;
    });
    this.setState({taskData: filterArr});
  };
  render() {
    return (
      <div>
        <Input taskHandlerFunction={this.taskHandler} />
        <List tasks={this.state.taskData} removeTaskHandler = {this.removeTask} />
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.querySelector("#root")
);
