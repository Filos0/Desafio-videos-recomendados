class Multimedia {
  constructor(url) {
    let _url = url;
    this.getUrl = () => _url;
  }

  get url() {
    return this.getUrl();
  }

  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}
///////////////
class Reproductor extends Multimedia {
  constructor(urlMultimedia, id) {
    super(urlMultimedia);
    this.id = id;
  }

  setInicio(tiempo) {
    this._url += `?start=${tiempo}`;
  }
  playMultimedia() {
    const iframe = document.querySelector(this.id);
    iframe.setAttribute("src", this.url);
  }
}

const iframeMusica = document.getElementById("musica");
const iframePelicula = document.getElementById("peliculas");
const iframeSerie = document.getElementById("series");

const Musica = new Reproductor(
  "https://open.spotify.com/embed/playlist/2hbNkn2VjVZi5F5n2FQDOY",
  "#musica"
);
const Peliculas = new Reproductor(
  "https://www.youtube.com/embed/zAcc07KFCqI",
  "#peliculas"
);
const Series = new Reproductor(
  "https://www.youtube.com/embed/YrxBCBibVo0",
  "#series"
);

const collapse1 = document.querySelector("#headingOne");
collapse1.addEventListener("click", function () {
  Musica.playMultimedia();
});

const collapse2 = document.querySelector("#headingTwo");
collapse2.addEventListener("click", function () {
  Peliculas.setInicio(10);
  Peliculas.playMultimedia();
});

const collapse3 = document.querySelector("#headingThree");
collapse3.addEventListener("click", function () {
  Series.playMultimedia();
});
