import React from 'react';
import ListInput from './Components/ListInput'
import ListItems from './Components/ListItems'
import ListBottomButton from './Components/ListBottomButtons'
import ListTopButton from './Components/ListTopButtons'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      list: []
    }

    this.addToDo = this.addToDo.bind(this);
    this.updateToDo = this.updateToDo.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  addToDo(todoObject) {
    this.setState({ list: this.state.list.concat(todoObject) })
  }

  updateToDo(newToDoList) {
    this.setState({ list: newToDoList })
  }

  changePage(newPage) {
    this.setState({ page: newPage })
  }

  componentDidMount() {
    console.log('check mount')

    let list = window.localStorage.getItem('ToDoList')
    let pageNum = window.localStorage.getItem('PageNum')

    if(list){
      console.log('list mount passed')
      this.setState({list : JSON.parse(list)})
    }

    if(pageNum){
        this.setState({page: JSON.parse(pageNum)})
    }

    else{
      window.localStorage.setItem('ToDoList', JSON.stringify(this.state.list));
      window.localStorage.setItem('PageNum', 0)
    }
  }

  componentDidUpdate() {
    console.log('Check update', this.state.currentPage)
    window.localStorage.setItem('ToDoList', JSON.stringify(this.state.list))
    window.localStorage.setItem('PageNum', JSON.stringify(this.state.page))
  }

  render() {
    let renderItems = <div />;

    if (this.state.list.length > 0) {
      renderItems = <ListItems
        pageNum = {this.state.page}
        toDoList={this.state.list}
        update={this.updateToDo} />
    }

    return (
      <div className='container'>
        <ListInput
          addFunction={this.addToDo}
          toDoList={this.list}
        />
        <ListTopButton
          Page={this.changePage}
        />
        {renderItems}
        <ListBottomButton
          toDoList={this.state.list}
          update={this.updateToDo}
        />

      </div>
    );
  }

}

export default App;
