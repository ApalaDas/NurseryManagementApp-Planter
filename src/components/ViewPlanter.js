import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/actions'
import 'bootstrap/dist/css/bootstrap.min.css';
import footer from './footer.jfif';
class ViewPlanter extends Component {

    componentDidMount() {
        this.props.onGetPlanters()
    }
    delete(id) {
        this.props.onDeletePlanter(id);
    }
    render() {
        let planterList = this.props.planterList.map((planter, index) => {
            return (
                <tr key={index}>
                    <th>{planter.planterId}</th>
                    <td>{planter.plantCapacity}</td>
                    <td>{planter.holes}</td>
                    <td>{planter.planterStock}</td>
                    <td>{planter.planterCost}</td>
                    <td>{planter.planterShape}</td>
                    <td>{planter.planterColor}</td>
                    <td>{planter.height}</td>
                    <td>
                        <button type="button"  onClick={this.delete.bind(this, planter.planterId)} className="btn btn-danger ">DELETE</button>
                    </td>
                </tr>
                
            )
        })
        return (
            <div>
            <div className="planter-table-div ">
                <div className="retmsg">
                <h2>{this.props.returnedMessage}</h2>

                </div>
               
                <table className="planter-table">
                    <thead>
                        <tr>
                            <th scope="col">Planter Id</th>
                            <th scope="col">Planter Capacity</th>
                            <th scope="col">Holes</th>
                            <th scope="col">Stock Available</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Shape</th>
                            <th scope="col">Color</th>
                            <th scope="col">Height</th>
                            
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {planterList}
                    </tbody>
                </table>
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
        planterList: state.planterList,
        returnedMessage: state.returnedMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetPlanters: () => {
            dispatch(actionCreators.getAllPlanters())
        },
        onDeletePlanter: (planterId) => {
            dispatch(actionCreators.deletePlanter(planterId))
        },
        clearState: () => {
            dispatch(actionCreators.clearState())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ViewPlanter))