import * as React from 'react';
import { NavMenu } from './NavMenu';

export class Layout extends React.Component<{}, {}> {
    public render() {
        return (<div id="wrapper">
                    <NavMenu />
                    <div id="page-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
    }
}
