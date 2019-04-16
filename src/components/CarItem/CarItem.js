import React from 'react'
import styles from './CartItem.module.scss'

const CarItem = (props) => {
        const ImageTag = props.photo ? 'img' : 'div'
        return (
            <tr className={
                !props.availability ? `${styles.noAv} ${styles.car}`  : styles.car}>
                <td>
                    <div className={styles.wrapper}>
                        <ImageTag
                            src={props.photo}
                            className={props.photo ?
                                `${styles.image}`
                                :
                                `${styles.image} ${styles.imageNone}`
                    }
                            alt={`${props.make} ${props.model} ${props.engine}`}
                        />
                        {`${props.make} ${props.model} ${props.engine}`}
                    </div>
                </td>
                <td className={styles.td}>
                    {props.model}
                </td>
                <td className={styles.td}>
                    {props.engine}
                </td>
                <td className={styles.td}>
                    {props.availability ? 'tak' : 'nie'}
                </td>
                <td className={styles.td}>
                    <button className={styles.button}
                            onClick={() => {props.tgAvailability(props.index)}}>
                        {props.availability ? 'nie' : 'tak'}
                    </button>
                    <button className={styles.button}
                            onClick={() => {props.rmCar(props.index)}}>
                        Usuń
                    </button>
                </td>
            </tr>
        )
}

export default CarItem