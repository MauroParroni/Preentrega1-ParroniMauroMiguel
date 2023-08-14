import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  where,
  query,
  addDoc
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "vapor-f1de9.firebaseapp.com",
  projectId: process.env.REACT_APP_PROYECT_ID,
  storageBucket: "vapor-f1de9.appspot.com",
  messagingSenderId: "583982299358",
  appId: "1:583982299358:web:8ef03388e105372c91aa4f",
  measurementId: "G-N7Q4QR54Z8",
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

async function getData() {
  const videojuegosRef = collection(db, "videojuegos");
  const documentsSnapshot = await getDocs(videojuegosRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map((item) => ({ ...item.data(), id: item.id }));
  return docsData;
}

async function getProductData(id) {
  const docRef = doc(db, "videojuegos", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("no existe");
  }
}

async function getCategoryData(categoryURL) {
  const videojuegosRef = collection(db, "videojuegos");
  const q = query(videojuegosRef, where("categoria", "==", categoryURL));
  const documentsSnapshot = await getDocs(q);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map((item) => ({ ...item.data(), id: item.id }));
  return docsData;
}
async function exportProducts(){
  const videojuegos = [
    {
      nombre: "The Witcher 3: Wild Hunt",
      precio: 39.99,
      stock: 15,
      categoria: "RPG",
      imagen:
        "https://th.bing.com/th/id/R.02931056d6f9e85421540891824699fb?rik=O4M%2bjevRMWooSw&riu=http%3a%2f%2fwww.mobygames.com%2fimages%2fcovers%2fl%2f305108-the-witcher-3-wild-hunt-playstation-4-front-cover.jpg&ehk=KhcXbl4En9fujtGcBDEff8FrppYGqpjIXRv4fjCigbE%3d&risl=&pid=ImgRaw&r=0",
      info: "Emocionante juego de rol de mundo abierto protagonizado por el cazador de monstruos Geralt de Rivia.",
      requisitos: [
        "Sistema Operativo: Windows 10 64-bit",
        "Procesador: Intel Core i7-3770 / AMD FX-8350",
        "Memoria RAM: 8 GB",
        "Tarjeta gráfica: NVIDIA GTX 770 / AMD Radeon RX 470",
        "Espacio en Disco: 50 GB de espacio libre",
        "Conexión a Internet: Se requiere conexión a Internet para activación del producto y actualizaciones.",
      ],
    },
    {
      nombre: "Resident Evil Village",
      precio: 49.99,
      stock: 10,
      categoria: "Terror",
      imagen:
        "https://th.bing.com/th/id/R.48d49dbf565d8a0b2927c8874719c176?rik=yHmvQwuEXods3g&pid=ImgRaw&r=0",
      info: "Intenso juego de terror en primera persona ambientado en una inquietante aldea habitada por criaturas aterradoras.",
      requisitos: [
        "Sistema Operativo: Windows 10 64-bit",
        "Procesador: Intel Core i5-7500 / AMD Ryzen 3 1200",
        "Memoria RAM: 8 GB",
        "Tarjeta gráfica: NVIDIA GTX 1050 Ti / AMD Radeon RX 560",
        "Espacio en Disco: 40 GB de espacio libre",
        "Conexión a Internet: Se requiere conexión a Internet para activación del producto y actualizaciones.",
      ],
    },
    {
      nombre: "FIFA 23",
      precio: 49.99,
      stock: 20,
      categoria: "Deportes",
      imagen:
        "https://tu.duoduocdn.com/uploads/day_221016/202210162321398166.jpg",
      info: "La nueva entrega del popular juego de fútbol que ofrece una experiencia realista y emocionante en el campo.",
      requisitos: [
        "Sistema Operativo: Windows 10 64-bit",
        "Procesador: Intel Core i5-9400F / AMD Ryzen 5 3600",
        "Memoria RAM: 8 GB",
        "Tarjeta gráfica: NVIDIA GTX 1660 / AMD Radeon RX 5700",
        "Espacio en Disco: 50 GB de espacio libre",
        "Conexión a Internet: Se requiere conexión a Internet para activación del producto y actualizaciones.",
      ],
    },
    {
      nombre: "Grand Theft Auto V",
      precio: 29.99,
      stock: 8,
      categoria: "Acción",
      imagen:
        "https://tse1.mm.bing.net/th/id/OIP.ibMRFYSG7_0D6pA56JhqsQHaHa?pid=ImgDet&rs=1",
      info: "Sumérgete en el mundo del crimen y la acción en este juego de mundo abierto lleno de oportunidades.",
      requisitos: [
        "Sistema Operativo: Windows 10 64-bit",
        "Procesador: Intel Core i5-3470 / AMD FX-8350",
        "Memoria RAM: 8 GB",
        "Tarjeta gráfica: NVIDIA GTX 660 / AMD HD 7870",
        "Espacio en Disco: 100 GB de espacio libre",
        "Conexión a Internet: Se requiere conexión a Internet para activación del producto y actualizaciones.",
      ],
    },
    {
      nombre: "Cyberpunk 2077",
      precio: 34.99,
      stock: 5,
      categoria: "RPG",
      imagen:
        "https://th.bing.com/th/id/R.8aa4f66165657cbb599243a745d156fa?rik=niHuvlpsDzqqQg&pid=ImgRaw&r=0",
      info: "Explora Night City, una metrópolis obsesionada con el poder, la moda y las modificaciones corporales en este RPG de acción.",
      requisitos: [
        "Sistema Operativo: Windows 10 64-bit",
        "Procesador: Intel Core i7-4790 / AMD Ryzen 3 3200G",
        "Memoria RAM: 12 GB",
        "Tarjeta gráfica: NVIDIA GTX 1060 / AMD Radeon R9 Fury",
        "Espacio en Disco: 70 GB de espacio libre",
        "Conexión a Internet: Se requiere conexión a Internet para activación del producto y actualizaciones.",
      ],
    },
    {
      nombre: "Fortnite",
      precio: 0,
      stock: 100,
      categoria: "Acción",
      imagen:
        "https://3.bp.blogspot.com/-mCnzjudwG_o/W4yoIE7eoII/AAAAAAAADkM/iqgE4VBXrmoYdb65kaWeCpEw2p3FB-JtgCEwYBhgL/s1600/SQ_NSwitchDS_Fortnite.jpg",
      info: "Juego multijugador en línea donde cien jugadores luchan por ser el último sobreviviente en una isla llena de peligros y sorpresas.",
      requisitos: [
        "Sistema Operativo: Windows 7/8/10 64-bit",
        "Procesador: Intel Core i5-7300U / AMD Ryzen 5 2600",
        "Memoria RAM: 8 GB",
        "Tarjeta gráfica: NVIDIA GTX 660 / AMD Radeon HD 7870",
        "Espacio en Disco: 100 GB de espacio libre",
        "Conexión a Internet: Se requiere conexión a Internet para jugar.",
      ],
    },
    {
      nombre: "Minecraft",
      precio: 19.99,
      stock: 25,
      categoria: "Aventura",
      imagen:
        "https://tse4.mm.bing.net/th/id/OIP.piCtesIox7MUNbpHwmA0QgHaHa?pid=ImgDet&rs=1",
      info: "Crea y explora mundos infinitos generados aleatoriamente y construye estructuras impresionantes en este popular juego de construcción y aventura.",
      requisitos: [
        "Sistema Operativo: Windows 7/8/10",
        "Procesador: Intel Core i5-4690 / AMD A10-7800",
        "Memoria RAM: 8 GB",
        "Tarjeta gráfica: NVIDIA GTX 960 / AMD Radeon R9 285",
        "Espacio en Disco: 4 GB de espacio libre",
        "Conexión a Internet: Se requiere conexión a Internet para jugar.",
      ],
    },
    {
      nombre: "Call of Duty: Warzone",
      precio: 0,
      stock: 100,
      categoria: "Acción",
      imagen:
        "https://tse1.mm.bing.net/th/id/OIP.Qwv1Op9lwodz9u7iwFeggwHaHa?pid=ImgDet&rs=1",
      info: "Entra en el campo de batalla masivo y gratuito de Call of Duty, donde cientos de jugadores luchan por la supervivencia en un mundo abierto.",
      requisitos: [
        "Sistema Operativo: Windows 10 64-bit",
        "Procesador: Intel Core i5-2500K / AMD Ryzen R5 1600X",
        "Memoria RAM: 12 GB",
        "Tarjeta gráfica: NVIDIA GTX 970 / AMD Radeon R9 390",
        "Espacio en Disco: 175 GB de espacio libre",
        "Conexión a Internet: Se requiere conexión a Internet para jugar.",
      ],
    },
    {
      nombre: "League of Legends",
      precio: 0,
      stock: 100,
      categoria: "RPG",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_2X_974902-MLB49159504149_022022-F.jpg",
      info: "Únete a un equipo de campeones y enfréntate a otros jugadores en intensas batallas 5v5 en el popular MOBA League of Legends.",
      requisitos: [
        "Sistema Operativo: Windows 7/8/10",
        "Procesador: Intel Core 2 Duo E8400 / AMD Phenom II X2 555",
        "Memoria RAM: 2 GB",
        "Tarjeta gráfica: NVIDIA GTX 560 / AMD Radeon HD 5670",
        "Espacio en Disco: 12 GB de espacio libre",
        "Conexión a Internet: Se requiere conexión a Internet para jugar.",
      ],
    },
    {
      nombre: "Red Dead Redemption 2",
      precio: 49.99,
      stock: 10,
      categoria: "Acción",
      imagen:
        "https://tse2.mm.bing.net/th/id/OIP.XyzJMuq152Nds6urQ0GnMAHaHa?pid=ImgDet&rs=1",
      info: "Embárcate en una épica aventura en el salvaje oeste como Arthur Morgan, un forajido buscado por la ley y perseguido por su pasado.",
      requisitos: [
        "Sistema Operativo: Windows 7/8/10 64-bit",
        "Procesador: Intel Core i5-2500K / AMD FX-6300",
        "Memoria RAM: 8 GB",
        "Tarjeta gráfica: NVIDIA GTX 770 / AMD Radeon R9 280",
        "Espacio en Disco: 150 GB de espacio libre",
        "Conexión a Internet: Se requiere conexión a Internet para activación del producto y actualizaciones.",
      ],
    },
    {
      nombre: "Horizon Zero Dawn",
      precio: 29.99,
      stock: 7,
      categoria: "Aventura",
      imagen:
        "https://tse2.mm.bing.net/th/id/OIP.Xrt2PGpWuSdjCh7RMm8HcgHaHa?pid=ImgDet&w=800&h=800&rs=1",
      info: "Embárcate en un emocionante viaje en un mundo post-apocalíptico donde los robots dominan la tierra y descubre los secretos del pasado.",
      requisitos: [
        "Sistema Operativo: Windows 10 64-bit",
        "Procesador: Intel Core i5-2500K / AMD FX 6300",
        "Memoria RAM: 8 GB",
        "Tarjeta gráfica: NVIDIA GTX 780 / AMD Radeon R9 290",
        "Espacio en Disco: 100 GB de espacio libre",
        "Conexión a Internet: Se requiere conexión a Internet para activación del producto y actualizaciones.",
      ],
    },
    {
      nombre: "Call of Duty: Modern Warfare",
      precio: 54.99,
      stock: 15,
      categoria: "Acción",
      imagen:
        "https://tse2.mm.bing.net/th/id/OIP.Dqzsp6af963-6uFZXXcaRgAAAA?pid=ImgDet&rs=1",
      info: "Enfréntate a una emocionante campaña, intensos modos multijugador y emocionantes operaciones especiales en este FPS de acción.",
      requisitos: [
        "Sistema Operativo: Windows 7/8/10 64-bit",
        "Procesador: Intel Core i5-2500K / AMD Ryzen R5 1600X",
        "Memoria RAM: 12 GB",
        "Tarjeta gráfica: NVIDIA GTX 970 / AMD Radeon R9 390",
        "Espacio en Disco: 175 GB de espacio libre",
        "Conexión a Internet: Se requiere conexión a Internet para activación del producto y actualizaciones.",
      ],
    },
    {
      nombre: "Dead Space",
      precio: 29.99,
      stock: 12,
      categoria: "Terror",
      imagen: "https://www.digiseller.ru/preview/429992/p1_3618446_cb2f6be6.jpg",
      info: "Sumérgete en una experiencia de terror espacial en este juego de supervivencia en el que te enfrentarás a horribles criaturas en una nave abandonada.",
      requisitos: [
        "Sistema Operativo: Windows 7/8/10",
        "Procesador: Intel Core 2 Duo E6700 / AMD Athlon 64 X2 Dual Core 6400+",
        "Memoria RAM: 2 GB",
        "Tarjeta gráfica: NVIDIA GTX 660 / AMD Radeon HD 2900 XT",
        "Espacio en Disco: 10 GB de espacio libre",
        "Conexión a Internet: Se requiere conexión a Internet para activación del producto y actualizaciones.",
      ],
    },
    {
      nombre: "Overwatch",
      precio: 39.99,
      stock: 8,
      categoria: "Acción",
      imagen:
        "https://tse4.mm.bing.net/th/id/OIP.WiwIc31v4EpN_vG6klGB_QHaHa?pid=ImgDet&w=537&h=537&rs=1",
      info: "Únete a un equipo y enfréntate a terroristas o antiterroristas en emocionantes partidas competitivas de disparos.",
      requisitos: [
        "Sistema Operativo: Windows 7/8/10 64-bit",
        "Procesador: Intel Core i3 / AMD Phenom X3 8650",
        "Memoria RAM: 4 GB",
        "Tarjeta gráfica: NVIDIA GTX 460 / AMD Radeon HD 4850",
        "Espacio en Disco: 30 GB de espacio libre",
        "Conexión a Internet: Se requiere conexión a Internet para jugar.",
      ],
    },
    {
      nombre: "Assassin's Creed Valhalla",
      precio: 44.99,
      stock: 5,
      categoria: "Acción",
      imagen:
        "https://static.fnac-static.com/multimedia/Images/FR/NR/f2/92/cc/13406962/1540-1/tsp20210507175150/Aain-s-Creed-Valhalla-The-Wave-Of-Giants.jpg",
      info: "Sumérgete en la época de los vikingos y lidera tu clan en una épica aventura para conquistar un nuevo hogar.",
      requisitos: [
        "Sistema Operativo: Windows 10 64-bit",
        "Procesador: Intel Core i5-4460 / AMD Ryzen 3 1200",
        "Memoria RAM: 8 GB",
        "Tarjeta gráfica: NVIDIA GTX 960 / AMD R9 380",
        "Espacio en Disco: 50 GB de espacio libre",
        "Conexión a Internet: Se requiere conexión a Internet para activación del producto y actualizaciones.",
      ],
    },
    {
      nombre: "Counter-Strike: Global Offensive",
      precio: 0,
      stock: 100,
      categoria: "Acción",
      imagen:
        "https://tse2.mm.bing.net/th/id/OIP.Sab_AZRU69QUvr0RmhkrlQHaHa?pid=ImgDet&rs=1",
      info: "Únete a un equipo y enfréntate a terroristas o antiterroristas en emocionantes partidas competitivas de disparos.",
      requisitos: [
        "Sistema Operativo: Windows 7/8/10 64-bit",
        "Procesador: Intel Core 2 Duo E6600 / AMD Phenom X3 8750",
        "Memoria RAM: 4 GB",
        "Tarjeta gráfica: NVIDIA GTX 730 / AMD Radeon HD 6670",
        "Espacio en Disco: 15 GB de espacio libre",
        "Conexión a Internet: Se requiere conexión a Internet para jugar.",
      ],
    },
    {
      nombre: "The Last of Us Part II",
      precio: 49.99,
      stock: 7,
      categoria: "Aventura",
      imagen:
        "https://i.pinimg.com/originals/c0/dd/07/c0dd07f12f70baf061db3c543dcede26.jpg",
      info: "Acompaña a Ellie en un emocionante viaje en un mundo post-apocalíptico en busca de venganza y supervivencia.",
      requisitos: [
        "Sistema Operativo: Windows 10 64-bit",
        "Procesador: Intel Core i5-3570 / AMD Ryzen 5 1600",
        "Memoria RAM: 8 GB",
        "Tarjeta gráfica: NVIDIA GTX 970 / AMD Radeon RX 590",
        "Espacio en Disco: 100 GB de espacio libre",
        "Conexión a Internet: Se requiere conexión a Internet para activación del producto y actualizaciones.",
      ],
    },
    {
      nombre: "Star Wars Jedi: Fallen Order",
      precio: 34.99,
      stock: 10,
      categoria: "Acción",
      imagen:
        "https://th.bing.com/th/id/R.a0865af42fc6f0cce7e19b51b4afb8cf?rik=fQrnoeP9vWb6nA&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2f2019%2f06%2fstar-wars-jedi-fallen-order.png&ehk=IKPil4Jn0XlGTBc9vdL4Kr7kNGHFTF8A%2fYFAX50lHz4%3d&risl=&pid=ImgRaw&r=0",
      info: "Explora la galaxia en la piel de un joven Jedi en fuga mientras aprendes el camino de la Fuerza y te enfrentas al Imperio.",
      requisitos: [
        "Sistema Operativo: Windows 7/8/10 64-bit",
        "Procesador: Intel Core i3-6100T / AMD FX 6300",
        "Memoria RAM: 8 GB",
        "Tarjeta gráfica: NVIDIA GTX 650 / AMD Radeon HD 7750",
        "Espacio en Disco: 55 GB de espacio libre",
        "Conexión a Internet: Se requiere conexión a Internet para activación del producto y actualizaciones.",
      ],
    },
    {
      nombre: "Sekiro: Shadows Die Twice",
      precio: 44.99,
      stock: 10,
      categoria: "Aventura",
      imagen:
        "https://www.mobygames.com/images/covers/l/506761-sekiro-shadows-die-twice-playstation-4-front-cover.png",
      info: "Adéntrate en el Japón feudal y conviértete en un poderoso guerrero samurái en este juego desafiante de acción y sigilo.",
      requisitos: [
        "Sistema Operativo: Windows 7/8/10 64-bit",
        "Procesador: Intel Core i3-2100 / AMD FX-6300",
        "Memoria RAM: 4 GB",
        "Tarjeta gráfica: NVIDIA GTX 760 / AMD Radeon HD 7950",
        "Espacio en Disco: 25 GB de espacio libre",
        "Conexión a Internet: Se requiere conexión a Internet para activación del producto y actualizaciones.",
      ],
    },
    {
      nombre: "The Elder Scrolls V: Skyrim",
      precio: 19.99,
      stock: 15,
      categoria: "RPG",
      imagen:
        "https://tse4.mm.bing.net/th/id/OIP.aIjstldZIMghwnW1IAyzrAHaHa?pid=ImgDet&rs=1",
      info: "Embárcate en una aventura épica en un mundo abierto lleno de dragones, magia y misterio en este clásico RPG.",
      requisitos: [
        "Sistema Operativo: Windows 7/8/10 64-bit",
        "Procesador: Intel Core i5-750 / AMD Phenom II X4-945",
        "Memoria RAM: 8 GB",
        "Tarjeta gráfica: NVIDIA GTX 470 / AMD Radeon HD 7870",
        "Espacio en Disco: 12 GB de espacio libre",
        "Conexión a Internet: Se requiere conexión a Internet para activación del producto y actualizaciones.",
      ],
    },
  ];
  for (const item of videojuegos) {
    const collectionRef = collection(db,"videojuegos")
     const docCreate = await addDoc (collectionRef, item)
     console.log ("Doc created with id:", docCreate.id)
  }
}
async function createOrder(orderData){
 const collectionRef = collection(db, "order");
 const docCreated = await addDoc(collectionRef, orderData)
 return (docCreated.id)
}
async function getOrder(id){
  const docRef = doc(db, "order",id);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()){
    return { ...docSnapshot.data(), id: docSnapshot.id};
  }else{
    throw new Error("No encontramos ese producto")
    
  }
}
export { getData, getProductData, getCategoryData, createOrder, getOrder, exportProducts};


