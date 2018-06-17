import React from 'react';
import Menu from '../Menu';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Button,
    NavItem,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
}
    from 'reactstrap';

import {menuItems} from '../Menu/MenuItems.jsx'


export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            isOpen: false,
            modal: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            /* Navigation */
            <div>
                <Navbar className='fixed-top navbar-dark bg-dark' light expand="md">
                    <NavbarBrand href="/">Start Bootstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <Menu items={menuItems}/>
                            <NavItem>
                                <Button onClick={this.toggleModal} outline color="light">Login</Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                                    <ModalBody>
                                        <Form>
                                            <FormGroup>
                                                <Label for="login">Login</Label>
                                                <Input type="text" name="password" id="login" placeholder="login"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="examplePassword">Password</Label>
                                                <Input type="password" name="password" id="examplePassword"
                                                       placeholder="password"/>
                                            </FormGroup>
                                            <Button outline color="primary" size="lg" block>Submit</Button>
                                        </Form>
                                    </ModalBody>
                                </Modal>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
