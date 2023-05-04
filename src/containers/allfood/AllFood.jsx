import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ListItemText } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { ICONS } from '../../assets';
import Contact from '../contact/Contact';
import { api } from '../../api';

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
  alignItems: "center",
})

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AllFood() {
  const Navigate = useNavigate()
  const { label } = React.useContext(UserContext)
  const [productlist, setProductlist] = React.useState([])

  const foodList = async () => {
    const { data } = await api.product.get();
    setProductlist(data)
  }
  React.useEffect(() => {
    foodList();
  }, [])

  console.log('productlist  :>> ', productlist);
  console.log('label :>> ', label);


  const ListItemLabel = styled('div')({
    color: "#212245",
    fontWeight: "bold",
    fontSize: "25px",
    fontFamily: "cursive"
  })

  const ListItemPrice = styled('div')({
    color: "red",
    fontSize: "20px",
    fontWeight: "bold"
  })

  const Zoom = styled('img')({
    transition: "transform .2s",
    width: "200px",
    height: "200px",
    "&:hover": {
      transform: "scale(1.2)",
    }
  })


  return (
    <Box sx={{ flexGrow: 1 }}>
      <CartDesign sx={{ display: { xs: "none", md: "flex" } }}>
        <h1>All Foods</h1>
      </CartDesign>
      <Grid container sx={{ padding: 1 }} spacing={2}>
        {
          productlist.filter(item => label === "all" || item.category === label).map((data, index) => {
            return <Grid key={index} item xs={12} sm={6} md={4} lg={3} >
              <Item>
                <Zoom width={200} height={200} src={data.productImage} alt="" />
                <ListItemText primary={<ListItemLabel>{data.productName}</ListItemLabel>} />
                <div >
                  <ListItemText primary={<ListItemPrice>{data.productPrice}</ListItemPrice>} />
                  <ButtonGroup>
                    <Button variant='contained' color='error' onClick={() => Navigate('/cart')}>  Add to Cart  < ICONS.AddShoppingCartIcon /> </Button>
                  </ButtonGroup>
                </div>
              </Item>
            </Grid>
          })
        }
      </Grid>
      <Contact />
    </Box>
  );
}