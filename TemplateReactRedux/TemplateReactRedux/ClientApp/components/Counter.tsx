import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as CounterStore from '../store/Counter';
import * as WeatherForecasts from '../store/WeatherForecasts';

type CounterProps =
    CounterStore.CounterState
    & typeof CounterStore.actionCreators
    & RouteComponentProps<{}>;

class Counter extends React.Component<CounterProps, {}> {
    public render() {
        return (<div>
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">
                                Counter
                                        <small>Counter</small>
                            </h1>
                            <ol className="breadcrumb">
                                <li>
                                    <i className="fa fa-dashboard"></i>  <a href="index.html">Dashboard</a>
                                </li>
                                <li className="active">
                                    <i className="fa fa-file"></i>Counter
                                    </li>
                            </ol>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Counter</h1>

                            <p>This is a simple example of a React component.</p>

                            <p>Current count: <strong>{this.props.count}</strong></p>

                            <button onClick={() => { this.props.increment() }}>Increment</button>
                        </div>
                    </div>
                </div>);
    }
}

// Wire up the React component to the Redux store
export default connect(
    (state: ApplicationState) => state.counter, // Selects which state properties are merged into the component's props
    CounterStore.actionCreators                 // Selects which action creators are merged into the component's props
)(Counter) as typeof Counter;