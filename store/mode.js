export const state = () => ({
  status: 'search',
  item_id: '',
  article: {},
});

export const mutations = {
  SET_MODE: (state, payload) => {
    state.status = payload.status;
    state.item_id = payload.param_id;
    state.article = payload.article;
  }
};
