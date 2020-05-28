import React, { useState } from 'react';

function DeleteButtonWithConfirmation(props) {
    const [deleteRequest, setDeleteRequest] = useState(false);

    const handleDeleteRequest = () => {
        if(deleteRequest)
            props.deleteFunction(props.itemID);
        else
            setDeleteRequest(true);
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