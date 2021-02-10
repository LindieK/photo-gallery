import React from 'react'

const Tab = (props) => {
    let classValue = props.isActive ? 'active' : '';
    return (
        <li className={classValue} onClick={props.onTabClick}>
            {props.content}
        </li>
    )
}

export default Tab
