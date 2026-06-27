/* Portafolio de Damaris Calderón — reconstrucción del diseño en HTML/CSS.
   Las imágenes reales viven en /public/img. Donde aún no hay imagen se
   muestra un <Ph /> (placeholder etiquetado) que se reemplaza al añadir
   el archivo correspondiente. */

type Media = {
  label: string;
  src?: string;
  alt?: string;
  wide?: boolean;
  tall?: boolean;
};

function Figure({ label, src, alt, wide, tall }: Media) {
  const cls = `media${wide ? " media--wide" : ""}${tall ? " media--tall" : ""}`;
  if (src) {
    return <img className={cls} src={src} alt={alt ?? label} loading="lazy" />;
  }
  return (
    <div className={`ph ${cls}`}>
      <span>{label}</span>
    </div>
  );
}

/* Cada trabajo se muestra como un collage de imágenes encimadas e inclinadas,
   igual que en el diseño SVG. role -> posición dentro del collage. */
type CollageImg = {
  src: string;
  alt: string;
  role: "base" | "tr" | "br" | "bottom";
};

type Work = {
  id: string;
  title: string;
  subtitle: string;
  reverse: boolean;
  collage: CollageImg[];
};

const works: Work[] = [
  {
    id: "bubacat",
    title: "BUBACAT",
    subtitle: "Prototipo de Marca (Cafetería)",
    reverse: false,
    collage: [
      {
        src: "/img/bubacat-1.png",
        alt: "Folleto de Bubacat sostenido por una clienta",
        role: "base",
      },
      {
        src: "/img/bubacat-3.webp",
        alt: "Valla publicitaria Muffin Cream de Bubacat",
        role: "tr",
      },
      {
        src: "/img/bubacat-2.png",
        alt: "Folleto de Bubacat abierto mostrando el menú",
        role: "bottom",
      },
    ],
  },
  {
    id: "linea-moderna",
    title: "LÍNEA MODERNA",
    subtitle: "Prototipo de Revista Digital",
    reverse: false,
    collage: [
      {
        src: "/img/linea-moderna-1.webp",
        alt: "Portada de la revista Línea Moderna",
        role: "base",
      },
      {
        src: "/img/linea-moderna-2.webp",
        alt: "Página interior de la revista Línea Moderna",
        role: "br",
      },
    ],
  },
  {
    id: "el-rastro",
    title: "EL RASTRO",
    subtitle: "Prototipo de Boletín Institucional",
    reverse: true,
    collage: [
      {
        src: "/img/el-rastro-1.webp",
        alt: "Portada del boletín El Rastro",
        role: "base",
      },
      {
        src: "/img/el-rastro-2.webp",
        alt: "Página interior del boletín El Rastro",
        role: "br",
      },
    ],
  },
  {
    id: "hablando-carburo",
    title: "Hablando Carburo",
    subtitle: "Dirección y edición de cortos",
    reverse: true,
    collage: [],
  },
];

export default function Home() {
  return (
    <main className="page" aria-label="Portafolio de Damaris Calderón">
      {/* NAV — barra fija translúcida con salto suave a cada sección */}
      <nav className="nav" aria-label="Navegación principal">
        <div className="nav__inner">
          <a className="nav__brand" href="#inicio">
            Damaris&nbsp;Calderón
          </a>
          <ul className="nav__links">
            <li>
              <a href="#sobre-mi">Sobre mí</a>
            </li>
            <li>
              <a href="#trabajos">Trabajos</a>
            </li>
            <li>
              <a className="nav__cta" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* 01 — HERO */}
      <header id="inicio" className="section section--peach hero">
        <div className="hero__portrait">
          <img
            className="hero__img"
            src="/img/retrato-hero.png"
            alt="Ilustración de Damaris Calderón con gorra"
          />
        </div>
        <div className="hero__body">
          <span className="hero__year">2026</span>
          <h1 className="display hero__title">
            Damaris
            <br />
            Calderón
          </h1>
          <div className="hero__tags">
            <span className="eyebrow">Publicidad</span>
            <span className="eyebrow">Relaciones Públicas</span>
          </div>
        </div>
      </header>

      {/* 02 — MÁS SOBRE MÍ */}
      <section id="sobre-mi" className="section section--mid about">
        <div className="reveal">
          <p className="index-num">02</p>
          <h2 className="display about__heading">
            Más
            <br />
            sobre mí
          </h2>
          <div className="about__cols">
            <p>
              Como estudiante de Publicidad y Relaciones Públicas, disfruto
              explorar la creatividad desde una perspectiva estratégica,
              diseñando marcas, campañas y experiencias que comuniquen con
              intención.
            </p>
            <p>
              Mi objetivo es seguir creciendo profesionalmente mientras
              desarrollo soluciones que inspiren, conecten y dejen huella.
            </p>
          </div>
        </div>
        <div className="about__photo reveal reveal--delay">
          <Figure
            src="/img/sobre-mi.jpg"
            label="Damaris Calderón en una cafetería"
          />
        </div>
      </section>

      {/* 03 — ALGUNOS DE MIS TRABAJOS */}
      <section id="trabajos" className="section section--dark works-intro">
        <p className="index-num" style={{ textAlign: "center" }}>
          03
        </p>
        <h2 className="display works-intro__title reveal">
          Algunos de
          <br />
          mis trabajos
        </h2>
      </section>

      {/* 04–06 — PROYECTOS */}
      <section className="section section--dark works">
        {works.map((w) => (
          <article
            key={w.id}
            id={w.id}
            className={`work work--${w.id}${w.reverse ? " work--reverse" : ""}${
              w.collage.length ? "" : " work--no-media"
            }`}
          >
            {w.collage.length > 0 && (
              <div className="work__media reveal">
                <div className="work__collage">
                  {w.collage.map((m) => (
                    <img
                      key={m.src}
                      className={`c-img c-${m.role}`}
                      src={m.src}
                      alt={m.alt}
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            )}
            <div className="work__info reveal reveal--delay">
              <h3 className="display work__title">{w.title}</h3>
              <p className="work__subtitle">{w.subtitle}</p>
              <a className="work__link" href={`#${w.id}`}>
                Más información
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* 07 — TRABAJEMOS JUNTOS */}
      <section id="contacto" className="section section--pink contact">
        <p className="index-num" style={{ textAlign: "left" }}>
          07
        </p>
        <div className="contact__photo reveal">
          <Figure label="contacto.jpg (foto)" />
        </div>
        <h2 className="contact__title reveal">
          Trabajemos
          <br />
          juntos
        </h2>
        <a
          className="btn contact__cta reveal"
          href="mailto:hola@sitioincreible.com.co"
        >
          Escríbeme
        </a>
        <div className="contact__grid reveal reveal--delay">
          <div>
            <p className="contact__label">Dirección</p>
            <p className="contact__value">
              Calle Amazonas #1-23, Bogotá,
              <br />
              Colombia. C.P 12345
            </p>
          </div>
          <div>
            <p className="contact__label">Teléfono</p>
            <p className="contact__value">(57) 1 234 56 78</p>
          </div>
          <div>
            <p className="contact__label">
              Correo
              <br />
              electrónico
            </p>
            <p className="contact__value">
              <a href="mailto:hola@sitioincreible.com.co">
                hola@sitioincreible.com.co
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer__inner">
          <a className="footer__brand" href="#inicio">
            Damaris Calderón
          </a>
          {/* TODO: reemplaza los "#" por tus enlaces reales (Instagram, etc.) */}
          <ul className="footer__social" aria-label="Redes sociales">
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Behance</a>
            </li>
          </ul>
          <p className="footer__copy">
            © 2026 Damaris Calderón · Publicidad y Relaciones Públicas
          </p>
        </div>
      </footer>
    </main>
  );
}
