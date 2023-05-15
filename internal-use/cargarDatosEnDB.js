// Este archivo carga los siguientes productos a la base de datos
// Este archivo no se ejecuta automaticamente

const { default: axios } = require("axios");

const registros = [
  {
    name: "Airpods",
    description:
      "Los nuevos AirPods reinventan el concepto de auriculares inalámbricos. Es sacarlos del estuche y ya funcionan con tu iPhone, Apple Watch, iPad o Mac, así de sencillo.",
    brand: "Apple",
    category: "Audio",
    price: 139.98,
    quantity: 70,
    image: "https://thumb.pccomponentes.com/w-530-530/articles/19/192582/2.jpg",
  },
  {
    name: "Altavoces inalámbricos",
    description:
      "Altavoces inalámbricos de alta fidelidad para disfrutar de un sonido envolvente y potente.",
    brand: "Bose",
    category: "Audio",
    price: 299.99,
    quantity: 25,
    image:
      "https://www.artikulos.co/wp-content/uploads/Bose-S1-en-www.artikulos.co_.jpg",
  },
  {
    name: "Auriculares Bluetooth",
    description:
      "Auriculares inalámbricos con conectividad Bluetooth para una experiencia musical sin cables.",
    brand: "Sony",
    category: "Audio",
    price: 199.99,
    quantity: 40,
    image:
      "https://cosonyb2c.vtexassets.com/arquivos/ids/275675/b789488955522f13ffb4778bd08465c6.jpg",
  },
  {
    name: "Grabadora de voz digital",
    description:
      "Grabadora portátil de voz digital con amplio almacenamiento y alta calidad de grabación.",
    brand: "Olympus",
    category: "Audio",
    price: 79.99,
    quantity: 15,
    image: "https://i.blogs.es/de61f7/olympus_voicetrek_g10/450_1000.jpg",
  },

  {
    name: "SHIVA K512",
    description:
      "La cantidad de prestaciones que ofrece el Shiva es asombrosa: prácticamente todo lo que presumen los teclados mecánicos tope de gama, el Shiva lo tiene también.",
    brand: "Shiva",
    category: "Teclados",
    price: 250.0,
    quantity: 10,
    image: "https://selectonline.co/img/cms/Blog%20TM%20-%2075%20teclado.jpeg",
  },
  {
    name: "Logitech G915",
    description:
      "El Logitech G915 es un teclado inalámbrico mecánico de alto rendimiento con iluminación RGB y una construcción de alta calidad.",
    brand: "Logitech",
    category: "Teclados",
    price: 199.99,
    quantity: 20,
    image:
      "https://conectamos.shop/wp-content/uploads/2020/12/71K1SVcBXNL._AC_SL1500_.jpg",
  },
  {
    name: "Razer Huntsman Elite",
    description:
      "El Razer Huntsman Elite es un teclado mecánico con interruptores ópticos, iluminación RGB y un diseño elegante para jugadores exigentes.",
    brand: "Razer",
    category: "Teclados",
    price: 179.99,
    quantity: 15,
    image:
      "https://i.rtings.com/assets/products/59GmJGpL/razer-huntsman-elite/design-medium.jpg",
  },
  {
    name: "Corsair K95 RGB Platinum XT",
    description:
      "El Corsair K95 RGB Platinum XT es un teclado mecánico con retroiluminación RGB personalizable, macros programables y un reposamuñecas cómodo.",
    brand: "Corsair",
    category: "Teclados",
    price: 209.99,
    quantity: 25,
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6394/6394003cv12d.jpg",
  },

  {
    name: "Corsair Carbide Series 275R",
    description:
      "El Corsair Carbide Series 275R es un gabinete de alta calidad con un diseño elegante y amplio espacio interior para una fácil instalación de componentes.",
    brand: "Corsair",
    category: "Gabinetes",
    price: 89.99,
    quantity: 15,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_609024-MCO46406992205_062021-O.jpg",
  },
  {
    name: "NZXT H510",
    description:
      "El NZXT H510 es un gabinete compacto con un diseño minimalista y excelente gestión de cables para una apariencia limpia y ordenada.",
    brand: "NZXT",
    category: "Gabinetes",
    price: 79.99,
    quantity: 25,
    image: "https://cdn.mos.cms.futurecdn.net/2AcsRqYaBCMjbhu4DzkMjM.jpg",
  },
  {
    name: "Cooler Master MasterBox MB511",
    description:
      "El Cooler Master MasterBox MB511 es un gabinete de tamaño mediano con un panel frontal de malla para un flujo de aire óptimo y soporte para múltiples ventiladores.",
    brand: "Cooler Master",
    category: "Gabinetes",
    price: 69.99,
    quantity: 20,
    image:
      "https://cdn.coolermaster.com/media/assets/1039/mb511argb_01_search_airflow-imageleftorright.png",
  },
  {
    name: "Fractal Design Meshify C",
    description:
      "El Fractal Design Meshify C es un gabinete compacto con paneles de malla para una excelente ventilación y un diseño estilizado que se adapta a cualquier configuración.",
    brand: "Fractal Design",
    category: "Gabinetes",
    price: 99.99,
    quantity: 18,
    image: "https://example.com/fractal-design-meshify-c.jpg",
  },

  {
    name: "Dell Ultrasharp U2719D",
    description:
      "El Dell Ultrasharp U2719D es un monitor de alta calidad con resolución QHD y colores precisos, ideal para trabajos creativos y uso general.",
    brand: "Dell",
    category: "Monitores",
    price: 349.99,
    quantity: 10,
    image:
      "https://www.fractal-design.com/app/uploads/2019/06/Meshify-C_6-1200x1200.jpg",
  },
  {
    name: "LG 27GL850-B",
    description:
      "El LG 27GL850-B es un monitor para juegos con una alta frecuencia de actualización, baja latencia y una excelente reproducción de colores para una experiencia de juego inmersiva.",
    brand: "LG",
    category: "Monitores",
    price: 499.99,
    quantity: 8,
    image: "https://www.lg.com/co/images/monitores/MD06186317/gallery/D01.jpg",
  },
  {
    name: "ASUS ProArt PA329Q",
    description:
      "El ASUS ProArt PA329Q es un monitor profesional con resolución 4K y una amplia gama de colores para una reproducción precisa y detallada de imágenes.",
    brand: "ASUS",
    category: "Monitores",
    price: 1299.99,
    quantity: 5,
    image:
      "https://www.asus.com/media/global/products/vnUKw9cSkmTd4XXp/P_setting_xxx_0_90_end_692.png",
  },
  {
    name: "BenQ PD2700U",
    description:
      "El BenQ PD2700U es un monitor 4K diseñado para diseñadores gráficos y profesionales creativos, con una reproducción de color precisa y una amplia conectividad.",
    brand: "BenQ",
    category: "Monitores",
    price: 599.99,
    quantity: 12,
    image: "https://clonesyperifericos.com/wp-content/uploads/3-87-520x520.jpg",
  },

  {
    name: "DXRacer Formula Series",
    description:
      "La DXRacer Formula Series es una silla gaming ergonómica con un diseño deportivo, ajustes personalizables y materiales de alta calidad para una experiencia de juego cómoda y duradera.",
    brand: "DXRacer",
    category: "Sillas",
    price: 299.99,
    quantity: 15,
    image:
      "https://www.gamerscolombia.com/img/products/Silla-DXRacer-F-SERIES-FORMULA-P09/DXRacer-Formula-P132-MUGCDXR100116587866212.jpg",
  },
  {
    name: "Secretlab Omega Series",
    description:
      "La Secretlab Omega Series es una silla gaming de lujo con una construcción robusta, soporte lumbar ajustable y tapicería de cuero de primera calidad para una comodidad excepcional durante largas sesiones de juego.",
    brand: "Secretlab",
    category: "Sillas",
    price: 349.99,
    quantity: 12,
    image:
      "https://revista-lagunas.s3.us-east-2.amazonaws.com/tiny/63d3d9d388591007de9ee999e.jpg",
  },
  {
    name: "AKRacing Masters Series Pro",
    description:
      "La AKRacing Masters Series Pro es una silla gaming de alto rendimiento con un diseño ergonómico, espuma de alta densidad y una estructura de acero resistente para brindar máximo confort y durabilidad.",
    brand: "AKRacing",
    category: "Sillas",
    price: 399.99,
    quantity: 8,
    image: "https://m.media-amazon.com/images/I/711mJz5HIaL.jpg",
  },
  {
    name: "Corsair T3 Rush",
    description:
      "La Corsair T3 Rush es una silla gaming cómoda y versátil con un diseño elegante, acolchado de espuma viscoelástica y soporte lumbar ajustable para una experiencia de juego sin igual.",
    brand: "Corsair",
    category: "Sillas",
    price: 249.99,
    quantity: 10,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_609258-MCO44331366657_122020-O.jpg",
  },

  {
    name: "Logitech G502 HERO",
    description:
      "El Logitech G502 HERO es un ratón gaming de alto rendimiento con un sensor óptico preciso, peso ajustable y botones programables para una experiencia de juego personalizada.",
    brand: "Logitech",
    category: "Ratones",
    price: 79.99,
    quantity: 20,
    image:
      "https://cdn.shopify.com/s/files/1/1295/3887/products/LogiG502LSWls_001_800x.png",
  },
  {
    name: "Razer DeathAdder V2",
    description:
      "El Razer DeathAdder V2 es un ratón gaming ergonómico con un sensor óptico de alta precisión, switches ópticos y un diseño cómodo para sesiones de juego prolongadas.",
    brand: "Razer",
    category: "Ratones",
    price: 69.99,
    quantity: 18,
    image:
      "https://i0.wp.com/www.computerevolution.com.co/wp-content/uploads/mouse-razer-deathadder-v2-lite.jpg",
  },
  {
    name: "SteelSeries Rival 600",
    description:
      "El SteelSeries Rival 600 es un ratón gaming con un sensor dual de precisión, iluminación RGB personalizable y un diseño modular para una adaptación perfecta a tu estilo de juego.",
    brand: "SteelSeries",
    category: "Ratones",
    price: 89.99,
    quantity: 15,
    image:
      "https://media.steelseriescdn.com/thumbs/filer_public/d7/15/d715f04a-6b14-4eca-856c-fb4f050a6884/r600-weight-3mbps-poster.jpg__1920x700_q100_crop-scale_optimize_subsampling-2.jpg",
  },
  {
    name: "Corsair Dark Core RGB Pro",
    description:
      "El Corsair Dark Core RGB Pro es un ratón gaming inalámbrico con un sensor óptico de alta precisión, carga inalámbrica y una duración de batería prolongada para una libertad de movimiento total.",
    brand: "Corsair",
    category: "Ratones",
    price: 99.99,
    quantity: 12,
    image: "https://cdn.memorykings.pe/files/2020/12/11/327856-MK028219C.jpg",
  },

  {
    name: "Canon EOS 5D Mark IV",
    description:
      "La Canon EOS 5D Mark IV es una cámara DSLR de fotograma completo con una resolución de 30.4 megapíxeles, capacidad de grabación de video 4K y un sistema de enfoque automático avanzado para capturar imágenes de alta calidad.",
    brand: "Canon",
    category: "Camaras",
    price: 2499.99,
    quantity: 5,
    image:
      "https://www.dellthus.com/3173-thickbox_default/camara-reflex-canon-eos-5d-mark-iv-body-304mp.jpg",
  },
  {
    name: "Sony Alpha a7 III",
    description:
      "La Sony Alpha a7 III es una cámara sin espejo con sensor de fotograma completo, estabilización de imagen de 5 ejes y capacidad de grabación de video 4K para obtener resultados excepcionales en fotografía y videografía.",
    brand: "Sony",
    category: "Camaras",
    price: 1999.99,
    quantity: 7,
    image:
      "https://cinemarket.com.co/wp-content/uploads/2022/10/Sony-A7III-01.jpg",
  },
  {
    name: "Nikon D850",
    description:
      "La Nikon D850 es una cámara DSLR de alta resolución con un sensor de 45.7 megapíxeles, capacidad de grabación de video 4K y un rango ISO ampliado para obtener imágenes detalladas incluso en condiciones de poca luz.",
    brand: "Nikon",
    category: "Camaras",
    price: 2799.99,
    quantity: 4,
    image:
      "https://1.img-dpreview.com/files/p/E~TS590x0~articles/6044780370/front-sensor.jpeg",
  },
  {
    name: "Fujifilm X-T4",
    description:
      "La Fujifilm X-T4 es una cámara sin espejo con sensor APS-C, estabilización de imagen en el cuerpo y grabación de video 4K a alta velocidad para capturar momentos extraordinarios con gran detalle y claridad.",
    brand: "Fujifilm",
    category: "Camaras",
    price: 1699.99,
    quantity: 6,
    image:
      "https://i0.wp.com/tecnoimportaciones.com/wp-content/uploads/2020/04/Camara-Fujifilm-X-T42.jpg",
  },

  {
    name: "Xbox Wireless Controller",
    description:
      "El Xbox Wireless Controller es un mando inalámbrico para Xbox y PC con un diseño ergonómico, botones personalizables y tecnología Bluetooth para una experiencia de juego cómoda y versátil.",
    brand: "Microsoft",
    category: "Mandos",
    price: 59.99,
    quantity: 25,
    image:
      "https://assets.xboxservices.com/assets/1c/e7/1ce760ed-d588-4976-baa9-cbabe583436b.jpg?n=111101_Gallery-0_29_1350x759.jpg",
  },
  {
    name: "DualSense Wireless Controller",
    description:
      "El DualSense Wireless Controller es el mando de PlayStation 5 con retroalimentación háptica, gatillos adaptables y un micrófono integrado para una inmersión total en los juegos de próxima generación.",
    brand: "Sony",
    category: "Mandos",
    price: 69.99,
    quantity: 20,
    image:
      "https://m.media-amazon.com/images/I/61ypl-HO+WS._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Nintendo Switch Pro Controller",
    description:
      "El Nintendo Switch Pro Controller es un mando premium para la consola Nintendo Switch, con un diseño cómodo, controles precisos y una batería de larga duración para sesiones de juego extendidas.",
    brand: "Nintendo",
    category: "Mandos",
    price: 69.99,
    quantity: 15,
    image:
      "https://igmmarket.com/wp-content/uploads/2021/02/control-nintendo-Switch-Pro-igmmarket-2.jpg",
  },
  {
    name: "Razer Wolverine Ultimate",
    description:
      "El Razer Wolverine Ultimate es un mando para Xbox y PC con botones y palancas intercambiables, iluminación Chroma personalizable y una construcción duradera para un control preciso y personalizado en cada partida.",
    brand: "Razer",
    category: "Mandos",
    price: 159.99,
    quantity: 12,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_926030-MLA45316022523_032021-O.jpg",
  },
];

async function insertarRegistros() {
  const promesasDeRegistros = [];

  registros.forEach((registro) => {
    promesasDeRegistros.push(
      axios.post(
        "http://localhost:8080/api/admin/products",
        registro
      )
    );
  });

  try {
    await Promise.all(promesasDeRegistros);
    console.log("Registros subidos correctamente");
  } catch (error) {

    console.log("Error al subir los registros");
  }
}

insertarRegistros();

// "https://byte-me-backend.onrender.com/api/admin/products"

