import React, {Component} from 'react'
import moment from 'moment'
import './Blocks.css'
import {Table, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

class Blocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    generateRow = (block) => {
        return (
            <tr key={block.id} onClick={this.toggle}>
                <td>{block.block_num}</td>
                <td>{block.id}</td>
                <td>{moment(block.timestamp).toString()}</td>
                <td>{block.transactions.length}</td>
                {this.renderBlockDetails(block)}
            </tr>

        )
    };

    renderTableBody = (blocks) => {
        const content = blocks.map(this.generateRow);

        return (
            <tbody>
                {content}
            </tbody>
        )
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    renderBlockDetails = (block) => {
        return (
            <Modal isOpen={this.state.modal} backdrop={false} toggle={this.toggle} className='BlockModal'>
                <ModalHeader toggle={this.toggle}>Block {block.block_num}</ModalHeader>
                <ModalBody>
                    <Table>
                        <tbody>
                            <tr><td>Producer</td><td>{block.producer}</td></tr>
                            <tr><td>Producer Sig</td><td>{block.producer_signature}</td></tr>
                            <tr><td>Confirmed</td><td>{block.confirmed}</td></tr>
                            <tr><td>Action MRoot</td><td>{block.action_mroot}</td></tr>
                            <tr><td>Schedule Version</td><td>{block.schedule_version}</td></tr>
                            <tr><td>Ref Block Prefix</td><td>{block.ref_block_prefix}</td></tr>
                        </tbody>
                    </Table>
                </ModalBody>
            </Modal>
        )
    }



    render() {
        return (

            <Table striped hover>
                <thead>
                <tr>
                    <th>Block Num</th>
                    <th>Hash</th>
                    <th>Timestamp</th>
                    <th># Actions</th>
                </tr>
                </thead>
                {this.renderTableBody(this.props.blocks)}
            </Table>
        )
    }

}

export default Blocks