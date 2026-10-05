import { create } from 'zustand';

const useMobileNavStore = create((set, get) => ({
  screenStack: ['lock'],
  screenData: null,
  isControlCenterOpen: false,
  
  currentScreen: () => {
    const stack = get().screenStack;
    return stack[stack.length - 1];
  },
  pushScreen: (screen, data = null) => set((state) => ({
    screenStack: [...state.screenStack, screen],
    screenData: data,
  })),
  popScreen: () => set((state) => ({
    screenStack: state.screenStack.length > 1 
      ? state.screenStack.slice(0, -1) 
      : state.screenStack,
    screenData: null,
  })),
  goHome: () => set({ screenStack: ['home'], screenData: null }),
  unlock: () => set({ screenStack: ['home'], screenData: null }),
  
  toggleControlCenter: (isOpen) => set((state) => ({ 
    isControlCenterOpen: isOpen !== undefined ? isOpen : !state.isControlCenterOpen 
  })),
}));

export default useMobileNavStore;
