import { defineStore } from 'pinia';
import { store } from '@/store';

const InitUserInfo = {
  roles: [],
};

export const useUserStore = defineStore('user', {
  state: () => ({
    token: 'main_token',
    userInfo: InitUserInfo,
  }),
  getters: {
    roles: (state) => {
      return state.userInfo?.roles;
    },
  },
  actions: {
    async logout() {
      this.token = '';
      this.userInfo = InitUserInfo;
    },
  },
});

export function getUserStore() {
  return useUserStore(store);
}
