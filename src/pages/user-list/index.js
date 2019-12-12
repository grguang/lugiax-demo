import React from 'react';
import {Table, Button} from '@lugia/lugia-web';
import {connect} from '@lugia/lugiax';
import user from '../../models/user';
import add from '../../models/add';


class List extends React.Component {
  delete = () =>{
    const {deleteUser} = this.props;
    deleteUser();
  };

  render() {
    console.log(this.props);
    const {data} = this.props;
    const columns = [{
      title: 'Name', dataIndex: 'name', key: 'name', width: 100,
    }, {
      title: 'Age', dataIndex: 'age', key: 'age', width: 100,
    }, {
      title: 'Address', dataIndex: 'address', key: 'address', width: 200,
    }, {
      title: 'Operations', dataIndex: '', key: 'operations', render: () => <a href="javascript:;">Delete</a>,
    }];
    return (
      <div>
        <Table columns={columns} data={data}></Table>
        <Button onClick={this.delete}>Delete</Button>
      </div>
    )
  }
}

const ConnectList = connect(
  user,
  state => {
    console.info('state', state);
    const {user} = state;
    const data = user.get('data');

    return {
      data: data.toJS ? data.toJS() : data
    }
  },
  mutations => {
    const {user} = mutations
    return {
      deleteUser: user.deleteUser,
      login: user.asyncLogin,
    }
  }
)(List);

export default ConnectList;
