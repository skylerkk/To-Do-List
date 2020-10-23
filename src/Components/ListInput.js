import React from 'react';

class ListInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.submitFunc = this.submitFunc.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    submitFunc(e) {
        e.preventDefault();
        if (this.state.inputValue && this.state.inputValue !== '') {
            let item = {
                done: false,
                name: this.state.inputValue
            }
            this.props.addFunction(item);
            this.setState({ inputValue: '' });
        }
    }

    inputChange(e) {
        this.setState({ inputValue: e.target.value })
    }

    render() {
        return (
            <div className='row col-12 pt-5 pb-2'>
                <form className='mx-auto form-inline' onSubmit={this.submitFunc}>
                <div className='form-group mb-2'>
                    <h3 className='mr-3'>
                        To Do:
                    </h3>
                    <input className='mr-3' type='text' name='input' placeholder='Enter Task' value={this.state.inputValue} onChange={this.inputChange} />
                    <button className='btn btn-primary' type='submit' onClick={this.submitFunc}> Add to List</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ListInput;