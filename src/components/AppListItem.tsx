import React from 'react'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { ListItem, Avatar,Button } from 'react-native-elements'
import Container from '../components/Container'


interface Data {
  name:string;
  avatar_url:string;
  subtitle:string
}

interface Props {
  list: Data[];
  removeHandler:any
}

const AppListItem = (props:Props)=> {
   const {list,removeHandler} = props
      const [isLoaded] =  useFonts({
      IBMPlexSansBold: require('../assets/fonts/IBMPlexSans-Bold.ttf'),
      IBMPlexSansThin: require('../assets/fonts/IBMPlexSans-Thin.ttf'),
      
    });
    if (!isLoaded) {
        return <AppLoading />
       }
    return (
    <Container>
            {
   list.map((l, i) => (
      <ListItem.Swipeable 
       onPress={()=>{}}
       underlayColor={'#FFD485'} 
       key={i} bottomDivider
       rightContent={
            <Button
            raised
            onPress={()=> removeHandler(l)}
            icon={{ name: 'delete', color: 'white' }}
            buttonStyle={{ minHeight: '100%', backgroundColor: '#D81159' }}
            />
         }
     >
        <Avatar source={{uri: l.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title 
            style={{
              fontFamily:'IBMPlexSansBold'
                }}>
             {l.name}
          </ListItem.Title>
          <ListItem.Subtitle
            style={{
              fontFamily:'IBMPlexSansThin'
                }}
          >
              {l.subtitle}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem.Swipeable>
    ))
  }
       </Container>
    )
}

export default AppListItem
