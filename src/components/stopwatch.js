import React , { Component } from 'react';
import Time from './formattime';

class Stopwatch extends Component {

    constructor(props){
        super(props);
        this.state ={ status: 'stopped',
                 start:  null,
                    elapsed: 0}

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.update = this.update.bind(this);
        this.reset = this.reset.bind(this);
    }

    start(){
        const { start , elapsed} = this.state;
        let newStart = new Date().getTime();
        if(start !== null){
            newStart = newStart - elapsed;
        }
        this.setState({
            status :  'running',
            start : newStart
        });
        setTimeout(this.update, 10);
    }

    stop(){
        this.setState({
            status : 'stopped'
        });
    }

    update(){
        const { start, status} = this.state;
        if (this.state.status === 'running'){

            // console.log('this.state.status',this.state.status);
            this.setState({
                elapsed : new Date().getTime() - start
            });

            setTimeout(this.update, 100);
        }

    }

    reset(){
        this.setState({
            status: 'reseted',
            start : null,
            elapsed: 0
        });
    }

    render(){
        const { elapsed, status} = this.state;
        
        return(
        <div className="jumbotron">
            <h1 className="display-3"><Time elapsed={elapsed}/></h1>
            <hr className="my-3"></hr>
            <p className="lead text-center">  {status} </p>
            <button className = "btn btn-outline-success mx-3" onClick={this.start}>Start</button>
            <button className = "btn btn-ouline-danger mx-3" onClick={this.stop}>Stop</button>
            <button className = "btn btn-ouline-warning mx-3" onClick={this.reset}>Reset</button>
        </div>
        )

    }
}

export default Stopwatch;