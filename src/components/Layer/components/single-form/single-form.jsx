import React from 'react';
import global from '../../../../common-style/global.module.scss';
import styles from '../SingleUser/style.module.scss';


const SingleForm = ({isEdit, label, value}) => {
    const div = () => {
        return (
            <li className={global.list_item}><span className={styles.item}>{label}:</span> {value}</li>
        )
    }

    const inp = () => {
        return (
            <input className={global.list_item} type="text" value={ value } />
        )
    }

    return (
        <>
            {
                isEdit ? inp() : div()
            }
        </>
    )
}

export default SingleForm
