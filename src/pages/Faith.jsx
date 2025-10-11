import HeroSection from '../components/HeroSection.jsx';
import ExploreSection from '../components/ExploreSection.jsx'
import CallingSection from '../components/CallingSection.jsx';
import './Faith.css'

export default function Faith (){
    const faithBlocks = [
        {
            start: 1,
            items: [
                {
                    title: "LAS SAGRADAS ESCRITURAS",
                    text: [
                        "Nosotros creemos que las Santas Escrituras del Antiguo y Nuevo Testamentos son la revelación escrita de Dios.  Nosotros creemos en la inspiración verbal y plenaria de las Escrituras, y la preservación de Dios de Sus puras palabras a cada generación (2 Timoteo 3:16; Salmo 12:6-7). La versión de la Biblia Reina Valera 1960 es la versión castellana que nosotros aceptamos y usamos. La Biblia es nuestra única autoridad para la fe y práctica."
                    ]
                },   
                {
                    title: "EL DIOS VERDADERO",
                    text: [
                        "Nosotros creemos en un Dios trino, existiendo eternamente en tres personas - Padre, Hijo y Espíritu Santo, siendo co-eterno, co-idéntico en  naturaleza, co-igual en el poder y gloria, y teniendo los mismos atributos y perfecciones (Deuteronomio 6:4;2 Corintios 13:14)."      
                    ]
                },
                {
                    title: "LA PERSONA Y OBRA DE NUESTRO SEÑOR JESUCRISTO",
                    text: [
                        "Nosotros creemos que el Señor Jesucristo, el Hijo eterno de Dios, se volvió hombre, sin dejar de ser Dios, y fue concebido por el Espíritu Santo y nacido de la virgen María, para que Él pudiera revelar a Dios y redimir a los hombres pecadores (Juan 1:1-2, 14; Lucas 1:35; Isaías 9:6, 7,17; Filipenses 2:5-8; Gálatas 4:4-5).",
                        "Nosotros creemos que el Señor Jesucristo logró nuestra redención a través de Su obra, finalizada en la cruz en sacrificio vicario; y que nuestra justificación es un hecho seguro por Su resurrección literal y física de la muerte (Romanos 3:24-26; 1 Pedro 2:24; Efesios 1:7; 1 Pedro 1:3-5).",
                        "Nosotros creemos que el Señor Jesucristo ascendió al cielo, y es ahora exaltado a la mano derecha de Dios donde, como nuestro Sumo Sacerdote, Él cumple el ministerio de Intercesor y Abogado (Hechos 1:9-10; Hebreos 9:24, 7:25; Romanos 8:34; 1 Juan 2:1-2)"
                    ]
                },                  
                
            ],
            image: '/img/baptism.jpg'
        },
        {
            start: 4,
            items: [
                {
                    title: "LA PERSONA Y OBRA DEL ESPÍRITU SANTO",
                    text: [
                        "Nosotros creemos que el Espíritu Santo es la tercera persona de La Trinidad  y que convence al mundo de pecado, de justicia y de juicio; y que Él es el Agente Sobrenatural en la regeneración, mientras bautiza a todos los creyentes en el cuerpo de Cristo, sellándolos hacia el día de la redención (Juan 16:7-11; 2 Corintios 3:6; 1 Corintios 12:12-14; Romanos 8:9; Efesios 1:13-14).",
                        "Nosotros creemos que los dones o señales del Espíritu Santo, como hablar en  lenguas y sanidades, eran temporales.  Nosotros creemos que el hablar en  lenguas nunca era la señal común o necesaria del bautismo o llenura del Espíritu Santo, y que nuestro cuerpo espera la consumación de nuestra salvación en la resurrección, aunque Dios frecuentemente escoge responder la oración de los creyentes por la sanidad física (2 Corintios 12:12; 1 Corintios 13:8; Hebreos 2:3-4; Marcos 16:17-20; 1 Corintios 1:22, 14:21-22)"
                    ]
                },
                {
                    title: "EL HOMBRE",
                    text: [
                        "Nosotros creemos que el hombre se creó a imagen y semejanza de Dios, pero que con el pecado de Adán la raza se corrompió, heredando una naturaleza pecadora, y se alejó de Dios; y ese hombre es totalmente depravado e incapaz de remediar su condición perdida (Génesis 1:26-27; Romanos 3:22-23; Efesios 2:1-3, 12).",
                        "Creemos que Dios creó al hombre a Su propia imagen y semejanza, y en que Cristo murió por el hombre; por consiguiente cada individuo posee la dignidad y es digno de respeto en el amor cristiano (Salmo 8:4-9; Colosenses 3:9-11)."
                    
                    ]
                },
                {
                    title: "LA FORMA DE SALVACIÓN",
                    text: [
                        "Nosotros creemos que la salvación para los hombres es por Gracia, el mensaje claro de salvación es el 'arrepentimiento hacia Dios y fe hacia nuestro Señor Jesucristo' (Hechos 20:21). Nosotros creemos que los hombres están justificados por la fe sola y sólo se consideran virtuosos ante Dios a través del mérito de nuestro Señor y Salvador Jesucristo (Efesios 2:8-10; Juan 1:12; 1 Pedro 1:18-19).",
                        "Nosotros creemos que a todos los que Él rescató y una vez salvó, son guardados por el poder de Dios y están así para siempre seguros en Cristo. Nosotros creemos que la vida eterna es la posesión presente de cada creyente (Juan 6:37-40; 10:27-30; Romanos 8:1, 38-39; 1 Corintios 1:4-8; 1 Pedro 1:3-5; Judas 1, 24)."
                    ]
                },   
                
            ],
            image: '/img/baptism1.jpg'
        },
        {
            start: 7,
            items: [
                {
                    title: "LA IGLESIA",
                    text: [
                        "Nosotros creemos que la iglesia es el cuerpo y la novia desposada de Cristo, un organismo espiritual compuesto de toda persona renacida, que empezó con Cristo y los apóstoles, fue llena de poder en Pentecostés y será llevada por Cristo en el Rapto (Efesios 1:22-23; 5:25-27; 1Corintios 12:12-14; 2 Corintios 11:2).",
                        "Nosotros creemos en la enseñanza del establecimiento de iglesias locales claramente definida en las Escrituras del Nuevo Testamento (Hechos 14:27; 20:17, 28-32; 1 Timoteo 3:1-13; Tito 1:5-9).",
                        "Nosotros creemos en la autonomía de la iglesia local libre, sin cualquier autoridad externa o mando (Hechos 13:1-4; 15:19-31; 20:28; Romanos 16:1-4; 1 Corintios 3:9, 16, 5:3-8, 13; 1 Pedro 5:1-4)."
                    ]
                },
                {
                    title: "LAS ORDENANZAS DE LA IGLESIA ",
                    text: [
                        "Nosotros reconocemos las ordenanzas del bautismo por inmersión en el agua y la Cena del Señor como un medio de testimonio para la iglesia en esta edad (Mateo 28:19-20; Hechos 2:41-42; 1 Corintios 11:23-26)."
                   ]
                },
                {
                    title: "LAS FINANZAS",
                    text: [
                        "Creemos que es el privilegio y el deber de cada creyente dar de sus recursos para el sostén económico de su iglesia. Este debe incluir el sostén del pastor, la mantención del templo, ayuda a los pobres y otros gastos relacionados a la proclamación del Evangelio (1 Corintios 9:14; 16:1-2; Gálatas 6:6; 2 Corintios 9:7)."
                  ]
                },
                {
                    title: "LA GRAN COMISIÓN",
                    text: [
                        "Creemos que las Escrituras enseñan que la Gran Comisión de la iglesia es dar sin error a todas las naciones la Palabra de Dios, por medio de nuestras enseñanzas y ejemplo (Mateo 28:18-20; Marcos 16:14-18)."
                    ]
                },
                {
                    title: "SISTEMA DE GOBIERNO",
                    text: [
                        "Creemos que el sistema de gobierno de una iglesia es congregacional, es decir, que todos los miembros son iguales y que la iglesia mantiene su independencia y soberanía con autonomía en todos sus actos (Mateo 23:5-12; Hechos 11.26; 13:1-3; Filipenses 4:10-19)."
                   ]
                },   
                {
                    title: "SUS OFICIALES",
                    text: [
                       "Creemos que la iglesia tiene dos oficiales: pastor u obispo y diáconos. Estos y todos sus miembros tienen la sagrada y sublime misión de predicar el evangelio hasta el fin del mundo (1 Timoteo 3; Hechos 20:17,28; 14:23; 6:3-6; Tito 1:5-9; 1 Pedro 5:1-3; 2:5)."
                    ]
                }
            ],
            image: '/img/baptism2.jpg'
        },
         {
            start: 13,
            items: [
                {
                    title: "LA SEPARACIÓN BÍBLICA ",
                    text: [
                        "Nosotros creemos que todo el que Él salvó debe vivir de tal manera como para no traer reproche a su Salvador y Señor; y esa separación de toda la apostasía religiosa, placeres mundanos y de pecadores, son ordenadas por Dios (2 Timoteo 3:1-5; Romanos 12:1-2; 14:13; 1 Juan 2:15-17; 2 Juan 9-11; 2 Corintios 6:14-7:1).",
                        "Creemos que debe haber completa separación entre el Estado y la Iglesia, siendo cada cosa buena e importante en su lugar (Mateo 22:21; Efesios 1:22; Hec. 18:14,16)."
                    ]
                },                  
                {
                    title: "EL RETORNO DE CRISTO",
                    text: [
                        "Nosotros creemos en la esperanza bendita del retorno de nuestro Señor, que es literal, personal, visible, inminente, pretribulacional y premilenial.  Él vendrá por Su iglesia en el rapto antes de los siete años de Tribulación, y al final de la Tribulación, Cristo volverá con Sus santos a establecer Su reino de mil años en la tierra (1 Tesalonicenses  1:10; 4:13-18; Tito 2:13; Apo. 19:11-16; 20:1-6; Zacarías 14:4-11)."
                    ]
                },
                {
                    title: "NUESTRO ESTADO ETERNO",
                    text: [
                        "Nosotros creemos en la resurrección corporal de todos los hombres: los salvos, a la vida eterna, y los inconversos al castigo eterno (Mateo 25:46; Juan 5:28-29; 11:25-26; Apocalipsis 20:5-6, 12-13).",
                        "Nosotros creemos que las almas de los salvos son, luego de la muerte, ausentes del cuerpo y presentes al Señor, donde en actitud consciente ellos esperan la primera resurrección, cuando el espíritu, alma y cuerpo se reunirán para ser glorificados para siempre con el Señor (Lucas 23:43; Apocalipsis 20:4-6; 2 Corintios 5:8; Filipenses 1:23; 3:21; 1 Tesalonicenses 4:16-17).",
                        "Nosotros creemos que las almas de los incrédulos permanecen, después de la muerte, en la miseria consciente hasta la segunda resurrección, cuando con el alma y cuerpo reunidos ellos aparecerán al Gran Juicio del Gran Trono Blanco, y serán lanzados en el lago de fuego, donde no serán aniquilados, sino que sufrirán el castigo eterno consciente (Lucas 16:19-26; Mateo 25:41-46; 2 Tesalonicenses 1:7-9; Judas 6-7; Marcos 9:43-48; Apocalipsis 20:11-15)."
                ]
                }
            ],
            image: '/img/baptism3.jpg'
        }
    ];

    return(
    <>
      <HeroSection 
        header="Nuestra Fe"
        backgroundImage="/img/faith.jpg"
        showButton={false}   
      />

      <CallingSection
        tagline="Nuestra Fe es la base de todo lo que hacemos."
        introduction="Nuestra iglesia se fundamenta en un pacto y artículos de fe que definen y orientan nuestras creencias y principios cristianos."
        showButton={false}    
      />

      <section className='faith-section' id='faith-section'>
        <div className='faith-container'>
            <div>
                <h1 className='faith-header'>Creemos en...</h1>  
            </div>
            
            {faithBlocks.map((block, idx) => (
                <div
                    key={idx}
                    className={`faith-block ${idx % 2 === 0 ? '' : 'reverse'}`}
                >
                    <div className="faith-list">
                    <ol start={block.start}>
                    {/* <ul> */}
                        {block.items.map((item, i) => (
                        <li key={i}>
                            <h1 className='faith-subheader'>{item.title}</h1>
                            {Array.isArray(item.text)
                                ? item.text.map((parrafo, j) => <p key={j}>{parrafo}</p>)
                                : <p>{item.text}</p>
                            }
                        </li>
                        ))}
                    </ol>
                    </div>
                    <div className="faith-img-container">
                    <img src={block.image} alt="Fe, Bautismo" className="faith-img" />
                    </div>
                </div>
            ))}
            
            
        </div>
      </section>
      
      <ExploreSection />
    </>
  );
}