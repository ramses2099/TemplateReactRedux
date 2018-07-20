import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return (<nav className="navbar navbar-dark bg-inverse navbar-fixed-top">
                    <div className="navbar-header">
                        <button className="navbar-toggler hidden-sm-up pull-sm-right" type="button" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            &#9776;
                        </button>
                        <a className="navbar-brand" href="index.html">SB Admin BS 4</a>
                    </div>
                    <ul className="nav navbar-nav top-nav navbar-right pull-xs-right">
                        <li className="nav-item buy-now">

                        </li>
                        <li className="dropdown nav-item">
                            <a className="nav-link dropdown-toggle" href="javascript:;" id="dropdownMenu4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-envelope"></i> <b className="caret"></b><span className="sr-only">(current)</span></a>
                            <ul className="dropdown-menu message-dropdown">
                                <li className="dropdown-item message-preview">
                                    <a href="javascript:;">
                                        <div className="media">
                                            <span className="media-left">
                                                <img className="media-object" src="" alt="" />
                                            </span>
                                            <div className="media-body">
                                                <h5 className="media-heading"><strong>John Smith</strong>
                                                </h5>
                                                <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="dropdown-item message-preview">
                                    <a href="javascript:;">
                                        <div className="media">
                                            <span className="media-left">
                                                <img className="media-object" src="" alt="" />
                                            </span>
                                            <div className="media-body">
                                                <h5 className="media-heading"><strong>John Smith</strong>
                                                </h5>
                                                <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="dropdown-item message-preview">
                                    <a href="javascript:;">
                                        <div className="media">
                                            <span className="media-left">
                                                <img className="media-object" src="" alt="" />
                                            </span>
                                            <div className="media-body">
                                                <h5 className="media-heading"><strong>John Smith</strong>
                                                </h5>
                                                <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="dropdown-item message-footer">
                                    <a href="javascript:;">Read All New Messages</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown nav-item">
                            <a href="javascript:;" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-bell"></i> <b className="caret"></b><span className="sr-only">(current)</span></a>
                            <ul className="dropdown-menu alert-dropdown">
                                <li className="dropdown-item">
                                    <a href="javascript:;">Alert Name <span className="label label-default"> Alert Badge</span></a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="javascript:;">Alert Name <span className="label label-primary"> Alert Badge</span></a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="javascript:;">Alert Name <span className="label label-success">Alert Badge</span></a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="javascript:;">Alert Name <span className="label label-info"> Alert Badge</span></a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="javascript:;">Alert Name <span className="label label-warning"> Alert Badge</span></a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="javascript:;">Alert Name <span className="label label-danger"> Alert Badge</span></a>
                                </li>
                                <li className="dropdown-divider"></li>
                                <li className="dropdown-item">
                                    <a href="javascript:;">View All</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown nav-item">
                            <a href="javascript:;" className="nav-link dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i> John Smith <b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item">
                                    <a href="javascript:;"><i className="fa fa-fw fa-user"></i> Profile</a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="javascript:;"><i className="fa fa-fw fa-envelope"></i> Inbox</a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="javascript:;"><i className="fa fa-fw fa-gear"></i> Settings</a>
                                </li>
                                <li className="divider"></li>
                                <li className="dropdown-item">
                                    <a href="javascript:;"><i className="fa fa-fw fa-power-off"></i> Log Out</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="collapse navbar-collapse navbar-toggleable-sm navbar-ex1-collapse">
                        <ul className="nav navbar-nav side-nav list-group">
                            <li className="list-group-item">
                                <NavLink exact to={'/'} activeClassName='active'>
                                    <i className="fa fa-fw fa-dashboard"></i> Home
                                </NavLink>
                            </li>
                            <li className="list-group-item">
                                <NavLink to={'/counter'} activeClassName='active'>
                                    <i className="fa fa-fw fa-bar-chart-o"></i> Counter
                                </NavLink>
                            </li>
                            <li className="list-group-item">
                                <NavLink to={'/fetchdata'} activeClassName='active'>
                                    <i className="fa fa-fw fa-table"></i> Fetch data
                                </NavLink>
                            </li>
                            <li className="list-group-item">
                                <a href="forms.html"><i className="fa fa-fw fa-edit"></i> Forms</a>
                            </li>
                            <li className="list-group-item">
                                <a href="bootstrap-elements.html"><i className="fa fa-fw fa-desktop"></i> Bootstrap Elements</a>
                            </li>
                            <li className="list-group-item">
                                <a href="bootstrap-grid.html"><i className="fa fa-fw fa-wrench"></i> Bootstrap Grid</a>
                            </li>
                            <li className="list-group-item">
                                <a href="javascript:;" data-toggle="collapse" data-target="#demo"><i className="fa fa-fw fa-arrows-v"></i> Dropdown <i className="fa fa-fw fa-caret-down"></i></a>
                                <ul id="demo" className="list-group collapse">
                                    <li className="list-group-item">
                                        <a href="javascript:;">Dropdown Item</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="javascript:;">Dropdown Item</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="list-group-item">
                                <a href="blank-page.html"><i className="fa fa-fw fa-file"></i> Blank Page</a>
                            </li>
                            <li className="list-group-item">
                                <a href="index-rtl.html"><i className="fa fa-fw fa-dashboard"></i> RTL Dashboard</a>
                            </li>
                            <li className="list-group-item more-themes">
                                <a href="">Buy More Themes</a>
                            </li>
                        </ul>
                    </div>
            </nav>);
    }
}
