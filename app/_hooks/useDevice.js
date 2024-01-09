"use client"
import { useEffect, useState } from "react";

export const useDevice = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    // Función para manejar cambios en el tamaño de la ventana
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Agregar el evento de redimensionamiento al montar el componente
    window.addEventListener('resize', handleResize);

    // Eliminar el evento al desmontar el componente para evitar fugas de memoria
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isMobile }
}