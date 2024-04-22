import React from "react";
import AddressingModule from "../modules/AddressingModule";
import "./Subnet.css";

class Subnet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hosts: Number(this.props.hosts),
            address: String(this.props.info.address),
            cidr: Number(this.props.info.cidr),
            subnet_mask: String(this.props.info.subnetMask)
        };
    }

    componentDidMount() {
        this.setState({
            default_gateway: AddressingModule.getDefaultGateway(this.state.address),
            broadcast_address: AddressingModule.getBroadcastAddress(this.state.address, this.state.cidr),
            last_host_address: AddressingModule.getLastHostAddress(AddressingModule.getBroadcastAddress(this.state.address, this.state.cidr)),
            addresses_available: AddressingModule.getAvailableHostAddresses(this.state.cidr)
        });
    }

    render() {
        return (
            <div className='ui raised segment' id='subnet_div'>
                <div className='active title'>
                        <span>
                            <strong>Hosts: </strong> <strong style={{color:"LightCoral"}}>{this.state.hosts}</strong> | <strong>Address: </strong> <strong style={{color:"LawnGreen"}}>{this.state.address}</strong>  | <strong>Subnet
                            Mask: </strong>{this.state.subnet_mask} | <strong>CIDR: </strong>{this.state.cidr}</span>
                    {/* <i className='dropdown icon' id='dropdown_icon'/> */}
                </div>
                <div className='active content'>
                    <p><strong>Default Gateway: </strong> <strong style={{color:"Cyan"}}>{this.state.default_gateway}</strong> | <strong>Last Host
                        Address: </strong> <strong style={{color:"Gold"}}>{this.state.last_host_address}</strong> | <strong>Broadcast
                        Address: </strong> <strong style={{color:"red"}}>{this.state.broadcast_address}</strong>  </p>
                    <p><strong>Available host addresses: </strong><strong style={{color:"MediumSpringGreen"}}>{this.state.addresses_available}</strong></p>
                </div>
            </div>
        );
    }
}

export default Subnet;
