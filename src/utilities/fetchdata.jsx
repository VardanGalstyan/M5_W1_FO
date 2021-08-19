import React from 'react'



export default function fetchdata() {
    return (
        <div>
            
        </div>
    )
}



const fetchData = async  (url, ) => {
    const response = await fetch(url)
    const data = await response.json()
    
}