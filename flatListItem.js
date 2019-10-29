import React, { Component ,useState} from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput, Button, Image,
    Alert, FlatList, SafeAreaView
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

FlatListItem=(props)=>{

    const[showMore,setShowMore] = useState(-1);

    
    handleShowMore = () => {
        //////console.warn("handle show more",props.index)
        if(showMore === props.index){
            setShowMore(-1)
            //////console.warn("if called")
        }else{
            //////console.warn("else called")
            setShowMore(props.index)
        }
    }

    return(
<View style={styles.body}>
<View style={styles.innnerbody}>
<View style={styles.aboutuser}>
<View style={styles.name}>
<Text style={{flex:0.4 ,numberOfLines:1}} ></Text>

<Text style={{flex:1,fontWeight:'bold',fontSize:14}}>{props.title}</Text>
</View>
<View style={styles.name}>
<Text style={{flex:0.4 ,numberOfLines:1}} ></Text>

<View style={{flex:1,height:50}}>
<View style={{flexDirection:'row',marginTop:'2%'}}>
    <View style={{height:20,width:20,backgroundColor:'#e7f6f6',justifyContent:'center',alignItems:'center',borderRadius:10}}> 
    <Icon name="user" size={15} style={{color:'#01a9a4',marginRight:1}} />
    </View>
    <Text style={{marginLeft:'3%',fontSize:12}}>Music Art</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={{marginTop:'1%',fontSize:12}}>12 jan 2019</Text>
    <TouchableOpacity style={{height:25,width:90,borderColor:'blue',borderWidth:1,borderRadius:4,justifyContent:'center',alignItems:'center',borderColor:'#01a9a4'}} onPress={handleShowMore}>
<Text style={{color:'#01a9a4',fontSize:10,fontWeight:'bold'}}>
    Read
</Text>
    </TouchableOpacity>
</View>
</View>
</View>

<View style={styles.name}>
{/* <Text style={{flex:0.4,fontWeight:'bold'}} ></Text>
{
    showMore===-1?<Text style={{flex:1,color:'red',height:30}}>{props.description}</Text> :<Text style={{flex:1}}>{props.description}</Text>
} */}
{/* <Text style={{flex:1}}>{props.description}</Text> */}
</View>
<View style={styles.name}>
<Text style={{flex:0.4 ,numberOfLines:1,}} ></Text>
{
showMore===-1?null:<Text style={{flex:1,fontWeight:'bold',fontSize:14}}>{props.description}</Text>
}
</View>



</View>
</View>
 <View style={styles.circleImage}>
    
        
     {
         
         props.image ?<Image source={{uri:props.image}}  style= {{ height:120, width: 90,resizeMode:'stretch' ,borderRadius:10}}/>: null
       
     }
        
            
     </View>  
 <View style={{height:20,width:'100%',position:'absolute',bottom:0,justifyContent:'center',alignItems:'flex-end',marginRight:'30%',marginBottom:'3%'}}>
 {/* <TouchableOpacity  style={styles.circleImage1} onPress={handleShowMore}>
    
     </TouchableOpacity>   */}
</View>
</View>



    )
}

const styles = StyleSheet.create({
    body:{
width:'90%',height:'auto',marginTop:'2%',backgroundColor:'#eeeeee',borderRadius:10,marginLeft:'3%',marginRight:'3%'
    },
    innnerbody:{
        height:'auto',backgroundColor:'white',padding:5,
        width:'100%',marginVertical:20,borderRadius:10
            },circleImage:{
                height:100,width:80,position:'absolute',top:0,marginTop:'1%',marginLeft:'3%',borderRadius:10,resizeMode:'stretch'
            },
            aboutuser:{
                width:'100%',
                height:'auto',

            },name:{
                flexDirection:'row',padding:3
            },circleImage1:{
                height:40,width:20,position:'absolute',backgroundColor:'red',
               marginLeft:'6%',borderRadius:30,borderWidth:1,borderColor:'red'
            },
});
export default FlatListItem