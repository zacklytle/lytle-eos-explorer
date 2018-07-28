import React, { Component } from 'react';
import Header from '../Header/Header'
import './App.css';
import { Button, Container } from 'reactstrap';
import {getBlocks} from '../../lib/api'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: false, blocks: []}
    }

    refresh = async () => {
        this.setState({isLoading: true});
        const blocks = await getBlocks();
        console.log(blocks);
        this.setState({isLoading: false, blocks: blocks})
    };

    render() {
        return (
            <div className="App">
                <Header/>
                    <Button color='warning' size='lg' onClick={() => this.refresh()}>
                        {this.state.isLoading ? <i className="fa fa-spinner fa-spin"/> : 'LOAD'}
                    </Button>
            </div>
        );
    }
}

export default App;
