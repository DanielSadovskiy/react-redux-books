import React,{useState} from 'react'
import {Button,Modal,Col,Row,Container} from 'react-bootstrap'

const Cart = ({countcart,items, cartItems}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let AllProductsInCart = [
        <Row className="show-grid">
                
                  <Col xs={6} lg={6} >
                        <p>Title</p>
                  </Col>
                  <Col xs={2} lg={2}>
                        <p>Price</p>
                  </Col>
                  <Col xs={2} lg={2}>
                        <p>Count</p>
                  </Col>
                  <Col xs={2} lg={2}>
                        <p>Total</p>
                  </Col>
                  
                </Row>
    ];
    console.log(items);
    if(Object.keys(cartItems).length > 0){
        for (let key in cartItems) {
            AllProductsInCart.push(
                <Row className="show-grid">
                
                  <Col xs={6} lg={6} >
                        <p>{items.books[key].title}</p>
                  </Col>
                  <Col xs={2} lg={2}>
                        <p>{items.books[key].price}</p>
                  </Col>
                  <Col xs={2} lg={2}>
                        <p>{cartItems[key]}</p>
                  </Col>
                  <Col xs={2} lg={2}>
                        <p>{cartItems[key] * items.books[key].price}</p>
                  </Col>
                  
                </Row>
            )
          }
    }
   
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
        <span>Cart:(<b>{countcart}</b>) </span>
        </Button>
        
        <Modal show={show} onHide={handleClose} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Cart</Modal.Title>
            
          </Modal.Header>
          <Modal.Body>
        <Container>
            {AllProductsInCart}
          {/* <Row className="show-grid">
          {}
            <Col md={4} >
              
            </Col>
            <Col md={4}>
              
            </Col>
          </Row> */}

        </Container>
      </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
const Menu = ({ total, countcart,items,cartItems }) => {
    console.log(cartItems);
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">Navbar</a>
            <span>Total : {total} </span>
            <Cart countcart={countcart} items={items} cartItems={cartItems}></Cart>

        </nav>
    )

}

export default Menu;