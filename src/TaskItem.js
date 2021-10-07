import React from "react";

export const TaskItem = ({isChecked, taskName, onTaskChange}) => {
    const styleOfTheComponent = {
        textDecoration: isChecked ? "Line-through" : "",
    };

    return (
        <li>
            <input onChange={onTaskChange} checked={isChecked} type="checkbox"/>
            <span style={styleOfTheComponent}>{taskName}</span>
        </li>
    );
};