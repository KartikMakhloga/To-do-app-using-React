class List extends React.Component {
  state = {
    taskData: [
      "this is temp task v1",
      "this is temp task v2",
      "this is temp task v3",
      "this is temp task v4",
      "this is temp task v5",
      "this is temp task v6",
    ],
  };
  render() {
    return (
      <ul>
        {this.state.taskData.map((el) => {
          return <ListItem taskVal={el} />;
        })}
      </ul>
    );
  }
}
