import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/actions'
import footer from './footer.jfif';
class AddPlanter extends Component {
    constructor(props) {
        super(props)
            this.planterId=React.createRef();
            this.plantCapacity = React.createRef();
			this.holes = React.createRef();
			this.planterStock = React.createRef();
			this.planterCost = React.createRef();
			this.planterShape = React.createRef();
			this.planterColor = React.createRef();
			this.height = React.createRef(); 
    }
    
    componentDidMount() {
        this.props.clearState()
    }
    componentDidUpdate() {
        let check = this.props.returnedMessage.split(' ')
        if (check[0] === 'Successfully') { 
            // setTimeout(() => {this.props.router.push('/plantersViewAll')}, 2000)
            // setTimeout(() => {this.props.hashHistory.push('/plantersViewAll')}, 2000)
             setTimeout(() => {this.props.history.push('/plantersViewAll')}, 2000)
        }
    }

    add() {

        let newPlanter = {
            planterId: this.planterId.current.value,
            plantCapacity :this.plantCapacity.current.value,
			holes : this.holes.current.value,
			planterStock : this.planterStock.current.value,
			planterCost: this.planterCost.current.value,
			planterShape : this.planterShape.current.value,
			planterColor : this.planterColor.current.value,
			height : this.height.current.value
            
        }
        this.props.onAddPlanter(newPlanter)
    }


    update() {
        let planter = {
            planterId: this.planterId.current.value,
            plantCapacity :this.plantCapacity.current.value,
			holes : this.holes.current.value,
			planterStock : this.planterStock.current.value,
			planterCost: this.planterCost.current.value,
			planterShape : this.planterShape.current.value,
			planterColor : this.planterColor.current.value,
			height : this.height.current.value
            
        }
        this.props.onUpdatePlanter(planter.planterId,planter)

    }
    render() {
        return (
            <div>
                <div className="root-div">
                    <div className="mb-3 add-planter ">
                        <label>Planter ID: </label>
                        <input type="number" ref={this.planterId} pattern="[0-9]+" className="form-control" id="planterId" />
                    </div>

                    <div className="mb-3 add-planter">
                    <label>Planter Capacity: </label>
                        <input type="number" ref={this.plantCapacity} className="form-control" id="planterCapacity" placeholder=" in Litres " />
                    </div>

                    <div className="mb-3 add-planter">
                    <label>No of Holes: </label>
                        <input type="number" ref={this.holes} className="form-control" id="holes"  />
                    </div>

                    <div className="mb-3 add-planter">
                    <label>Planter Stock: </label>
                        <input type="number" ref={this.planterStock} className="form-control" id="planterStock" />
                    </div>

                    <div className="mb-3 add-planter">
                        <label>Planter Cost: </label>
                        <input type="number" ref={this.planterCost} className="form-control" id="planterCost" placeholder="in Rupees" />
                    </div>

                    <div className="mb-3 add-planter">
                        <label>Planter Shape: </label>
                        <input type="text" ref={this.planterShape} className="form-control" id="planterShape"  />
                    </div>

                    <div className="mb-3 add-planter">
                    <label>Planter Color: </label>
                        <input type="text" ref={this.planterColor} className="form-control" id="planterColor" />
                    </div>
                    <div className="mb-3 add-planter">
                        <label>Planter Height: </label>
                        <input type="number" ref={this.height} className="form-control" id="height" placeholder=" in cm" />
                    </div>

                    <button type="button" onClick={this.add.bind(this)} className="btn btn-success add-button">Add</button>
                    <button type="button" onClick={this.update.bind(this)} className="btn btn-success add-button">Update</button>

                </div>
                <div className={(this.props.returnedMessage === '') ? '' : "alert "} role="alert">
                    {this.props.returnedMessage}
                </div>

                <div className = "footer1" >
                    <div>
                    All Rights Reserved 2021 @ApalaDas
                        <img src={footer}></img>
                    </div>
                   
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        returnedMessage: state.returnedMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddPlanter: (planter) => {
            dispatch(actionCreators.addPlanter(planter))
        },
        onUpdatePlanter: (planterId,newPlanter) => {
            dispatch(actionCreators.updatePlanter(planterId, newPlanter))
        },
        clearState: () => {
            dispatch(actionCreators.clearState())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddPlanter))

