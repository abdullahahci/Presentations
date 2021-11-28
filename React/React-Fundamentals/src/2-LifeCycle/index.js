import React from "react";

/* Creation lifecycle methods
/* constructor()
* getDerivedStateFromProps()
* render()
* componentDidMount()
* */

/* Update lifecycle methods
* getDerivedStateFromProps()
* shouldComponentUpdate()
* render()
* getSnapshotBeforeUpdate()
* componentDidUpdate()
* */

class Lifecycle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
        console.log("Component mounted")
    }
    /* Works every time before render */
    static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol };
    }
    render() {
        return (
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
    }
}
export default Lifecycle;
