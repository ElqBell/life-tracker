import React, { useState } from 'react';
import DeleteButtonWithConfirmation from '../../../../deleteButtonWithConfirmation/DeleteButtonWithConfirmation';

function DayDataDetails(props) {
    const { tracker, trackedData, fieldNames, deleteTrackedDay } = props;
    const daysData = [];
    if(trackedData) {
        for (let i = 0; i < trackedData.length; i++) {
            const currentDay = { id: trackedData[i].id, values: [] };
            for (let j = 0; j < fieldNames.length; j++)
                currentDay['values'].push(trackedData[i][`value${j + 1}`]);
            daysData.push(currentDay);
        }
    }

    const [editStatus, setEditStatus] = useState(false);
    const [editDayID, setEditDayID] = useState(null);

    const handleEdit = (e) => {
        if(editStatus) {
            setEditDayID(null);
            setEditStatus(false);
        }
        else {
            const splitID = e.target.id.split('_');
            setEditDayID(splitID[1]);
            setEditStatus(true);
        }
    }

    return (
        <React.Fragment>
            <thead>
                <tr>
                    <th>Date</th>
                    {fieldNames.map(name => <th key={name}>{name}</th>)}
                </tr>
            </thead>
            <tbody>
                {
                    daysData.map(day => {
                        return (
                            <tr key={day.id}>
                                <td>{day.id}</td>
                                    {
                                        day.values.map((field, index) =>
                                            <td key={`${day.id}-field${index}`}>
                                                {
                                                    day.id === editDayID ?
                                                        <input
                                                            type="text"
                                                            value={field}
                                                        />
                                                        : <input
                                                            type="text"
                                                            value={field}
                                                            readOnly
                                                        />
                                                    }
                                            </td>
                                        )
                                    }
                                <td>
                                    <button onClick={handleEdit} type="button" id={`editButton_${day.id}`}>
                                        {editStatus && day.id === editDayID ?
                                        'Submit' :
                                        'Edit'}
                                    </button>
                                </td>
                                <td>
                                    <DeleteButtonWithConfirmation
                                        deleteFunction={deleteTrackedDay}
                                        itemID={ { dayID: day.id, trackerID: tracker.id } }
                                    />
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </React.Fragment>
    )
}

export default DayDataDetails;
