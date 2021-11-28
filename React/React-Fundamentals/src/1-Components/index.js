import React, {useState, useEffect}from "react";
// Components are the base structures of React
// 2 types of Component,Functional Components(stateless before 16.8), Class Components(stateful before 16.8)
class Components extends React.Component{

    render() {
        return <React.Fragment>
            <h1>Lets look at the components</h1>
            {/*Data can be passed through property*/}
            <FComponent type={"Stateless"} message={"Have a nice day"}/>
            <CComponent type={"Stateful"} message={"Have a nice day"}/>
            <StateComponent/>
            <InsideComponent/>
            <BindComponent/>
            <HooksComponent/>
        </React.Fragment>
    }
}

function FComponent(props) {
    return <div className="component">
        {/*Data from property can be taken with "props.propertyName"*/}
        <h3>This is a Function ({props.type}) Component. {props.message}</h3>
    </div>;
}

class CComponent extends React.Component {
    render() {
        return <div className={"component"}>
            {/*Data from property can be taken with "this.props.propertyName"*/}
            <h3> This is a Class ({this.props.type}) Component. {this.props.message}</h3>
        </div>
    }
}

class StateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {changed: false};
    }
    render() {
        return <div className="component">
            {!this.state.changed && <>
                <h3>A component that has changeable state </h3>
                <button onClick={()=> this.setState({changed: true})}>Change The State</button>
            </>}
            {this.state.changed && <h3>State has changed </h3>}
        </div>
    }
}

function InsideComponent() {
    return <div className="component">
        <h3>This has a component inside</h3>
        <FComponent type={"Stateless"}/>
    </div>
}

class BindComponent extends React.Component {
    constructor(props) {
        super(props);

        this.bindV1 = this.bindV1.bind(this);
    }

    /* This is bind via constructor */
    bindV1(){
        console.log("Triggered bindV1")
    };

    /* This is bind via arrow function */
    bindV2 = () => {
        console.log("Triggered bindV2")
    };

    /* `this` is bound within handleClick */
    bindV3(){
        console.log("Triggered bindV3")
    }
    render() {
        return <div className="component">
            <h3>3 way to bind functions (Look at console for changes)</h3>
            <ul style={{listStyle:'none'}}>
                <li>Bind via constructor -> V1</li>
                <li>Bind via arrow function -> V2</li>
                <li>Bind within handleClick -> V3</li>
            </ul>
            <button onClick={this.bindV1}>V1</button>
            <button onClick={this.bindV2}>V2</button>
            <button onClick={(e) => this.bindV3(e)}>V3</button>
        </div>
    }
}

const HooksComponent = (props) => {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("My Name");
    useEffect(() => {
        console.log('This will work on every update');
    });
    useEffect(() => {
        console.log('This will work only when mounted');
    }, []);
    useEffect(() => {
        console.log('This will work only name changed');
    },[name])
    useEffect(() => {
        console.log('This will work only number changed');
    }, [number]);

    return <div className="component">
        <h1> Hi {name}, this is a hooks Component</h1>
        <button onClick={() => setNumber(number+1)}>Click me!</button>
        <button onClick={() => setName(name+number)}>Change me!</button>
        <p>You clicked {number} times</p>
    </div>
}
export default Components;
