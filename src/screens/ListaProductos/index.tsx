import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CardProduct from './CardProduct';
import Categories from './Categories';
import { getProducts } from '../../context/redux/reducers/ProductReducer';

import getAllProducts from '@/services/products/getAllProducts';
import { Product } from '@/services/products/types';

export default function ListaProductos() {
  const products = useSelector((state: any) => state.product.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getAllProducts();
      if (response.isError) return;

      const { result: products } = response;
      products?.map(product => dispatch(getProducts(product)));
    };

    fetchProducts();
  }, []);

const [filters, setFilters] = useState ({
  category:'all'
});

const filterProducts= (products: Product)=>{
   return products.filter(product  => {
    return(
      product.category=== 'all'||
      product.category=== filters.category
    )
   })

}

const filteredProducts = filterProducts(products)


  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Categories />
        
        {products?.map((product: Product) => (
          <CardProduct key={product.id} product={filteredProducts} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
});
