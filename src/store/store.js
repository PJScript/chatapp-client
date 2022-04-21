import create from 'zustand'

export const useStore = create( set => ({
  socket:'',
  setSocket: (socket) => set({socket:socket}),
})

)