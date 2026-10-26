import GameHeader from './components/GameHeader';
import PlayerCard from './components/PlayerCard';
import MissionCard from './components/MissionCard';

function App() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', paddingBottom: '40px' }}>
      {/* Cabecera del juego */}
      <GameHeader/>

      {/* Sección de Jugadores */}
      <section>
        <h2 style={{ textAlign: 'center', marginBottom: '15px' }}>Personajes</h2>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <PlayerCard
            nombre="🧙🏻Mago"
            nivel={1}
            vidas="❤️❤️❤️"
          />
          <PlayerCard
            nombre="🧝🏻Elfo"
            nivel={3}
            vidas="❤️❤️"
          />
          <PlayerCard
            nombre="🛡️Caballero"
            nivel={5}
            vidas="❤️❤️❤️❤️"
          />
          <PlayerCard
            nombre="🏹Arquero"
            nivel={2}
            vidas="❤️❤️"
          />
        </div>
      </section>

      {/* Separador visual opcional y espacio ampliado */}
      <div style={{ width: '80%', height: '2px', backgroundColor: 'var(--border)', margin: '20px 0' }}></div>

      {/* Sección de Misiones */}
      <section>
        <h2 style={{ textAlign: 'center', marginBottom: '15px' }}>Misiones Disponibles</h2>
        <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <MissionCard
            nombre="La Fortaleza Negra"
            descripción="Penetra en las ruinas malditas de la Fortaleza Negra para recuperar las cenizas del rey caído antes de que los Nigromantes del Círculo Oscuro completen el ritual para levantarlo como su sirviente."
            simbolo="🏰"
          />
          <MissionCard
            nombre="El Despertar del Dragón"
            descripción="Asciende a las Cumbres Heladas para adormecer al antiguo dragón de fuego antes de que incinere los valles y reinos circundantes."
            simbolo="🐉"
          />
          <MissionCard
            nombre="El Laberinto Susurrante"
            descripción="Navega a través del bosque encantado y resuelve sus acertijos ancestrales para rescatar al Sabio Perdido de las Sombras."
            simbolo="🌲"
          />
          <MissionCard
            nombre="El Amuleto del Abismo"
            descripción="Baja a las profundidades de la cueva marina y recupera la gema sagrada custodiada por las temibles criaturas abisales."
            simbolo="🌊"
          />
          <MissionCard
            nombre="La Rebelión de los Alquimistas"
            descripción="Infíltrate en los laboratorios subterráneos para detener la creación de un elixir prohibido que destruirá la magia del reino."
            simbolo="🧪"
          />
          <MissionCard
            nombre="El Asedio de Cristal"
            descripción="Defiende los portales del santuario místico contra la horda invasora para preservar el equilibrio elemental del mundo."
            simbolo="💎"
          />
        </div>
      </section>
    </main>
  );
}

export default App;