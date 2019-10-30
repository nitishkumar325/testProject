import React, { PureComponent } from 'react';
import {  View, Text,FlatList } from 'react-native';
import ListItem from './flatListItem1'
const Data=[
    {A:'Apple',id:1},
    {A:'Apple1',id:2},
    {A:'Apple2',id:3},
    {A:'Apple3',id:4},
    {A:'Apple4',id:5},
    {A:'Apple5',id:6},
    {A:'Apple6',id:7},
    {A:'Apple7',id:8},
    {A:'Apple8',id:9},
]

export default class FlatListDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <FlatList
        data={data}
        renderItem={(item)=><ListItem/>}

        />
      </View>
    );
  }
}
