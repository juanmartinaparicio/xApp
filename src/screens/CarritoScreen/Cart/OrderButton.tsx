import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import generateOrder from '@/services/orders/generateOrder';
import { ProductCart } from '@/services/orders/types';

interface Props {
  cart: ProductCart[];
}

export default function OrderButton({ cart }: Props) {
  const order = () => {
    generateOrder(cart).then(res => {
      console.log(res);
    });
  };

  const showAlert = ()=>{
    Alert.alert(
        'Alerta',
        'Confirma el pedido?',
        [
          {
            text: 'Volver',
            onPress: () => {order},
            style: 'destructive',
          },              
          { text: 'Continuar',
           onPress: () => console.log('Yes Pressed') },
          
        ],
        { cancelable: true }
        //clicking out side of alert will not cancel
      );
    };

  return (
    <TouchableOpacity 
      onPress={showAlert}
      >
      <View style={styles.btn}>
        <Text style={styles.btnText}>Realizar la compra</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#de8744',
    borderColor: '#fff',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#000',
  },
});
