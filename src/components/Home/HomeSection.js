const HomeSectionStep = ({step, text, subtext}) =>
{
    return(
        <div className="home-section-step">
            <h1 className="home-section-step-h1">{step}</h1>
            <p>{text}</p>
            <small>{subtext}</small>
        </div>
    )
}

const HomeSection = () =>
{
    return(
        <section className="home-section">
            <h1 className="home-section-h1">ΠΩΣ ΛΕΙΤΟΥΡΓΕΙ</h1>

            <div className="home-section-steps">
                <HomeSectionStep step="1" text="Εγγραφή" subtext='Δημιούργησε τον δωρεάν λογαριασμό σου'/>
                <HomeSectionStep step="2" text="Πρόσβαση στα προγνωστικά μας" subtext="Απόκτησε πρόσβαση στα προφνωστικά μας που ανανεώνονται καθημερινώς" />
                <HomeSectionStep step="3" text="Κέρδη" subtext="Απόλαυσε τα κέρδη σου" />
            </div>
        </section>
    )
}

export default HomeSection