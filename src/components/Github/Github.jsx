import React, { useEffect, useState } from 'react'

export default function Github() {

    const [follow , setFollow] = useState(0)
    useEffect(() => {
        fetch('https://api.github.com/users/JerawalaTufel')
        .then((res) => res.json())
        .then((data) => {
            setFollow(data.following);
            console.log(data.following);
        })
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github following  : {follow}</div>
  )
}
