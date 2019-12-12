import lugiax from '@lugia/lugiax'

export default lugiax.register({
  model: 'user',
  state: {
    data: [
      { name: 'Jack', age: 28, address: 'some where', key:'1' },
      { name: 'Rose', age: 36, address: 'some where', key:'2' },
    ]
  },
  mutations: {
    sync: {
      deleteUser(state, params, mutation){
        return state.set('data',[])
      }
    },
    async: {
      login(){}
    }
  },
});
