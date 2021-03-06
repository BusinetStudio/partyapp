import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Font,
  View,
} from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from '../../assets/styles';
import HeaderInt from '../../navigation/HeaderInt';

export default class servicio extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {  
    return (
      <View style={{flex:1}}>
        <HeaderInt 
          screenProps={{
            prevNav: ()=> this.props.navigation.goBack(),
            titulo: 'Baby Shower'
          }}
        />
        <ScrollView style={{flex:1,paddingHorizontal: 40}} contentContainerStyle={styles.contentContainer}>
          <View style={{
            padding:10,
            
          }}>
            <TouchableOpacity 
              style={{
                padding:20,
                width:125,
                height: 125,
                backgroundColor: '#F2F2F2',
                borderRadius:12, 
                alignItems: 'center',
                justifyContent: 'space-between',
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 8,
              }}
              onPress={() => this.props.navigation.navigate('detalles')}   
            >
              <Text style={{color:'#8F4D93', fontWeight:'700'}}>Animación</Text>
              <Text style={{color:'#333', fontWeight:'700'}}>S/.100 - 200</Text>
              <View style={{flexDirection:'row', alignItems: 'center'}}>
                <MaterialIcons name="person" size={12} color="#333"/>
                <Text style={{color:'#333', fontWeight:'700', marginLeft:5}}>3</Text>
              </View>
            </TouchableOpacity>
            
          </View>
        </ScrollView>
      </View>
    )
  }
}