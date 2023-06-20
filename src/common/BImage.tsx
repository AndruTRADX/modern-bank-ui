'use client'
import Image, { StaticImageData } from 'next/image'
import { useState, useEffect } from 'react'

const BImage = ({
  imgData,
  maxHeight,
  alt,
}: {
  imgData: StaticImageData
  maxHeight?: string
  alt: string
}) => {
  const [isLargeScreen, setIsLargeScreen] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1060)
    }

    handleResize()

    // Escucha el evento de cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize)

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Este querido componente es dificil de usar 😓
  // Así que aquí está un pequeño cambio
  return (
    <Image
      src={imgData}
      alt={alt}
      className="z-[5]"
      style={{
        objectFit: 'contain',
      }}
      sizes={`(min-width: 100%) (min-height: 100%) (max-height: ${
        maxHeight ? maxHeight : '345px'
      })`}
      fill={isLargeScreen}
    />
  )
}

export default BImage
