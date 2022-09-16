import'./styles/man.css'

import logoImg from './assets/logo-nlw-esports.png'

interface ButtonProps {
  title: string;
}


function App() {
  return (
   <div className="max-w-[1344] mx-auto flex flex-col items-center my-20">
    <img src={logoImg} alt="Logo" />

    <h1 className='text-6xl text-white font-black mt-20'>
      Seu <span className="bg-nlw-gradient">dou</span> Está aqui
    </h1>

   </div>
  )
}

export default App
