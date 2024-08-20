import React from 'react'
import "./F_B.css"
import { Link } from 'react-router-dom'
const FrontEndPage = () => {
  return (
   <React.Fragment>
    <div className="flex items-center w-full h-screen justify-center">
        <div className="card w-full max-w-3xl p-4 bg-gray-400 bg-opacity-80 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className='bg_square absolute h-1/3 aspect-square bottom-1 right-1 bg-[#fa9562] z-[-1] bg-opacity-30 rounded-xl'></div>
          <div className='bg_square absolute h-1/3 aspect-square top-1 left-1 bg-[#fa9562] z-[-1] bg-opacity-30 rounded-xl'></div>
          <h2 className="text-2xl font-bold mb-5 text-gray-800 text-center">FRONT-END </h2>
          <p className="text-gray-600 text-center text-[1rem]">Nel Front-end utilizzo linguaggi di Markup e di Stylesheet quali HTML & CSS. <br/>
          Grazie a loro, ho scoperto l'efficace interazione di una DOM pulita, a creare Web Applications con una eccellente responsiveness e rendere tutta la User Interface (UI) chiara e utile all'utente. <br/>
          Come linguaggio di programmazione, ho appreso eccellenti competenze in Javascript agli inizi del 2022 e per la quale ho sviluppato diversi <Link to="/projects" className='hover:text-red-800 duration-200 font-bold'>PROGETTI</Link> nel corso di questi anni. 
          </p>
          <br/>

          <p>
            <ul className='p-3 list-disc text-gray-800'>
              <li>
              Giugno 2022 : ho trovato un corso sulla piattaforma Udemy per l'apprendimento delle basi dell'informatica.
              <br/>
              Qui feci i primi passi nell'ambito della programmazione e sbloccai quella giusta consapevolezza da farmi capire ciò che è comune utilizzo di tutti i giorni.
              </li>
              <br/>
              <li>
              Gennaio 2024 : ho deciso di cominciare il corso intensivo di 6 mesi <Link to="/certificates">"Boolean"</Link>, dove ho aggiornato le mie competenze di tutto il Front-End. <br/>
              Ho messo mano per la prima volta a VueJS, uno dei framework di javascript più utilizzati, entrando così nell'ottica delle SPA (SINGLE-PAGE-APPLICATION) e delle API REST. <br/>
              </li>
              <br/>
              <li>
              Maggio 2024 : ho cominciato a lavorare per una azienda di consulenza denominata ALTEN IT con sede a GENOVA (GE) in Liguria.
              <br/>
              Qui ho scoperto React.js, framework di Javascript molto utilizzato per la creazione di applicazioni dinamiche senza necessità di ricaricare la pagina, permettendo così maggiore rapidità, flessibilità ed efficienza.

              </li>
              <br></br>
              {/* AGGOINGERE ANGULAR */}


            </ul>
          </p>
        </div>
      </div>
   </React.Fragment>
  )
}

export default FrontEndPage
