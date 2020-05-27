import React from 'react';
import DeleteButtonWithConfirmation from '../../../../deleteButtonWithConfirmation/DeleteButtonWithConfirmation';

function DayDataDetails(props) {
    const { tracker, trackedData, fieldNames } = props;
    const daysData = [];
    if(trackedData) {
        for (let i = 0; i < trackedData.length; i++) {
            const currentDay = { id: trackedData[i].id, values: [] };
            for (let j = 0; j < fieldNames.length - 1; j++)
                currentDay['values'].push(trackedData[i][`value${j + 1}`]);
            daysData.push(currentDay);
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
                                                {field}
                                            </td>
                                        )
                                    }
                                <td><button>Edit</button></td>
                                <td>
                                    <DeleteButtonWithConfirmation
                                        deleteFunction={props.deleteTrackedDay}
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
