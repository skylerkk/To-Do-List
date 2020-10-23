import React from 'react';

class ListTopButtons extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            // Make a button that cahgnes the page
            <div className='mx-auto pb-4 text-center'>
                <button
                    className='btn btn-primary'
                    onClick={() => this.props.Page(0)}
                > All </button>
                <button
                    className='btn btn-primary mx-2'
                    onClick={() => this.props.Page(1)}
                > In Progress</button>
                <button
                    className='btn btn-primary'
                    onClick={() => this.props.Page(2)}
                > Done</button>
            </div>
        )
    }

}

export default ListTopButtons;