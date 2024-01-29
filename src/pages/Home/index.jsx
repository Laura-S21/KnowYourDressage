import Background from "../../components/Background/index"


function Home() {
    return (
        <>
            <Background />
            <div className="home-wrapper">
                <p className="home-wrapper__title">Bienvenue !</p>
                <div className="home-wrapper__textarea">
                    <p className="home-wrapper__textarea1">Vous aimez le dressage mais apprendre votre reprise est une galère ? Vous souhaitez passer votre Galop mais impossible de dérouler sans oublier la moitié de vos figures ?</p><br/>
                    <p className="home-wrapper__textarea2">Vous êtes au bon endroit !</p>
                </div>
                <p className="home-wrapper__text">Avec Know Your Dressage, apprenez et révisez votre reprise sans prise de tête !</p>
            </div>
        </>
    )
}

export default Home