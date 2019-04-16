import React from 'react'
import styles from './CarsList.module.scss'
import CarItem from '../CarItem/CarItem'

const CarsList = (props) => {
    
        const tableHeaders = [
            'Nazwa',
            'Model',
            'Silnik',
            'Dostępność',
            'Akcje'
        ]
        
        return (
            <table className={styles.carsTable} >
                <thead className={styles.carsTable__header}>
                    <tr>
                        {tableHeaders.map(tableHeader => (
                            <th key={tableHeader} className={styles.th}>{tableHeader}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.cars.map((car, index) => (
                        <CarItem
                            key={index}
                            index={index}
                            {...car}
                            rmCar={props.removeCar}
                            tgAvailability={props.toggleCarAvailability}
                        />
                    ))}
                </tbody>
            </table>
        )
    
}

export default CarsList
