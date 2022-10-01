import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';

//cenas a serem importadas
import Splash from './components/Splash'
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import CadastroSucesso from './components/CadastroSucesso';
import Home from './components/Home';
import Inatel from './components/Inatel';
import Campus from './components/Campus';
import Tour from './components/Tour';
import OndeFica from './components/OndeFica';
import EventosSrs from './components/EventosSrs';
import Engenharias from './components/Engenharias';
import EngInatel from './components/EngInatel';
import EngTelecom from './components/EngTelecom';
import EngComputacao from './components/EngComputacao';
import EngEletrica from './components/EngEletrica';
import EngAutomacao from './components/EngAutomacao';
import EngBiomedica from './components/EngBiomedica';
import EngSoftware from './components/EngSoftware';
import EngProducao from './components/EngProducao';
import EngBrasil from './components/EngBrasil';
import Contatos from './components/Contatos';
import Vestibular from './components/Vestibular';
import SelecaoSimulado from './components/SelecaoSimulado';
import SimuladoGeral from './components/provas/SimuladoGeral';
import SimuladoMatematica from './components/provas/SimuladoMatematica';
import SimuladoFisica from './components/provas/SimuladoFisica';
import SimuladoPortugues from './components/provas/SimuladoPortugues';
import Resultado from './components/provas/Resultado';
import Projetos from './components/Projetos';
import Arduino from './components/Arduino';
import GaleriaArduino from './components/GaleriaArduino';
import Programacao from './components/Programacao';
import Agenda from './components/Agenda';
import AddAgenda from './components/AddAgenda';
import Perfil from './components/Perfil';
import Bolsas from './components/Bolsas';
import TiposDeBolsas from './components/TiposDeBolsas';
import SimuladorDeBolsas from './components/SimuladorDeBolsas';
import FichaSocial from './components/FichaSocial';
import Equipes from './components/Equipes';
import Inscrever from './components/Inscrever';
import ResultadoVest from './components/ResultadoVest';


export default (porps) => {
  return (
    <Router navigationBarStyle={styles.bgBarra}  >
      <Stack key='root'>
        <Scene
          key='splash'
          component={Splash}
          title='Splash'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao
          initial

        />

        <Scene
          key='login'
          component={Login}
          title='Login'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />

        <Scene
          key='cadastro'
          component={Cadastro}
          title='Cadastro'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='cadastroSucesso'
          component={CadastroSucesso}
          title='Cadastro Sucesso'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='home'
          component={Home}
          title='Home'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao
          
        />
        <Scene
          key='inatel'
          component={Inatel}
          title='Inatel'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='engenharias'
          component={Engenharias}
          title='Engenharias'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='contatos'
          component={Contatos}
          title='Contatos'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='engInatel'
          component={EngInatel}
          title='EngInatel'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='engTelecom'
          component={EngTelecom}
          title='EngTelecom'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='engComputacao'
          component={EngComputacao}
          title='EngComputacao'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='engEletrica'
          component={EngEletrica}
          title='EngEletrica'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='engAutomacao'
          component={EngAutomacao}
          title='EngAutomacao'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='engBiomedica'
          component={EngBiomedica}
          title='EngBiomedica'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='engSoftware'
          component={EngSoftware}
          title='EngSoftware'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='engProducao'
          component={EngProducao}
          title='EngProducao'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='engBrasil'
          component={EngBrasil}
          title='EngBrasil'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='campus'
          component={Campus}
          title='Campus'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='tour'
          component={Tour}
          title='Tour'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='ondeFica'
          component={OndeFica}
          title='OndeFica'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='eventosSrs'
          component={EventosSrs}
          title='EventosSrs'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='vestibular'
          component={Vestibular}
          title='Vestibular'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao
          
        />
        <Scene
          key='inscrever'
          component={Inscrever}
          title='Inscrever'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao
          
        />
        <Scene
          key='resultadoVest'
          component={ResultadoVest}
          title='ResultadoVest'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao
          
        />
       
        <Scene
          key='selecaoSimulado'
          component={SelecaoSimulado}
          title='SelecaoSimulado'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='simuladoGeral'
          component={SimuladoGeral}
          title='SimuladoGeral'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='simuladoMatematica'
          component={SimuladoMatematica}
          title='SimuladoMatematica'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='simuladoFisica'
          component={SimuladoFisica}
          title='SimuladoFisica'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='simuladoPortugues'
          component={SimuladoPortugues}
          title='SimuladoPortugues'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='resultado'
          component={Resultado}
          title='Resultado'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='projetos'
          component={Projetos}
          title='Projetos'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='arduino'
          component={Arduino}
          title='Arduino'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='galeriaArduino'
          component={GaleriaArduino}
          title='GaleriaArduino'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='programacao'
          component={Programacao}
          title='Programacao'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='agenda'
          component={Agenda}
          title='Agenda'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />

        <Scene
          key='addAgenda'
          component={AddAgenda}
          title='AddAgenda'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='perfil'
          component={Perfil}
          title='Perfil'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao
        />
        <Scene
          key='bolsas'
          component={Bolsas}
          title='Bolsas'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='tiposDeBolsas'
          component={TiposDeBolsas}
          title='TiposDeBolsas'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='simuladorDeBolsas'
          component={SimuladorDeBolsas}
          title='SimuladorDeBolsas'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='fichaSocial'
          component={FichaSocial}
          title='FichaSocial'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />
        <Scene
          key='equipes'
          component={Equipes}
          title='Equipes'
          titleStyle={styles.txtOutras}
          hideNavBar //ocultando a barra de navegacao

        />

      </Stack>
    </Router>
  );
}

const styles = StyleSheet.create({
  bgBarra: {
    backgroundColor: '#115E54',
  },

  txtOutras: {
    textAlign: 'center',
    flex: 1,
    //padding para compensar o botao de retornar
    paddingRight: 55,
    color: '#fff',

  },
})

