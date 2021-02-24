
import { withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import '../components/design.css'
import pot18 from "./pot18.jpg";
import pot9 from "./pot9.png";
import { MDBMask, MDBView, MDBContainer} from "mdbreact"
import footer from './footer.jfif';
 class Home extends Component {
    go() {
        console.log(' bowbow '+this.props)
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="new">
                 <MDBContainer className="mt-8 md-8">
                <MDBView>
                <img src={pot18} alt="Mercury" /> 
                <MDBMask className="flex-center" overlay="green-strong">
                <p className="black-text">
                    <h1 id="hometext">
                    <b><u>WELCOME TO PLANTER MANAGEMENT SECTION </u></b>
                    </h1>
                </p>
                </MDBMask>
                </MDBView>
                </MDBContainer>
                <footer className = "footer" >
                    <div>
                    All Rights Reserved 2021 @ApalaDas
                        <img src={footer}></img>
                    </div>
                   
                </footer>


                {/* <div className="home3">
                <h1><b>Welcome to Planter Management Section</b></h1>
                </div>
            <div className="home" >
               
            </div>
            <div className="home2"></div> */}
            </div>
            
        )
    }
}

export default Home
