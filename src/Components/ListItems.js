import React from 'react';

class ListItems extends React.Component {

    constructor(props) {
        super(props);
    }

    //Reverse the done value and call update
    handleCheck(index) {
        let copy = this.props.toDoList
        copy[index].done = !copy[index].done;
        this.props.update(copy);
    }

    //if this is click then delete this from the array and call update
    handleDelete(index) {
        let copy = this.props.toDoList;
        copy.splice(index, 1);
        this.props.update(copy);
    }

    renderList() {

    }

    render() {
        return (
            //depending on the page swap between each thing
            //map through each list item and have a input field with a checkBox
            //display the name of the ToDo
            //Add the delete button
            <ul className='list-group mx-auto'>
                {this.props.toDoList.map((item, index) => {
                    if (this.props.pageNum === 0) {
                        return (
                            <li className='list-group-item  py-3' key={index}>
                                <input
                                    className='ml-auto float-left'
                                    name='checkbox'
                                    type='checkbox'
                                    onChange={() => this.handleCheck(index)}
                                    checked={item.done}
                                    key={index}
                                />

                                <p className='text-center ml-5'
                                    style={{ display: 'inline' }}
                                > {item.name} </p>

                                <button
                                    className='btn btn-primary px-5 float-right'
                                    onClick={() => this.handleDelete(index)}
                                >delete</button>
                            </li>
                        )
                    }
                    else if (this.props.pageNum === 1 && item.done === false) {
                        return (
                            <li className='list-group-item py-3' key={index}>
                                <input
                                    className='ml-auto float-left'
                                    name='checkbox'
                                    type='checkbox'
                                    onChange={() => this.handleCheck(index)}
                                    checked={item.done}
                                    key={index}
                                />

                                <p className='text-center ml-5'
                                    style={{ display: 'inline' }}
                                > {item.name} </p>

                                <button
                                    className='btn btn-primary px-5 float-right'
                                    onClick={() => this.handleDelete(index)}
                                >delete</button>
                            </li>
                        )
                    }
                    else if (this.props.pageNum === 2 && item.done === true) {
                        return (
                            <li className='list-group-item py-3' key={index}>
                                <input
                                    className='ml-auto float-left'
                                    name='checkbox'
                                    type='checkbox'
                                    onChange={() => this.handleCheck(index)}
                                    checked={item.done}
                                    key={index}
                                />

                                <p className='text-center ml-5'
                                    style={{ display: 'inline' }}
                                > {item.name} </p>

                                <button
                                    className='btn btn-primary px-5 float-right'
                                    onClick={() => this.handleDelete(index)}
                                >delete</button>
                            </li>
                        )
                    }
                })}

            </ul>
        )
    }
}

export default ListItems;