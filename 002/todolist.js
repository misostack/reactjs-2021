class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="form-group">
          <input type="text" className="form-control form-control-lg" />
        </div>
      </React.Fragment>
    );
  }
}
class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const className = "todo";
    const { id, title, description, estimation, status } = this.props;
    return (
      <div className={className}>
        <label className={"name"}>{title}</label>
        <label className={"estimation"}>{estimation}</label>
      </div>
    );
  }
}
class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <div className="todo-container card-text">
            <Todo title="Todo A" estimation="30min" status="new" />
            <Todo title="Todo B" estimation="1h 45min" status="done" />
            <Todo title="Todo C" estimation="1h" status="inprogress" />
          </div>
        </div>
      </div>
    );
  }
}
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <section className="col-5 mx-auto">
              <Todos title="Todos" />
            </section>
            <section className="col-5 mx-auto">
              <Todos title="Done" />
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
