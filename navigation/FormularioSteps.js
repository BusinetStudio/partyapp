import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import { LinearGradient } from 'expo';
import IconAntDesign from '@expo/vector-icons/AntDesign';

export default class FormularioSteps extends React.Component  {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          
        }}
      >
        <LinearGradient
          colors={['#ffffff', '#d6f7ff']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 120,
          }}
          start={[1, 0]}
          end={[1, 1]}
        />
        <ScrollView
        style={{paddingVertical: 10}}
        horizontal={true}
        >
          <TouchableOpacity
            style={estilo.boton}
            onPress={() => this.props.screenProps.changeStep(1)}
          >
            <Text
              style={this.props.screenProps.currentStep() == 1?estilo.stepCirculoActivo:estilo. stepCirculo}
            >1</Text>
            <Text
              style={this.props.screenProps.currentStep() == 1?estilo.stepTextoActivo:estilo.stepTexto}
            >Show y Camara</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={estilo.boton}
            onPress={() => this.props.screenProps.changeStep(2)}
          >
            <Text
              style={this.props.screenProps.currentStep() == 2?estilo.stepCirculoActivo:estilo.stepCirculo}
            >2</Text>
            <Text
              style={this.props.screenProps.currentStep() == 2?estilo.stepTextoActivo:estilo.stepTexto}
            >Catering y bebidas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={estilo.boton}
            onPress={() => this.props.screenProps.changeStep(3)}
          >
            <Text
              style={this.props.screenProps.currentStep() == 3?estilo.stepCirculoActivo:estilo.stepCirculo}
            >3</Text>
            <Text
              style={this.props.screenProps.currentStep() == 3?estilo.stepTextoActivo:estilo.stepTexto}
            >Decoración y local</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={estilo.boton}
            onPress={() => this.props.screenProps.changeStep(4)}
          >
            <Text
              style={this.props.screenProps.currentStep() == 4?estilo.stepCirculoActivo:estilo.stepCirculo}
            >4</Text>
            <Text
              style={this.props.screenProps.currentStep() == 4?estilo.stepTextoActivo:estilo.stepTexto}
            >Evento</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={estilo.boton}
            onPress={() => this.props.screenProps.changeStep(5)}
          >
            <Text
              style={this.props.screenProps.currentStep() == 5?estilo.stepCirculoActivo:estilo.stepCirculo}
            >5</Text>
            <Text
              style={this.props.screenProps.currentStep() == 5?estilo.stepTextoActivo:estilo.stepTexto}
            >Musica y luces</Text>
          </TouchableOpacity>
    
        </ScrollView>
          <TouchableOpacity
            style={estilo.cotizarBoton}
          >
            <View
              style={estilo.stepCirculoCotizar}
            >
              <LinearGradient
                colors={['#c63275', '#8f4d93']}
                style={{
                  position: 'absolute',
                  left: 0,right: 0,top: 0,
                  width: 50, height: 50,
                  borderRadius: 30,
                }}
                start={[1, 0]}
                end={[1, 1]}
              />
              <IconAntDesign
                name={'right'}
                size={24}
                color={'#fff'}
              />
            </View>
            <Text
              style={estilo.stepTextoActivo}
            >Cotizar Evento</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
const estilo = StyleSheet.create({
  cotizarBoton: {
    paddingVertical: 10,
    width: 80,
    alignItems: 'center',
  },
  stepCirculoCotizar:{
    justifyContent: 'center', alignItems: 'center',
    width: 50, height: 50
  },
  boton: {
    width: 80,
    alignItems: 'center',
  },
  stepCirculoActivo: {
    fontSize: 24,
    borderRadius: 30,
    color: '#fff', backgroundColor: '#c63275',
    justifyContent: 'center', alignItems: 'center',
    textAlign: 'center',
    width: 50, height: 50,lineHeight: 50
  },
  stepCirculo: {
    fontSize: 24,
    borderRadius: 30,
    color: '#333', backgroundColor: '#d3dddd',
    justifyContent: 'center', alignItems: 'center',
    textAlign: 'center',
    width: 50, height: 50,lineHeight: 50
  },
  stepTextoActivo: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
  },
  stepTexto: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: '#333',
  }

}); 

