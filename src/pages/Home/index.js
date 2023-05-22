import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Moviments from '../../components/Moviments'
import Actions from '../../components/Actions';

const list = [
    {
        id:1,
        label:'Boleto de luz',
        value:'-120,00',
        date:'18/09/2023',
        type: 0 //despesas
    },
    {
        id:2,
        label:'Pix cliente x',
        value:'2.500,00',
        date:'18/09/2023',
        type: 1 //entradas
    },
    {
        id:3,
        label:'Salario',
        value:'8.500,00',
        date:'18/09/2023',
        type: 1 //entradas
    }
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Lucas Gomes"/>
      <Balance saldo="15.000,00" gasto="200,00"/>
      <Actions/>
      <Text style={styles.title}>Ultimas Movimentações</Text>
      <FlatList
      style={styles.list}
      data={list}
      keyExtractor={ () => String(list.id)}
      showsVerticalScrollIndicator={false}
      renderItem={ ({item}) => <Moviments data={item}/> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  }, title:{
    fontSize:18,
    fontWeight:'bold',
    marginLeft:14,
    marginRight:14,
    marginTop:14,
  }, list:{
    marginStart:14,
    marginEnd:14,

  }
});
