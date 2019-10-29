import React, { Component,useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import Item from './flatListItem'
import axios from 'axios';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      empdata: [],
      search: 'noida',
      searchfeid:'noida'
    };
  }
  changeState = () => {
  
    // this.setState({
    //   search: 'noida'
    // }, () => this.getRequest());
   //console.warn("#search",this.state.search)
    if(((this.state.search.trim() =="") || (this.state.search.trim().length==0)))
    alert("search field cannot be empty")
    else
    {
      console.warn("else-called")
      this.setState({
        isLoading:true
        
      },()=>{
        console.warn("method called")
        this.getRequest();
      })
    }
   
  }
changeSearchValue=(value)=>
{
  this.setState({
    search:value
  });
  //console.warn("change search value==>",this.state.search)
}
  getRequest()//get data from url
  {
    axios.get('https://newsapi.org/v2/everything?q=' + this.state.search + '&apiKey=9f2f99de2ed24a19b235ab5984c49f72')
      .then((response) => {
        //console.warn(response.data.status)

        if (response.data.status == 'ok') {
          console.log("data=>", response.data);
          // //console.warn("ionvoked" + response.data.articles);

          var temp = [];

          for (var i = 0; i < (response.data.articles.length); i++) {
            temp[i] = JSON.parse(JSON.stringify(response.data.articles[i]))
            ////console.warn(response.data.articles[i].title)


          }

          //console.warn("##temp" + temp.length);

          this.setState({
            empdata: temp,
            isLoading: false,
            search:''
          });
        }
        else {
          this.setState({
            empdata: temp,
            isLoading: true  
          });
        }

      })
      .catch(error => {
        console.log(error);
        //console.warn("error", error)

      });
  }
  componentDidMount() {

    this.getRequest();
  }
  render() {

    if (this.state.isLoading) {

      return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator />
          <Text>
            Please Wait Data is Loading.....
            </Text>
        </SafeAreaView>
      )
    } else {

      return (
        <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
          <SearchBar fun1={this.changeState} fun2={this.changeSearchValue}/>
          <FlatList style={{backgroundColor:'#eeeeee'}}
            data={this.state.empdata}
            renderItem={({ item,index }) => <Item image={item.urlToImage} title={item.title} description={item.description}  index={index}/>}
            keyExtractor={({ id }, index) => id}
          />
        </SafeAreaView>
      );
    }
  }

}





function SearchBar(props) {
  const[get,set]=useState('')
  setSearchBox=()=>{
    set('');
  }
  return (
    
    <View style={styles.search}>
      <View style={styles.searchDiloag}>
        <TextInput style={styles.searchDiloag1} value={get} placeholder="noida" onChangeText={(value)=>{
        props.fun2(value)
        set(value)
        }}/>
      </View >
      <View style={styles.searchDiloagButton}>
        <TouchableOpacity onPress={() => {
          props.fun1()
          set('')
          

          //   // //console.warn("cliclclick")
          // props.fun.bin

        }}>
          <Text>
            Search
  </Text>
        </TouchableOpacity>

      </View>


    </View>


  );
}


const styles = StyleSheet.create({

  search: {
    height: 50, width: '100%', flexDirection: 'row'
  },

  searchDiloag: {
    width: '100%', flex: 1, margin: 5, borderColor: '#ddd', borderWidth: 2

  },
  searchDiloag1: {
    padding: "3%"

  },
  searchDiloagtext: {
    width: '100%', flex: 1, margin: 5, borderColor: '#ddd', borderWidth: 1

  }
  ,
  searchDiloagButton: {
    width: '100%', flex: 0.15, margin: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderWidth: 1

  }

});
