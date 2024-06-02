import { create } from "zustand";

interface IState {
  data: any;
  isLoading: boolean;
  handleSignUserInfo: (address: string) => Promise<null | undefined>;
}

const useUserStore = create<IState>((set) => ({
  data: null,
  isLoading: false,
  handleSignUserInfo: async (address: string) => {
    try {
      return null;
    } catch (error) {
      set({ data: null });
    } finally {
    }
  },
}));

export default useUserStore;
