'use client';

import { useState } from 'react';
import Image from 'next/image';
import WPicon from "@/assets/WPicon.png";


const WhatsappButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="fixed bottom-8 right-6 z-50 flex flex-col items-start space-y-3">
      {/* Botón de WhatsApp */}
      <button
        onClick={toggleChat}
        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:bg-green-600 transition-transform duration-300 hover:scale-105"
      >
        <Image
          src={WPicon.src}
          alt="WhatsApp Icon"
          width={30}
          height={30}
        />
      </button>

      {/* Caja de chat */}
      {isChatOpen && (
        <div className="relative mt-2 p-4 bg-white rounded-xl shadow-2xl w-72 animate-slideIn transform transition-transform">
          {/* Botón de cerrar */}
          <button
            onClick={toggleChat}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          >

           
          </button>

          {/* Contenido de la caja de chat */}

          <div
           onClick={toggleChat}
          className="absolute text-black right-3 top-1 font-bold text-xl hover:text-green-600  cursor-pointer"> 
          X </div>
          <div className="">
          <p className="text-gray-800 font-semibold">¡Hola! 👋</p>
          <p className="text-gray-600 mt-1">¿En qué puedo ayudarte hoy?</p>
          </div>

          
          <a
            href="https://api.whatsapp.com/send?phone=573148755704" //
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-center bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Enviar mensaje por WhatsApp
          </a>
        </div>
      )}
    </div>
  );
};

export default WhatsappButton;
