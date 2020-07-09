import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

import ContatoInput from './components/ContatoInput';
import ContatoItem from './components/ContatoItem';

export default function App() {

  
  const [contatos, setContatos] = useState ([]);

  const [contadorContatos, setContadorContatos] = useState(0);

   // Adiciona um nome e um número a lista de contatos.
  
  const adicionarContato = ( nome, numero ) => {
    var contato = nome + ":" + numero 
    setContatos(
        contatos => {
          setContadorContatos(contadorContatos + 1);
          return [{ key: contadorContatos.toString(), value: contato }, ...contatos];
         }
    )  
  }

 // Remove um contato da lista de contatos.

  const removerContato = (keyASerRemovida) => {
    setContatos(contatos => {
      return contatos.filter((contato) => {
          return contato.key !== keyASerRemovida
      })}
    )
  }
  
  return (
  
    <View style={styles.telaPrincipalView}>
       <ContatoInput onAdicionarContato={adicionarContato}  />   
    <View>
      <FlatList data={contatos} renderItem={
         contato => (
           <ContatoItem 
             chave={contato.item.key} 
             contato={contato.item.value}
             onDelete={removerContato} />
          )
      }
      />
   </View>
  </View>
       
);
}

  const styles = StyleSheet.create({
    telaPrincipalView: {
    padding: 50
    }

    });
