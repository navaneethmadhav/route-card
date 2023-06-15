import React, { useState } from 'react'
import QrScanner from 'react-qr-scanner'

const QRScanner = ({onScan}) => {

    const [scannedText, setScannedText] = useState('')

    const handleScan = (result) =>{
        if(result){
            setScannedText(result.text)
            onScan(result.text)
        }
    }

  return (
    <div className='w-25 h-25'>
        <QrScanner delay={300} oError={console.error} onScan={handleScan}/>
        <p>{scannedText}</p>
    </div>
  )
}

export default QRScanner