import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<Header />
			<main className="py-3">
				<Container>{children}</Container>
			</main>

			<Footer />
		</React.Fragment>
	);
};

export default Layout;
