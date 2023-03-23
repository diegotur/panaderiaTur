import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartScreen = () => {

  const onDelete = (item) =>{
    console.log("delete", item)
  }

  const onConfirm = () =>{
    console.log("confirm")
  }

  const renderItems = ({item}) =><CartItem item={item} onDelete={onDelete}/>

  return (
    <View style={styles.container}>
      <FlatList
      style={styles.list}
      data = {CART}
      renderItem={renderItems}
      keyExtractor={item=>item.id}/>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    list:{
      flex: 1,
    }
})