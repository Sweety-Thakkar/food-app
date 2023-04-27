import React from 'react'
import { Button, TableContainer, styled } from '@mui/material'
import burger1 from '../../assets/burger1.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
import burger2 from '../../assets/burger2.jpg';
import pizza1 from '../../assets/pizza1.jpg';
import pizza2 from '../../assets/pizza2.jpg';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Contact from '../contact/Contact';
import { useNavigate } from 'react-router-dom';

const CartDesign = styled('div')({
  backgroundImage: `url('https://i.pinimg.com/originals/bf/65/d5/bf65d51f34b1bf193ec947f3c0c3f3e0.jpg')`,
  backgroundSize: "cover",
  height: "30vh",
  backgroundRepeat: "no-repeat",
  color: "Red",
  fontWeight: "bold",
  textAlign: "center",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
})

const Cell = styled(TableCell)({
  color: "#212245",
  fontWeight: "bold",
  fontSize: "20px",
  fontFamily: "cursive",
  alignItems:"center"

})

const Content = styled('div')({
  "& h4": {
    color: '#212245',
    fontSize: "25px",
    fontWeight: "bold",
    fontFamily: "cursive",
    "& span": {
      color: 'red'
    }
  },
  "& p": {
    color: "#212245",
    fontSize: "20px",
    fontFamily: "cursive"
  }
})

const SubCell = styled(TableCell)({
  color: "Black",
  fontSize: "15px",
  fontFamily: "cursive",
  alignItems:"center"

})

function createData(image, ProductTitle, Price, Quantity, Action) {
  return { image, ProductTitle, Price, Quantity, Action }
}

const rows = [
  createData(burger1, "Hamburger", "Rs 100", 1),
  createData(burger2, "Turkey burger", "Rs 100", 2),
  createData(pizza1, "Farmhouse Pizza", "Rs 100", 1),
  createData(pizza2, "Peppy Paneer Pizza", "Rs 100", 1)
]

const Image = styled('img')({
  width: "50px",
  height: "50px"
}
)

const CartSection = styled('div')({
  width: "100%"
})

const Cart = () => {
  const Navigate = useNavigate()
  return (
    <>
      <CartSection sx={{padding:{xs:"10px", md:"0px"}}}>
        <CartDesign sx={{display:{xs:"none", md:"flex"}}}>
          <h1>Your Cart</h1>
        </CartDesign> 
        <div>
          <TableContainer sx={{ margin: "auto", maxWidth: "920px", marginTop: "20px" }} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <Cell>Image</Cell>
                  <Cell>ProductTitle</Cell>
                  <Cell>Price&nbsp;</Cell>
                  <Cell>Quantity&nbsp;</Cell>
                  <Cell>Action&nbsp;</Cell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.image}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Image src={row.image} alt='food' />
                    </TableCell>
                    <SubCell>{row.ProductTitle}</SubCell>
                    <SubCell>{row.Price}</SubCell>
                    <SubCell> {row.Quantity}</SubCell>
                    <SubCell> <DeleteIcon sx={{ color: "red" }} />{row.Action}</SubCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div style={{ margin: "auto", maxWidth: "920px", marginTop: "20px" }}>
            <Content>
              <h4>SubTotal: Rs <span>500</span></h4>
              <p>Taxes and Shipping will calculate at checkout</p> <br />
              <Button variant='contained' color='error' onClick={()=>Navigate('/Food')}> Continue Shipping </Button> &nbsp;
              <Button variant='contained' color='error' onClick={()=>Navigate('/CheckOut')}> Procced to Checkout </Button>
            </Content>
          </div>
        </div>
        <br/>
        <Contact/>
      </CartSection>
    </>
  )
}

export default Cart
