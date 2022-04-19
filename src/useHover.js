import  {useState, useRef, useEffect} from 'react'

export default function useHover() {
  
    const [hovered, setHovered] = useState(false);
    const ref  = useRef(null);

    function enter(){
        setHovered(true);
    }
    function leave(){
        setHovered(false);
    }
    useEffect(() => {
        const current = ref.current;
        current.addEventListener("mouseenter", enter)
        current.addEventListener("mouseleave", leave)

        return () => {
        current.removeEventListener("mouseenter", enter)
        current.removeEventListener("mouseleave", leave)
        }
    }, [])

    return [hovered, ref]
   
}
