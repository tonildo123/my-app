/* eslint-disable */
import React from 'react'
import { useEffect, useState } from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Box, Container, Button } from '@mui/material';
import { collection, getDocs, } from 'firebase/firestore';
import { db } from '../../firebase';
import { useSelector, useDispatch } from 'react-redux';
import { productArrayClean, productArraySuccess } from '../../state/ArrayProductSlice';
import useOffline from '../../hooks/useOffline';
import { useNavigate } from "react-router-dom";

import slider from '../../assets/slider.PNG';

import uno from '../../assets/chocolates.PNG';
import dos from '../../assets/chicles.PNG';
import tres from '../../assets/dulces.PNG';
import cuatro from '../../assets/galletas.PNG';
import cinco from '../../assets/gelatina.PNG';
import seis from '../../assets/paletas.PNG';

import unoCard from '../../assets/card1.PNG';
import dosCard from '../../assets/card2.PNG';
import tresCard from '../../assets/card3.PNG';
import cuatroCard from '../../assets/card4.PNG';
import cincoCard from '../../assets/card5.PNG';
import seisCard from '../../assets/card6.PNG';
import sieteCard from '../../assets/card7.PNG';
import ochoCard from '../../assets/card8.PNG';

import unoMiniCard from '../../assets/pagoseguro.PNG';
import dosMiniCard from '../../assets/facilidaddecompra.PNG';
import tresMiniCard from '../../assets/disponibilidad.PNG';
import cuatroMiniCard from '../../assets/ofertaexclusiva.PNG';
import cincoMiniCard from '../../assets/envioatodomexico.PNG';
import seisMiniCard from '../../assets/enviosgratis.PNG';
import sieteMiniCard from '../../assets/pagos2.PNG';
import ochoMiniCard from '../../assets/atencion.PNG';

const Inicio = () => {

  const alturaPortada = { xs: '250px', md: '400px' }
  const [products, setProducts] = useState([]);
  const productsCollection = collection(db, "Products");
  const dispatch = useDispatch();
  const {products : productos} = useSelector(state => state.userProductsArray)
  const { CargarProductosOffline } = useOffline()
  const navigate = useNavigate();

  const getsProductos = async () => {

    if (productos.length > 0) {
      setProducts(productos)
    } else {
      const data = await getDocs(productsCollection);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
  }


  useEffect(() => {
    getsProductos();
    if (products.length > 0) {
      for (let i = 0; i < products.length; i++) {
        const product = {
          id: products[i].id,
          descripcion: products[i].descripcion,
          precio: products[i].precio,
          urlimagen: products[i].urlimagen,
          stock: products[i].stock,
        };

        const isProductAlreadyAdded = productos.some(
          (existingProduct) => existingProduct.id === product.id
        );

        if (!isProductAlreadyAdded) {          
          dispatch(productArraySuccess(product));         
        }
      }
    } else {
      dispatch(productArrayClean())
      CargarProductosOffline()
    }

  }, [products.length]);

  const renderCard = (card, index) => {
    return (
      <Grid key={index} item xs={12} md={3} sx={{ width: { sx: '100%', sm: '260px', height: { sx: '200px', sm: '300px' } } }}>
        <Button onClick={() => navigate(`/detalles`, { state: { card } })}>
        <Card sx={{ my: '2px' }} >
          <CardMedia
            component="img"
            alt="Card Image"
            image={card.urlimagen}
            sx={{ width: '100%', height: { sx: '150px', sm: '250px' } }} />
          <CardContent>
            <Typography variant="body2" sx={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>
              {card.descripcion.toUpperCase()}
            </Typography>
            <Typography variant="body2" sx={{ whiteSpace: 'nowrap', fontWeight: 'bold', color: 'red' }}>$ {card.precio}</Typography>
            <Typography variant="body2" sx={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>{card.stock} unidades</Typography>
          </CardContent>
        </Card>
        </Button>
      </Grid>
    );
  };

  return (
    <Box>
      <Box sx={{ width: '100%' }}>
        <img
          src={slider}
          alt="image"
          loading="lazy"
          width="100%"
          height={alturaPortada}
        />
      </Box>
      <Box>
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Productos
          </Typography>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Container>
            <Grid container spacing={{ xs: 2, md: 10 }}>
              {products.length === 0 ? "Cargando..." : products.map(renderCard)}
            </Grid>
          </Container>
        </Box>
      </Box>
      <Box sx={{ my: 5 }}>
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Categorias
          </Typography>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Grid container spacing={{ xs: 2, md: 10 }} >
            <Grid item xs={12} md={2}>
              <img
                src={uno}
                alt="image"
                loading="lazy"
                width="100%"
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <img
                src={dos}
                alt="image"
                loading="lazy"
                width="100%"
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <img
                src={tres}
                alt="image"
                loading="lazy"
                width="100%"
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <img
                src={cuatro}
                alt="image"
                loading="lazy"
                width="100%"
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <img
                src={cinco}
                alt="image"
                loading="lazy"
                width="100%"
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <img
                src={seis}
                alt="image"
                loading="lazy"
                width="100%"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Container>
          <Box sx={{ width: '100%' }}>
            <Grid container spacing={{ xs: 2, md: 10 }} >
              <Grid item xs={12} md={6}>
                <img
                  src={unoCard}
                  alt="image"
                  loading="lazy"
                  width="100%"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  src={dosCard}
                  alt="image"
                  loading="lazy"
                  width="100%"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  src={tresCard}
                  alt="image"
                  loading="lazy"
                  width="100%"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  src={cuatroCard}
                  alt="image"
                  loading="lazy"
                  width="100%"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  src={cincoCard}
                  alt="image"
                  loading="lazy"
                  width="100%"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  src={seisCard}
                  alt="image"
                  loading="lazy"
                  width="100%"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  src={sieteCard}
                  alt="image"
                  loading="lazy"
                  width="100%"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  src={ochoCard}
                  alt="image"
                  loading="lazy"
                  width="100%"
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Box sx={{ width: '100%' }}>
          <Grid container spacing={{ xs: 2, md: 6 }} >
            <Grid item xs={12} md={3}>
              <img
                src={unoMiniCard}
                alt="image"
                loading="lazy"
                width="100%"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <img
                src={dosMiniCard}
                alt="image"
                loading="lazy"
                width="100%"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <img
                src={tresMiniCard}
                alt="image"
                loading="lazy"
                width="100%"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <img
                src={cuatroMiniCard}
                alt="image"
                loading="lazy"
                width="100%"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <img
                src={cincoMiniCard}
                alt="image"
                loading="lazy"
                width="100%"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <img
                src={seisMiniCard}
                alt="image"
                loading="lazy"
                width="100%"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <img
                src={sieteMiniCard}
                alt="image"
                loading="lazy"
                width="100%"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <img
                src={ochoMiniCard}
                alt="image"
                loading="lazy"
                width="100%"
              />
            </Grid>
          </Grid>
        </Box>

      </Box>

    </Box>
  )
}

export default Inicio