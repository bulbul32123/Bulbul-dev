import React,{ createContext, useState } from "react";
export const Contexts = createContext()


export default function ContextApi({ children }) {
    const [isOpen, setOpen] = useState(false)
    const [imgUrl, setImgUrl] = useState({
        imgUrl: null,
        isOpenPreviewImage: false
    });
    return (
        <Contexts.Provider value={{
            isOpen, setOpen  ,
            imgUrl, setImgUrl       
        }}>
            {children}
        </Contexts.Provider>
    )
}
