import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
	return (
		<header>
			<Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
				<Navbar.Brand href="/">TechShop</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="/Cart">
							<i className="fas fa-shopping-cart" /> Cart
						</Nav.Link>
						<Nav.Link href="/login">
							<i className="fas fa-user" /> Sign In
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

export default Header;
