import React from "react";
import PostBrowser from "../../components/PostBrowser/PostBrowser";
export default function Posts() {
  const postsArray = [
    {
      id: 0,
      img: "https://th.bing.com/th/id/R.73f6012da281568c197dda051d92164a?rik=TCgCJVC%2blXcwtg&pid=ImgRaw&r=0",
      titulo:
        "Las cinco estrellas que enfrentarán una gran presión esta temporada de la NBA",
      autor: "Pablo Cormick",
      creacion: "27 / 11 / 2023",
      descripcion:
        "El inicio de la temporada de la NBA es como la apertura de un show de ilusionismo. Algunas de las grandes figuras de este espectáculo universal no solo deben brillar con sus actuaciones, ahora es el momento de que finalmente ofrezcan la función consagratoria. Jayson Tatum. Luka Doncic. Ja Morant. Damian Lillard. Devin Booker.",
    },
    {
      id: 1,
      img: "https://www.sportball.es/wp-content/uploads/2019/11/Luka-Doncic-Dallas-Mavericks.jpg",
      titulo: "Análisis de la plantilla de Dallas Mavericks 2023-2024: Bases",
      autor: "Jhon",
      creacion: "25 / 10 / 2023",
      descripcion:
        "Luka Doncic es ya todo un candidato a MVP, una estrella en la NBA, temida por los rivales. Su dominio del juego y de su cuerpo es absoluto. Con el depósito lleno o medio, es simplemente imparable. Debe trabajar su físico para llegar vivo a los tramos finales de los partidos. Jaden Hardy tiene recursos anotadores interesantes, es peligroso desde el juego de pick and roll y tiene un certero disparo tras driblar. Su mentalidad súper agresiva y de anotador. El problema es que su toma de decisiones, selección de tiro y porcentajes son pobres y tiene que mejorar mucho en defensa. Kyrie Irving es un auténtico mago, con una capacidad para crear y driblar a sus rivales casi sin igual. ",
    },
    {
      id: 2,
      img: "https://th.bing.com/th/id/R.cc3199793a61c0bb1d963402d6a94133?rik=eru9LCTuCM10tA&pid=ImgRaw&r=0",      titulo:
        "Análisis de la plantilla de Dallas Mavericks 2023-2024: Escoltas",
      autor: "Mark",
      creacion: "21 / 11 / 2023",
      descripcion:
        "Tim Hardaway Jr es básicamente un pistolero con una visión de túnel que ignora contrarios o compañeros en su camino a la canasta. Este «modos operandi» lo hacía más apto para un rol de sexto hombre. Pero su palpable mejora en el triple, le convierte en estrella. Seth Curry es un anotador a tiempo completo, capaz de sumar mucho sin apenas tocar el balón. Fantástico lanzador, tiene gran juego de balón. Dante Exum es un base en un cuerpo de alero, tremendamente explosivo (aunque parte de ese físico se lo llevaron las lesiones). No es buen lanzador, pero sí muy agresivo de cara al aro. En defensa, tiene todo para ser un auténtico incordio.",
    },
    {
      id: 3,
      img: "https://th.bing.com/th/id/OIF.6KnOCHWJY61CEcNnXX0GOA?pid=ImgDet&rs=1",
      titulo: "Análisis de la plantilla de Dallas Mavericks 2023-2024: Aleros",
      autor: "Matteo",
      creacion: "19 / 09 / 2023",
      descripcion:
        "Josh Green, con un físico privilegiado, será importante si confirma su capacidad para defender todas las posiciones exteriores y mejora sus registros anotadores. AJ Lawson es un tirador, explosivo y amenaza a cancha abierta. Sin embargo, su físico no parece preparado para competir con los actuales exteriores fuertes de la NBA. Olivier-Maxence Prosper es un alero de impacto defensivo, muy activo atrás y perfectamente capaz de defender a exteriores y 4s. En ataque, lo que destaca es su habilidad para llegar hasta el aro al ser un jugador vertical y agresivo. Eso sí, no un tirador fiable y su nivel técnico es bastante bajo.",
    },
    {
      id: 4,
      img: "https://th.bing.com/th?id=OIF.IthHNgJ%2biynu0BenZWaY3A&pid=ImgDet&rs=1",
      titulo:
        "Análisis de la plantilla de Dallas Mavericks 2023-2024: Ala pívots",
      autor: "Louis",
      creacion: "14 / 09 / 2023",
      descripcion:
        "Maxi Kleber, a pesar de sus 2.11 metros de altura, el alemán se comporta como un jugador de perímetro. La grandísima mayoría de su ofensiva proviene del triple y tiene la suficiente agilidad para mantenerse en la cercanía de los bases en defensa. También tiene buenos instintos defendiendo el poste bajo. Grant Williams ha evolucionado a un jugador que ya amenaza en ataque y que es temible en defensa. Derrick Jones Jr es un jugador físico, eléctrico y con dos muelles en las piernas para comerse los aros de la liga. Un jugador interesante. Markieff Morris ha conseguido reconvertirse en un jugador útil, eficiente y que funciona muy bien desde el banquillo. Greg Brown es un cuatro «bajo», pero con brazos largos y excelentes condiciones físicas. Es peligroso a campo abierto y por encima del aro, además de un gran reboteador. También pinta a convertirse en un sólido lanzador de triples. Por lo demás, es un jugador bastante tendente al error, que tampoco aporta en exceso en defensa, ya que no rota debidamente.",
    },
    {
      id: 5,
      img: "https://i.ytimg.com/vi/jFjDMyARhhQ/maxresdefault.jpg",
      titulo: "Análisis de la plantilla de Dallas Mavericks 2023-2024: Pívots",
      autor: "Alex",
      creacion: "13 / 05 / 2023",
      descripcion:
        "Richaun Holmes es un pívot más pequeño de lo normal y muy muy atlético, ideal para jugar Small-Ball. Sufrirá, eso sí, con los pívots grandes, pero a la hora de lanzarse al contraataque es una gran arma. Dereck Lively se proyecta como un excelente jugador de rol. Es muy físico y excelente definidor cerca del aro. Además, rebotea muy bien y es un gran taponador. Más allá de eso, en ataque no aporta nada de creación propia. Dwight Powell es un jugador atlético, que sabe moverse sin en el balón y es capaz de defender jugadores más chicos. De esos perfiles de alta energía, que cumplen su limitado rol a la perfección, pero quizás no están destinados a jugar 30 minutos por juego.",
    },
  ];
  return <PostBrowser posts={postsArray} />;
}
