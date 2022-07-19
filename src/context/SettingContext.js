import {  createContext,useContext,useState } from "react";

 const SettingContext = createContext();
export  const useSettings = () => useContext(SettingContext)


const Provider =({children})=>{
    const templates = {
        yellow:{
          color:"white",
          bg:'orange',
          size:16
        },
        red:{
          
            color:"white",
            bg:'red',
            size:16
        },
        black:{
          color:"white",
          bg:'black',
          size:16
      },
      blue:{
        color:"white",
        bg:'blue',
        size:16
      }
       } 
    
    const [template,setTemplate] = useState({
        color:"white",
        bg:'blue',
        size:16
      })
      
       const changeTemplate = (value) => {
        setTemplate(templates[value]) 
       }
       const SettingContextValue = {
        template,
        changeTemplate
      }
      



    return(
     <SettingContext.Provider value={SettingContextValue}>
         {children}
    </SettingContext.Provider>
    )
}

export default Provider;

