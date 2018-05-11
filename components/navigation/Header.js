import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title} from 'native-base';
import Logo from './Logo';

let AppHeader = () =>
  <Header style={{
    backgroundColor: '#362C1E',
  }}>
    <Left>
      <Button transparent>
        <Icon style={{color: 'white'}} name='arrow-back' />
      </Button>
    </Left>
    <Body>
      <Logo />
    </Body>
    <Right>
      <Button transparent>
        <Icon style={{color: 'white'}} name='menu' />
      </Button>
    </Right>
  </Header>

export default AppHeader;
