import React from 'react';

class ListBottomButtons extends React.Component {

    constructor(props) {
        super(props);
    }


    //change all done values to true
    markDone() {
        let copy = this.props.toDoList;
        copy.map((item) => {
            item.done = true;
        })
        this.props.update(copy);
    }

    //reset all done values to false
    resetCheck() {
        let copy = this.props.toDoList;
        copy.map((item) => {
            item.done = false;
        })
        this.props.update(copy);
    }

    //checks all done in the list then deletes them
    deleteDone() {
        let copy = this.props.toDoList;
        for (let i = 0; i < copy.length; i++) {
            if (copy[i].done === true) {
                copy.splice(i, 1);
                i--;
            }
        }
        this.props.update(copy);
    }

    render() {
        return (
            //Display number of taks
            //All the bottom buttons with their onClick functions defined above
            <div>
                <div className='pt-3'>
                    <h4 className='text-center'>Number of Task: {this.props.toDoList.length}</h4>
                </div>
                <div className='text-center py-2'>
                    <button
                        onClick={() => this.markDone()}
                        className='btn btn-primary'
                    >Mark All Done</button>
                    <button
                        onClick={() => this.deleteDone()}
                        className='btn btn-danger mx-3'
                    >Delete All Done</button>
                    <button
                        onClick={() => this.resetCheck()}
                        className='btn btn-primary'
                    >Reset Check</button>
                </div>
            </div>
        )
    }
}

export default ListBottomButtons;