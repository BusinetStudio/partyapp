import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';
import HeaderInt from '../../navigation/HeaderInt'; 
import styles from '../../assets/styles'; 
import { Ionicons } from '@expo/vector-icons';
import Eventos from '../../modules/eventos'

export default class ListaFiestasScreen extends React.Component {
  static navigationOptions = {
    header: null,
};

  constructor(props)
  {
    super(props)
    this.state = {
      fiestas : [],
      isRefreshing : true
    }
  }

  async componentDidMount()
  {
    this.getFiestas()
  }

  getFiestas()
  {
    Eventos.getFiestas().then((fiestas) => {
          this.setState({isRefreshing : false})
          if(fiestas && fiestas.valid){
            this.setState({
              fiestas : fiestas.result
            })
          }else{
              alert("Error obteniendo fiestas")
          }
    })
  }

  onRefresh()
  {
    this.setState({ isRefreshing: true }); // true isRefreshing flag for enable pull to refresh indicator
    //Send local data (actions) to server
    this.getFiestas()
  }

  render() {   
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <HeaderInt
          screenProps={{
            prevNav: ()=> this.props.navigation.goBack(),
            titulo: 'Mis Fiestas'
          }}
        />   
        <ScrollView style={{flex:1}}>
          <View style={{backgroundColor:'#fff', alignItems: 'center', padding:20, flex:1}}>
            <Text style={{fontSize: 22, marginBottom:30}}>Selecciona tu fiesta del listado</Text>
            <FlatList 
              data = {this.state.fiestas}
              keyExtractor = { (item, index) => item._id}
              refreshing={this.state.isRefreshing}
              onRefresh={() => this.onRefresh()}
              renderItem={({ item }) => {
                return(
                  <TouchableOpacity 
                    style={estilos.itemFiestaContainer}
                    onPress={() => this.props.navigation.navigate('ListaProveedores')} 
                  >
                    <View style={{width:250}}>
                      <Text style={{fontSize:18, fontWeight: '700'}}>{item.nombre}</Text>
                      <Text style={{marginBottom:30}}>{item.fecha_del_evento}</Text>
                      <Text style={{marginTop:'auto'}}>{item.categoria}</Text>
                    </View>
                    <View style={{width:50}}>
                      <View style={{flexDirection: 'row'}}>
                        <Ionicons
                          name="ios-document" size={18} color="#333" 
                          style={{marginRight:5}}
                        />
                        <Text style={{color: '#333'}}>{item.servicios_solicitados.length}</Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Ionicons
                          name="ios-checkmark" size={22} color="#333" 
                          style={{marginRight:5}}
                        />
                        <Text style={{color: '#333'}}>{item.servicios.length}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}

            />
          </View>
        </ScrollView>
      </View>
    )
  }
}
      
const estilos = StyleSheet.create({
  row: {
    width:300, marginBottom: 20, alignItems: 'center', flexDirection: 'row'
  },

  itemFiestaContainer: {
    width:300,
    flexDirection: 'row',
    padding: 15,
    borderColor: '#c63275',
    borderWidth: 2,
    backgroundColor: '#f4f4f4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
  }
});  