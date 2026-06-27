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

type Work = {
  id: string;
  title: string;
  subtitle: string;
  reverse: boolean;
  media: Media[];
};

const works: Work[] = [
  {
    id: "bubacat",
    title: "BUBACAT",
    subtitle: "Prototipo de Marca (Cafetería)",
    reverse: false,
    media: [
      {
        src: "/img/bubacat-3.webp",
        label: "Valla publicitaria Muffin Cream de Bubacat",
        tall: true,
      },
      {
        src: "/img/bubacat-1.png",
        label: "Folleto de Bubacat sostenido por una clienta",
      },
      {
        src: "/img/bubacat-2.png",
        label: "Folleto de Bubacat abierto mostrando el menú",
      },
    ],
  },
  {
    id: "linea-moderna",
    title: "LÍNEA MODERNA",
    subtitle: "Prototipo de Revista Digital",
    reverse: true,
    media: [
      {
        src: "/img/linea-moderna-1.webp",
        label: "Portada de la revista Línea Moderna",
      },
      {
        src: "/img/linea-moderna-2.webp",
        label: "Página interior de la revista Línea Moderna",
      },
    ],
  },
  {
    id: "el-rastro",
    title: "EL RASTRO",
    subtitle: "Prototipo de Boletín Institucional",
    reverse: false,
    media: [
      { src: "/img/el-rastro-1.webp", label: "Portada del boletín El Rastro" },
      {
        src: "/img/el-rastro-2.webp",
        label: "Página interior del boletín El Rastro",
      },
    ],
  },
  {
    id: "hablando-carburo",
    title: "Hablando Carburo",
    subtitle: "Dirección y edición de cortos",
    reverse: true,
    media: [{ label: "hablando-carburo-1.jpg", wide: true }],
  },
];

export default function Home() {
  return (
    <main className="page" aria-label="Portafolio de Damaris Calderón">
      {/* 01 — HERO */}
      <header className="section section--peach hero">
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
        <div>
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
        <div className="about__photo">
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
        <h2 className="display works-intro__title">
          Algunos de
          <br />
          mis trabajos
        </h2>
      </section>

      {/* 04–06 — PROYECTOS */}
      <section className="section section--dark">
        {works.map((w) => (
          <article
            key={w.id}
            id={w.id}
            className={`work${w.reverse ? " work--reverse" : ""}`}
          >
            <div className="work__media">
              {w.media.map((m) => (
                <Figure key={m.label} {...m} />
              ))}
            </div>
            <div className="work__info">
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
        <div className="contact__photo">
          <Figure label="contacto.jpg (foto)" />
        </div>
        <h2 className="contact__title">
          Trabajemos
          <br />
          juntos
        </h2>
        <div className="contact__grid">
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
    </main>
  );
}
