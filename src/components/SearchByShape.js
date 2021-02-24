import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actions'
import footer from './footer.jfif';
class SearchByShape extends Component {

    constructor(props) {
        super(props)
    
        this.planterShape=React.createRef();

    }
    search() {
        this.props.onSearchByShape(this.planterShape.current.value)
     }

    componentDidMount(){
         this.props.clearState()
     }
    render() {
        let plantersList = this.props.planterList.map((planter, index) => {
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
                </tr>
                
            )
        })
        return (
            <div>
                 <div className=" input-search-name ">
                    <input type="text" ref={this.planterShape} className="form-control" id="planterShape" placeholder="Enter desired shape" />
               
                    <button className="btn btn-success" onClick={this.search.bind(this)}><strong>SEARCH</strong></button>
                </div>

                <hr />
                <div className="planter-table-div ">
                <div className="retmsg">
                {/* <h2>{this.props.returnedMessage}</h2> */}

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
                        </tr>
                    </thead>
                    <tbody>
                        {plantersList}
                    </tbody>
                </table>
                </div>
                <footer className = "footer" >
                    <div>
                    All Rights Reserved 2021 @ApalaDas
                        <img src={footer}></img>
                    </div>
                   
                </footer>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        returnedMessage: state.returnedMessage,
        planterList: state.planterList
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchByShape: (planterShape) => dispatch(actionCreators.viewPlanterByShape(planterShape)),
        clearState: () =>    dispatch(actionCreators.clearState())
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchByShape)
