import React, {Component} from "react";

class Clicker extends Component {
    constructor(props) {
        super();
        this.state = {count: 0};
    }

    add_count_handler = () => {
        this.setState((prevState) => {
            return {count: prevState.count + 1}
        });
    };

    minus_count_handler = () => {

        this.setState((prevState) => {

            return {
                count: prevState.count - 1
            }

        });

    };

    reset_count_handler = () => {

        this.setState((prevState) => {
            return {count: 0}
        });

    };

    render() {
        return (
            <React.Fragment>
                <button onClick={this.add_count_handler}> add</button>
                <button onClick={this.reset_count_handler}>refresh</button>
                <button onClick={this.minus_count_handler}> minus</button>
                <p>{this.state.count}</p>
            </React.Fragment>
        );
    }
}

export default Clicker;