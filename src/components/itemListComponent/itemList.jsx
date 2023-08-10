import ItemComponent from './itemComponent/itemComponent';

function itemList ({videojuegos}){
    return (
    <div className='estiloContenedor'>
    <h2 className='greetingStyles'>Bienvenido a Vapor verde</h2>
    <div className='itemList'>
    {videojuegos.map((juego) => <ItemComponent key= {juego.id}{...juego}/>)}  
    </div>
  </div>
  )
}
export default itemList;