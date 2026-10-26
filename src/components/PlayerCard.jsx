function PlayerCard ({nombre, nivel, vidas}) {
    return (
        <section className="player-card">
            <h2>{nombre}</h2>
            <p>Nivel: {nivel}</p>
            <p>Vidas: {vidas}</p>
        </section>
    );
}

export default PlayerCard;