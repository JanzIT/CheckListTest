import React from 'react'

export const Notificacao = ({content, source, color }) => {
  return (
    <div style={{backgroundColor: color, padding: "10px", borderRadius: "5px", marginBottom: "10px"}}>
        <p>{content}</p>
        <p style={{ fontSize: '12px', color: 'gray' }}>By: {source}</p>
    </div>
  )
}

