import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Image,
  Linking,
  ImageBackground,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class EngBrasil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textoAeronautica: '',
      textoAmbiental: '',
      textoCartografica: '',
      textoHorticultura: '',
      textoMinas: '',
      textoPetroGas: '',
      textoSegurancaTrab: '',
      textoFlorestal: '',
      textoIndustrial: '',
      textoMecatronica: '',
      textoNaval: '',
      textoSanitaria: '',
      textoTextil: '',
      textoAcustica: '',
      textoAgricola: '',
      textoCivil: '',
      textoAgrimensura: '',
      textoAquicultura: '',
      textoEnergia: '',
      textoMateriais: '',
      textoPesca: '',
      textoFisica: '',
      textoHidrica: '',
      textoMecanica: '',
      textoMetalurgica: '',
      textoQuimica: '',
    };

  }

  textoDescritivoAeronautica() {
    let texto = '';

    if (this.state.textoAeronautica == '') {
      texto = 'É o ramo da engenharia que se ocupa do projeto e da manutenção de aeronaves e do gerenciamento de atividades aeroespaciais. O engenheiro aeronáutico envolve-se no projeto e na construção de todos os tipos de aeronave, como aviões, helicópteros, foguetes e satélites.';
    }
    else {
      texto = '';
    }

    this.setState({ textoAeronautica: texto })
  }
  textoDescritivoAmbiental() {
    let texto = '';

    if (this.state.textoAmbiental == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoAmbiental: texto })
  }
  textoDescritivoCartografica() {
    let texto = '';

    if (this.state.textoCartografica == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoCartografica: texto })
  }
  textoDescritivoHorticultura() {
    let texto = '';

    if (this.state.textoHorticultura == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoHorticultura: texto })
  }
  textoDescritivoMinas() {
    let texto = '';

    if (this.state.textoMinas == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoMinas: texto })
  }
  textoDescritivoPetroGas() {
    let texto = '';

    if (this.state.textoPetroGas == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoPetroGas: texto })
  }
  textoDescritivoSegurancaTrab() {
    let texto = '';

    if (this.state.textoSegurancaTrab == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoSegurancaTrab: texto })
  }
  textoDescritivoFlorestal() {
    let texto = '';

    if (this.state.textoFlorestal == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoIndustrial: texto })
  }
  textoDescritivoIndustrial() {
    let texto = '';

    if (this.state.textoIndustrial == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoIndustrial: texto })
  }
  textoDescritivoMecatronica() {
    let texto = '';

    if (this.state.textoMecatronica == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoMecatronica: texto })
  }
  textoDescritivoNaval() {
    let texto = '';

    if (this.state.textoNaval == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoNaval: texto })
  }
  textoDescritivoSanitaria() {
    let texto = '';

    if (this.state.textoSanitaria == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoSanitaria: texto })
  }
  textoDescritivoTextil() {
    let texto = '';

    if (this.state.textoTextil == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoTextil: texto })
  }
  textoDescritivoAcustica() {
    let texto = '';

    if (this.state.textoAcustica == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoAcustica: texto })
  }
  textoDescritivoAgricola() {
    let texto = '';

    if (this.state.textoAgricola == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoAgricola: texto })
  }
  textoDescritivoCivil() {
    let texto = '';

    if (this.state.textoCivil == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoCivil: texto })
  }
  textoDescritivoAgrimensura() {
    let texto = '';

    if (this.state.textoAgrimensura == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoAgrimensura: texto })
  }
  textoDescritivoAquicultura() {
    let texto = '';

    if (this.state.textoAquicultura == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoAquicultura: texto })
  }
  textoDescritivoEnergia() {
    let texto = '';

    if (this.state.textoEnergia == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoEnergia: texto })
  }
  textoDescritivoMateriais() {
    let texto = '';

    if (this.state.textoMateriais == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoMateriais: texto })
  }
  textoDescritivoPesca() {
    let texto = '';

    if (this.state.textoPesca == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoPesca: texto })
  }
  textoDescritivoFisica() {
    let texto = '';

    if (this.state.textoFisica == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoFisica: texto })
  }
  textoDescritivoHidrica() {
    let texto = '';

    if (this.state.textoHidrica == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoHidrica: texto })
  }
  textoDescritivoMecanica() {
    let texto = '';

    if (this.state.textoMecanica == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoMecanica: texto })
  }
  textoDescritivoMetalurgica() {
    let texto = '';

    if (this.state.textoMetalurgica == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoMetalurgica: texto })
  }
  textoDescritivoQuimica() {
    let texto = '';

    if (this.state.textoQuimica == '') {
      texto = ' É a engenharia voltada para o desenvolvimento econômico sustentável, ou seja, que respeite os limites dos recursos naturais. O engenheiro que atua nessa área desenvolve e aplica tecnologias para proteger o ambiente dos danos causa dos pelas atividades humanas.';
    }
    else {
      texto = '';
    }

    this.setState({ textoQuimica: texto })
  }


  render() {
    return (
      <ImageBackground
        source={require('../imgs/bg_engBrasil.jpg')}
        style={styles.background}
      >
        <StatusBar
          backgroundColor='rgba(255,255,255, 0.3)'
          translucent
          barStyle='dark-content'
        />
        <View style={styles.tela}>
          <View style={styles.body} >
            <ScrollView >
              <TouchableHighlight
                onPress={() => { this.textoDescritivoAeronautica() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. Aeronaútica</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao} >
                {this.state.textoAeronautica}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoAmbiental() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. Ambiental</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoAmbiental}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoCartografica() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. Cartográfica</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoCartografica}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoHorticultura() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. de Horticultura</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoHorticultura}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoMinas() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. de Minas</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoMinas}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoPetroGas() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. de Petróleo e Gás</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoPetroGas}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoSegurancaTrab() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. de Segurança do Trabalho</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoSegurancaTrab}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoFlorestal() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. Florestal</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoFlorestal}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoIndustrial() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. Industrial</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoIndustrial}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoMecatronica() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. Mecatronica</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoMecatronica}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoNaval() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. Naval</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoNaval}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoSanitaria() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. Sanitária</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoSanitaria}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoTextil() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={[styles.txtTitulo, { fontSize: 25 }]}>Eng. em Tecnologia Têxtil e da Indumentária</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoTextil}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoAcustica() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. Acústica</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoAcustica}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoAgricola() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. Agrícola</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoAgricola}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoCivil() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. Civil</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoCivil}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoAgrimensura() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. Agrimensura</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoAgrimensura}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoAquicultura() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. Aquicultura</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoAquicultura}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoEnergia() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. Energia</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoEnergia}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoMateriais() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. Materiais</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoMateriais}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoPesca() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. Pesca</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoPesca}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoFisica() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. Física</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoFisica}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoHidrica() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. Hídrica</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoHidrica}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoMecanica() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. Mecânica</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoMecanica}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoMetalurgica() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. Metalúrgica</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoMetalurgica}
              </Text>

              <TouchableHighlight
                onPress={() => { this.textoDescritivoQuimica() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.botaoEng}
              >
                <Text style={styles.txtTitulo}>Eng. Química</Text>
              </TouchableHighlight>

              <Text style={styles.txtDescricao}>
                {this.state.textoQuimica}
              </Text>
            </ScrollView>
            <View style={styles.botao}>
              <TouchableHighlight
                style={styles.btnSair}
                onPress={() => { Actions.engenharias() }}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <Text style={styles.txtBtnSair}>Voltar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
  },

  background: {
    flex: 1,
    width: '100%'
  },

  body: {
    flex: 2,
    padding: 20,
    marginTop: 160,
  },
  botaoEng: {
    backgroundColor: 'rgb(12,165,143)',
    borderColor: 'rgb(30,56,96)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10
  },
  txtTitulo: {
    fontFamily: 'Bruzh',
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
  },
  txtDescricao: {
    fontSize: 20,
    paddingLeft: 10,
    color: 'rgb(12,165,143)',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Bruzh'
  },

  botao: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // margin: 10,
    alignItems: 'center',
  },
  imagem: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  formatoImg: {
    borderRadius: 10,
    width: 320,
    height: 250,
  },
  btnSairAlign: {
    alignItems: 'center',
    flex: 1,
  },
  btnSair: {
    width: 120,
    height: 40,
    borderRadius: 5,
    borderColor: 'rgb(30,56,96)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(12,165,143)',
    marginTop: 10,
  },
  txtBtnSair: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Bruzh'
  },
})



export default EngBrasil;      