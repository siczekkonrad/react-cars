import React, {Component, Fragment} from 'react'
import '../../index.css'
import CarsList from '../../components/CarsList/CarsList'


class Home extends Component {
    state = {
        cars: []
    }

    componentDidMount() {
        fetch("./data.json")
            .then(res => res.json())
            .then(json =>
                this.setState({
                    cars: [...json.offers],
                })
            );
    }

    removeCar = (index) => {
        this.setState(prevState => ({
            cars: [...prevState.cars].filter((x, i) => i !== index),
        }));
    }

    toggleCarAvailability = (index) => this.setState(prevState => (
            {...prevState.cars[index].availability = !prevState.cars[index].availability}
        )
    )

    render() {
        return (
            <Fragment>
                <CarsList
                    cars={this.state.cars}
                    removeCar={this.removeCar}
                    toggleCarAvailability={this.toggleCarAvailability}
                />
            </Fragment>
        )
    }
}

export default Home