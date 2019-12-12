import React from 'react';
import {Input, Button} from '@lugia/lugia-web';
import lugiax,{bindTo, connect} from '@lugia/lugiax';
import add from '../../models/add';

const BindInput = bindTo(
  add,
  {
    name: 'value',
  },
  {
    onChange: {
      name(e) {
        return e.newValue;
      },
    },
  }
)(Input);
const BindAgeInput = bindTo(
  add,
  {
    age: 'value',
  },
  {
    onChange: {
      age(e) {
        return e.newValue;
      },
    },
  }
)(Input);
const BindAddressInput = bindTo(
  add,
  {
    address: 'value',
  },
  {
    onChange: {
      address(e) {
        return e.newValue;
      },
    },
  }
)(Input);

class Add extends React.Component {
  constructor(){
    super();
    lugiax.on((mutation, params, { mutations, wait, }) => {
    });
  }
  render() {
    const {btnClick} = this.props;
    console.log('sssssssssssss');
    return (
      <div>
        <BindInput placeholder={'name'}/>
        <BindAgeInput placeholder={'age'}/>
        <BindAddressInput placeholder={'adress'}/>
        <Button onClick={btnClick}>Change</Button>
        <Button>ADD</Button>
      </div>
    )
  }
}

export default connect(
  add,
  state => {
    const {add} = state;
    return {
      names: add.get('name')
    }
  },
  mutation => {
    const {add} = mutation;

    return {
      btnClick: add.btnClick
    }
  }
)(Add);
