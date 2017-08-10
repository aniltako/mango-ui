import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';

class Header extends Component {

    constructor(props) {
		super(props);
        this.state = {
			dropdownOpen: false, 
            user: {
              firstName: '',
              lastName: '',
            },
		};
	}

	handleLogoutClick = (e) => {
		e.preventDefault();
		this.props.history.push('/login');
	}

	toggle =() => {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	sidebarToggle(e) {
		e.preventDefault();
		document.body.classList.toggle('sidebar-hidden');
	}

	mobileSidebarToggle(e) {
		e.preventDefault();
		document.body.classList.toggle('sidebar-mobile-show');
	}

	render() {

		return (
			<header className="app-header navbar">

				<button className="navbar-toggler mobile-sidebar-toggler d-lg-none" onClick={this.mobileSidebarToggle} type="button">&#9776;</button>
				<a href="#" className="navbar-brand" ></a>
				<ul className="nav navbar-nav d-md-down-none">
					<li className="nav-item">
						<a className="nav-link navbar-toggler sidebar-toggler" onClick={this.sidebarToggle} href="#">&#9776;</a>
					</li>
				</ul>

				<ul className="nav navbar-nav ml-auto">
					<li className="nav-item dropdown">
						<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
							<div className="nav-link avatar">
								<div className="header-profile-container">
                                    <span title="email" className="header-profile-userlogo" onClick={this.toggle} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                                        user letter
                                    </span>
                                    <div className="user-name">UserName</div>
                                </div>
                            
                            </div>

							<DropdownMenu className="dropdown-menu-right">

								<DropdownItem ><i className="fa fa-wrench"></i> Settings</DropdownItem>
								<DropdownItem onClick={this.handleLogoutClick}><i className="fa fa-lock"></i> Logout</DropdownItem>

							</DropdownMenu>
						</Dropdown>
					</li>
				</ul>
			</header>
		)
	}
}

export default Header;
