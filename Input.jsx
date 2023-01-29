class Input extends React.Component {
  state = {
    task: "",
  };

  render() {
    return (
      <div>
        {/* here we were not able write anything in input tag because of the cycle create by the value
        whenever we were trying to write something on input tag it re-render and value = got updated
        by this.state.task which is empty so it went into a cycle (though we were writing it was 
        re rendering with empty task value again and again) */}

        <input
          type="text"
          value={this.state.task}
          onChange={(e) => {
            this.setState({ task: e.currentTarget.value });
          }}
        ></input>
        <button onClick={() => {}}>Submit</button>
      </div>
    );  
  }
}
