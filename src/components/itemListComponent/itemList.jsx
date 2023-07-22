import ItemComponent from './itemComponent/item';

function itemList ({videojuegos}){
    return (
    <div className='estiloContenedor'>
    <h2 className='greetingStyles'>Bienvenido a Vapor verde</h2>
    <div>
    {videojuegos.map((juego) => <ItemComponent key= {juego.id}{...juego}/>)}  
    </div>
  </div>
  )
}
export default itemList;