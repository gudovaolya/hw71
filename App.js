import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {connect} from 'react-redux';

import PicItem from './src/components/PicItem';
import {getItems, getNextItems} from "./src/store/actions";



class App extends Component {

  componentDidMount() {
      this.props.onGetItems();
  };


  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.items}
          data = {this.props.items}
          onEndReached={() => this.props.onGetNextItems(this.props.after)}
          onEndReachedThreshold={0.5}
          renderItem={(info) => (
              <PicItem
                  itemTitle={info.item.title}
                  itemImage={info.item.pic}
              />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 20
  },
  items: {
      width: '100%'
  }

});

const mapStateToProps = state => {
    return {
        items: state.items,
        after: state.after

    }

};
const mapDispatchToProps = dispatch => {
    return {
        onGetItems: () => dispatch(getItems()),
        onGetNextItems: (after) => dispatch(getNextItems(after))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);