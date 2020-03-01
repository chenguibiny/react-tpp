import React, { Component } from 'react'
import MovieInfo from './components/MovieInfo'
import SeatSelected from './components/SeatSelected'
import SeatSelector from './container/SeatSelector'
// import { Provider} from 'react-redux'
// import {createStore} from 'redux'
// import seatSelect from './reducers/index'
import './Index.css'


// let store = createStore(seatSelect);

class Index extends Component {
    state = {
        selectSeat:[]
    }
    addSeat = (seat) => {
        this.setState(prevState => ({
            selectSeat:[...prevState.selectSeat,seat]
        }))
    }

    removeSeat = (id) => {
        this.setState({
            selectSeat:this.state.selectSeat.filter(seat => seat.id !== id)
        })
    }
    render() {
        const {selectSeat} = this.state;
        return (
            // <Provider store={store}>
                <div className="seat">
                    <div className="tOperator">
                        <i className="tOperator__icon tOperator__icon--blackBack" onClick={() => window.history.back()}></i>
                        万达影院
                        <i className="tOperator__icon tOperator__icon--blackShare"></i>
                    </div>
                    <MovieInfo></MovieInfo>
                    <div className="seat__main">
                        <div className="seat__tip"></div>
                        <div className="seat_graph">
                            <div className="seat__screen">B13屏幕</div>
                            <div className="seat__map">
                                <SeatSelector selectSeat={selectSeat} onAdd={this.addSeat} onRemove={this.removeSeat}></SeatSelector>
                            </div>
                        </div>
                    </div>
                    <SeatSelected data={selectSeat} onRemove={this.removeSeat}></SeatSelected>
                </div>
            // </Provider>

        )
    }
}
export default Index;
