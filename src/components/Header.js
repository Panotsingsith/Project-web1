import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button,
    Dropdown
} from 'reactstrap';
const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    

    return (

        <div>
            <Navbar color="warning" light expand="md">
                <NavbarBrand href="/"><font color='link'><h1><font color='link'>StockHome</font></h1></font></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to='/about'><font color='secondary'><h4>About</h4></font></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to='/contact'><font color='primary'><h4>Contact</h4></font></NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <font color='danger'>Products</font>
              </DropdownToggle>
                            <DropdownMenu >
                                <DropdownItem><NavLink tag={Link} to='/Products'>All Products</NavLink></DropdownItem>

                                <DropdownItem><NavLink tag={Link} to='/ProductsNike'>Nike</NavLink></DropdownItem>
                                <DropdownItem><NavLink tag={Link} to='/ProductsAdidas'>Adidas</NavLink></DropdownItem>
                                <DropdownItem><NavLink tag={Link} to='/ProductsPuma'>Puma</NavLink></DropdownItem>
                                <DropdownItem><NavLink tag={Link} to='/ProductsVans'>Vans</NavLink></DropdownItem>
                                <DropdownItem><NavLink tag={Link} to='/ProductsBalenciaga'>Balenciaga</NavLink></DropdownItem>
                                <DropdownItem><NavLink tag={Link} to='/ProductsConverse'>Converse</NavLink></DropdownItem>
                                <DropdownItem><NavLink tag={Link} to='/ProductsNewBalance'>New Balance</NavLink></DropdownItem>
                                <DropdownItem><NavLink tag={Link} to='/ProductsReebok'>Reebok</NavLink></DropdownItem>
                                <DropdownItem><NavLink tag={Link} to='/ProductsAsics'>Asics</NavLink></DropdownItem>
                                <DropdownItem divider />
                                
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        
                    </Nav>

                </Collapse>

                

                <Nav className="ml-auto" navbar>
                    <NavItem>

                        <NavLink tag={Link} to='/signin'><Button>เข้าสู่ระบบ</Button></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/signup'><Button>สมัครสมาชิก</Button></NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>






    )
}
export default Header;