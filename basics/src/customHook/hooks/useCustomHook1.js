import {useEffect} from 'react'

//always add use at the starting of your custom hook
 const useCustomHook1 = (count) => {
    useEffect(()=>{
        document.title=`Title - ${count}`
    },[count])
}



export default useCustomHook1