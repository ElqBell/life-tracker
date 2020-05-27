import React from 'react';
import { connect } from 'react-redux';
import { addFieldData } from '../../../../../store/actions/trackerActions';

class AddData extends React.Component {
    state = {
        fieldDate: null,
        fieldValues: []
    }

    handleChange = (e) => {
        if(e.target.id === 'fieldDate')
            this.setState({ [e.target.id]: e.target.value });
        else {
            let fieldValues = this.state.fieldValues;
            fieldValues[e.target.id.toString()] = e.target.value;
            this.setState({fieldValues});
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addFieldData({
           ...this.state,
           trackerID: this.props.trackerID
        });
    }

     render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="fieldDate">Date:</label>
                <input onChange={this.handleChange} type="date" id="fieldDate" name="fieldDate"/>
    
                <label htmlFor="value1">Value:</label>
                <input onChange={this.handleChange} type="text" id="value1" name="fieldValue1"/>
    
                <div><button type="input">Add Data</button></div>
            </form>
        )
     }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFieldData: (credentials) => dispatch(addFieldData(credentials))
    }
};

export default connect(null, mapDispatchToProps)(AddData);