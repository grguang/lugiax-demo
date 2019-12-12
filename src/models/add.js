import lugiax from '@lugia/lugiax'

export default lugiax.register({
  model: 'add',
  state: {
    name: '',
    age: '',
    address: ''
  },
  mutations: {
    sync: {
      btnClick(state,params){
        let theState;
        theState = state.set('name', '').set('age','').set('address','');

        return theState
      }
    },
    async: {

    }
  },
});
