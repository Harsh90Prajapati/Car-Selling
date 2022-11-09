import React from 'react'

const FileScreen = ({ image, title, desc }) => {
 

  return (
      <div className="w-full bg-white flex flex-col rounded-md shadow-md p-2">
          <img src={image} alt="" className="w-full" />
          <p className="text-xl font-bold py-2 w-full">{title}</p>
      <p className="py-2text-gray-500">{desc.substring(0, 50)}...</p>
      
      </div>
  )
}

export default FileScreen;