import React from "react";
import {Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const categoryMap = {
    'movies-in-theaters': 'Movies in theatres',
    'movies-coming': 'Coming Soon',
    'top-rated-india': 'Top rated Indian',
    'top-rated-movies': 'Top rated movies',
    'favourit': 'Favourites'
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

const NavigationBar = ({selectCategory, searchStr}) => {
    const updateActiveCategory = event => {
        const selectedTabText = event.target.textContent;
        const newCategory = getKeyByValue(categoryMap, selectedTabText);
        selectCategory(newCategory)
    }

    const searchMovies = (event) => {
        searchStr(event.target.value);
    }

    return (
        <>
            <Navbar bg="light" expand="lg" collapseOnSelect sticky="top">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: '100px'}}
                            navbarScroll
                        >
                            {Object.keys(categoryMap).map((key) => {
                                return <Nav.Link as={Link} to="/" onClick={updateActiveCategory}
                                                 key={key}>{categoryMap[key]}</Nav.Link>
                            })}
                        </Nav>
                        <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={searchMovies}
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );

}

export default NavigationBar;