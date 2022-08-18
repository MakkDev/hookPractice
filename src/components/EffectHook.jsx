import React, { useEffect, useState } from 'react'

export default function EffectHook() {

    const axios = require("axios");
    const [info, setInfo] = useState([])

    async function getInfo() {
        const { data } = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        );
        setInfo(data);
    }
    
    useEffect(() => {
        getInfo()
    })

  return (
    // info.map((item) => (
    //     <div>{item.name} </div>
    // ))
    <div> EffectHook</div>
  )
}
