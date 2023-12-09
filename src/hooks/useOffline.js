/* eslint-disable */
import { useDispatch, useSelector } from 'react-redux';
import { productArraySuccess } from '../state/ArrayProductSlice';

const useOffline = () => {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.userProductsArray )
  const CargarProductosOffline = async () => {

    try {
      const response = await fetch('/manifest.json');
      const manifest = await response.json();
      const manifestFilter = manifest.icons.filter(item => item.hasOwnProperty('descripcion'))
      for (let i = 0; i < manifestFilter.length; i++) {
        const product = {
          id: manifestFilter[i].id,
          descripcion: manifestFilter[i].descripcion,
          precio: manifestFilter[i].precio,
          urlimagen: manifestFilter[i].src,
          stock: manifestFilter[i].stock,
        };

        const isProductAlreadyAdded = products.some(
          (existingProduct) => existingProduct.id === product.id || existingProduct.descripcion.toUpperCase() === product.descripcion.toUpperCase()
        );

        if (!isProductAlreadyAdded) {
          dispatch(productArraySuccess(product));
        }
      }
    } catch (error) {
      console.error('Error al cargar imágenes cacheadas:', error);
    }
  };

  return { CargarProductosOffline };
};

export default useOffline;
