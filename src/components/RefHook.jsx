import React, { useRef } from 'react'

export default function RefHook() {
    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    

    return (
    <div onClick={executeScroll} ref={myRef}>RefHook</div>
  )
}
