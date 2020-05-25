import React from 'react';
import { connect } from 'react-redux';
import { createTracker} from '../../../../store/actions/trackerActions' 

class CreateTracker extends React.Component {
    state = {
        name: '',
        fieldsCount: ''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTracker(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h5>Create A New Tracker</h5>
                    <label htmlFor="name">Tracker Name</label>
                    <input onChange={this.handleChange} type="text" id="name" required/>

                    <label htmlFor="fieldsCount">How Many Fields?</label>
                    <input onChange={this.handleChange} type="number" min="1" id="fieldsCount" required/>

                    <div><button type="submit">Create!</button></div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        uid: state.firebase.auth.uid
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTracker: (trackerData) => dispatch(createTracker(trackerData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTracker);
