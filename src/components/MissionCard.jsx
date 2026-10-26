function MissionCard ({nombre, descripción, simbolo}) {
    return (
        <section className="mission-card">
            <h2>{nombre}</h2>
            <p>{descripción}</p>
            <p>{simbolo}</p>
        </section>
    );
}

export default MissionCard;