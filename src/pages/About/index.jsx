import Background from "../../components/Background"

function About() {
    return (
        <>
            <Background />
            <div className="about-wrapper">
            <div className="about-wrapper__textarea">
                    <p className="about-wrapper__textarea1">Know Your Dressage a été créé par une cavalière, pour les cavalières et cavaliers qui souhaitent apprendre et réviser leur reprise de manière simple et ludique.</p><br/>
                    <p className="about-wrapper__textarea2">Si votre reprise n’est pas proposée sur le site, un peu de patience, elle arrive !</p><br/>
                    <p className="about-wrapper__textarea3">Have fun sur les carrés de dressage !</p>
                </div>
            </div>
        </>
    )
}

export default About