import { useState, createContext } from 'react';

export const PokeContext = createContext(null);

const PokeProvider = (props) => {
  
  const [ likeList, setLikeList ] = useState([]);
  
  return (
    <PokeContext.Provider value={{ likeList, setLikeList }}>
      {props.children}
    </PokeContext.Provider>
  )
}

export default PokeProvider;