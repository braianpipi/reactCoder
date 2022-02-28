import React, { createContext, useState} from 'react'

export const ItemContext = createContext();

const initialState=[
    {id :343 , name :'sarazaasd', price : 299},
    
    {id :3243 , name :'sarazaasd', price : 24},
    
    {id :3443 , name :'sarazsadasa', price : 28},
    
    {id :3435 , name :'asdassaraza', price : 25},
];

export const ItemProvider = ({children}) => {
    const [items, setItems] = useState (initialState);
    
    return <ItemContext.Provider value= {[items, setItems ]} >{children}</ItemContext.Provider>;
    
}