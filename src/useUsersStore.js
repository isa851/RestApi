import { create } from 'zustand';
import axios from 'axios';

const useUsersStore = create((set) => ({
  users: [],
  loading: false,
  error: '',
  fetchUsers: async () => {
    set({ loading: true, error: '' });
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      set({ users: res.data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useUsersStore;
