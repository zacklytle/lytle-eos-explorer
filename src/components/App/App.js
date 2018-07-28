import React, { Component } from 'react'
import moment from 'moment'
import Header from '../Header/Header'
import Blocks from '../Blocks/Blocks'
import './App.css';
import { Button, Navbar, NavbarBrand } from 'reactstrap'
import {getBlocks} from '../../lib/api'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: false, blocks: []}
    }

    componentDidMount() {
        this.refresh();
    }

    refresh = async () => {
        this.setState({isLoading: true});
        const res = await getBlocks();
        this.setState({isLoading: false, blocks: res.blocks, headBlock: res.headBlock})
    };

    render() {
        return (
            <div className="App">
                <Header/>
                <Navbar>
                    <Button color='warning' size='lg' onClick={() => this.refresh()}>
                        {this.state.isLoading ? <i className="fa fa-spinner fa-spin"/> : 'LOAD'}
                    </Button>
                    <NavbarBrand>
                        Loaded blocks {this.state.headBlock - 9} through {this.state.headBlock} at {moment().toString()}
                    </NavbarBrand>
                </Navbar>
                <Blocks blocks={this.state.blocks}/>
            </div>
        );
    }
}

export default App;
