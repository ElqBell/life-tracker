import React, { useState } from 'react';

function DeleteButtonWithConfirmation(props) {
    const [deleteRequest, setDeleteRequest] = useState(false);

    const handleDeleteRequest = () => {
        if(deleteRequest){
            console.log('func');
            props.deleteFunction(props.itemID);
        }
        else {
            console.log('to true');
            setDeleteRequest(true);
        }
    }
    return (
        <button onClick={handleDeleteRequest} type="button">
            {deleteRequest ?
            'Are you sure?' :
            'Delete'}
        </button>
    )
}

export default DeleteButtonWithConfirmation;