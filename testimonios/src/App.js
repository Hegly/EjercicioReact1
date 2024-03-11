import './App.css';
import Testimonio from './components/Testimonio'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen los estudiantes de CEUTEC:</h1>

        <Testimonio
          imagen='testimonio-emma.png'
          nombre='Emma Bostian'
          pais='Suecia'
          cargo='Ingeniera de software'
          empresa='Spotify'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero la clase de programación web I fue donde aprendí. Estudiar JavaScript, así como estructuras de datos y algoritmos en la clase me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />

           <Testimonio
          imagen='testimonio-sarah.png'
          nombre='Sarah Baiden'
          pais='Estados Unidos'
          cargo='Diseñadora UI/UX'
          empresa='Airbnb'
          testimonio='Estudiar en CEUTEC fue una experiencia transformadora para mi carrera. Aprendí a diseñar interfaces atractivas y funcionales, lo que me permitió obtener un puesto como diseñadora UI/UX en una de las empresas líderes en el sector.' />

           <Testimonio
          imagen='testimonio-shawn.png'
          nombre='Shawn Hung'
          pais='Japón'
          cargo='Desarrollador Full Stack'
          empresa='Google'
          testimonio='Gracias a CEUTEC pude adquirir los conocimientos necesarios para ingresar al mundo laboral como desarrollador Full Stack. Los proyectos prácticos y el enfoque en tecnologías actuales me prepararon para enfrentar los desafíos del mercado.' />

           <Testimonio
          imagen='testimonio-maria.png'
          nombre='María Rodríguez'
          pais='Argentina'
          cargo='Médico Cirujano'
          empresa='Hospital General'
          testimonio='Estudiar medicina en CEUTEC fue una experiencia enriquecedora. La combinación de teoría y práctica en hospitales me preparó para enfrentar los desafíos de la medicina moderna. Hoy ejerzo como médico cirujano y estoy agradecida por la formación recibida.' />

           <Testimonio
          imagen='testimonio-jose.png'
          nombre='José González'
          pais='México'
          cargo='Especialista en Mercadotecnia'
          empresa='Coca-Cola'
          testimonio='CEUTEC me brindó una sólida formación en mercadotecnia, lo que me permitió destacarme en un mercado competitivo. Los proyectos prácticos y las estrategias aprendidas en clase son fundamentales en mi día a día en Coca-Cola.' />

           <Testimonio
          imagen='testimonio-ana.png'
          nombre='Ana Pérez'
          pais='España'
          cargo='Especialista en Publicidad'
          empresa='Ogilvy'
          testimonio='CEUTEC fue el trampolín para mi carrera en publicidad. Aprendí a crear campañas creativas y efectivas que impactan a las audiencias. Actualmente trabajo en Ogilvy, donde puedo aplicar los conocimientos adquiridos durante mis estudios.' />
      </div>
    </div>
  );
}

export default App;