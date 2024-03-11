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
      </div>
    </div>
  );
}

export default App;