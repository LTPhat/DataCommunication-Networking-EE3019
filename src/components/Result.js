import React from "react";
import "./App.css";
import Subnet from "./Subnet";

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: this.props.result,
            hosts: this.props.hosts,
            network_address: this.props.network_address,
            cidr: this.props.cidr,
            subnet_mask: this.props.subnet_mask
        };
        this.handleGoBackAction = this.handleGoBackAction.bind(this);
    }

    componentDidMount() {
    }

    handleGoBackAction = () => {
        window.location.replace("/vlsm/");
    }

    render() {
        return (
            <div id='main_div'>
                <h3 className='ui dividing header' style={{color: "Gold", fontWeight: "bold", fontSize: "30px"}}>VLSM Result</h3>
                <br/>
                <div className='ui raised segment' id='major_network'>
                    <p><strong>Network Address: </strong> <strong style={{color: 'green'}}>{this.state.network_address}/{this.state.cidr}</strong></p>
                    <p><strong>Subnet Mask: </strong>{this.state.subnet_mask}</p>
                </div>
                <div className='ui raised segment'>
                    <div className='ui accordion'>
                        {
                            this.state.result.map((subnet, i) => {
                                return (
                                    <Subnet key={i} info={subnet}
                                            hosts={this.state.hosts[i]}/>
                                );
                            })
                        }
                    </div>
                </div>
                <br/>
                <div id='buttons_div'>
                    <span className='ui button' onClick={this.handleGoBackAction}>
                        <i className='left arrow icon'/>
                        Complete!
                    </span>
                </div>
            </div>
        );
    }
}

export default Result;
