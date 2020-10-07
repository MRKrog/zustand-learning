import { devtools, redux } from 'zustand/middleware';
import create from "zustand";


const initialState = {
  bears: 0
}

export const types = {
  increasePopulation: 'INCREASE_POPULATION',
  removeAllBears: 'REMOVE_ALL_BEARS'
}

const reducer = (state, { type, by }) => {
  console.log(type);

  switch (type) {
    case 'INCREASE_POPULATION':
      return { bears: state.bears + by }
    case types.removeAllBears:
      return { bears: 0 }
    default:
      return
  }
}

export const [useStore, api] = create(
  // Connects store to devtools
  // Without reducers and action-types you would see "setState" logged out instead
  devtools(
    // Transforms our store into a redux action dispatcher ...
    // Adds a dispatch method to the store as well as to the api
    redux(reducer, initialState)
  )
)

// const useStore = create(devtools(set => ({
//     bears: 0,
//     increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
//     removeAllBears: () => set({ bears: 0 })
// })))



// export default useStore;

// Usage with a plain action store, it will log actions as "setState"
// const useStore = create(devtools(store))
// Usage with a redux store, it will log full action types
// const useStore = create(devtools(redux(reducer, initialState)))
