import React from 'react';

class ListItems extends React.Component {

    constructor(props) {
        super(props);
    }

    handleCheck(index) {
        let copy = this.props.toDoList
        copy[index].done = !copy[index].done;
        this.props.update(copy);
    }

    handleDelete(index) {
        let copy = this.props.toDoList;
        copy.splice(index, 1);
        this.props.update(copy);
    }

    renderList() {

    }

    render() {
        return (
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