import React from "react"
import Layout from "../components/Layout"

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <Layout>

            <section>
                <div className='jumbotron'>
                    <div className='row'>

                        <div className='col-md-6'>

                            <h1>De Schakel tussen mens en maatschappij</h1>
                        </div>

                        <div className='col-md-6'>
                            <img height='200px' width='auto' alt='nice' src='https://cdn.getyourguide.com/img/tour_img-1007871-146.jpg' />
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className='row'>

                    <div className='col-md-12'>

                        <p>
                            <h1>Wie zijn wij?</h1>

                            Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.
                        </p>

                    </div>

                </div>
            </section>

            <section>

                <h1>Onze mensen</h1>
                <div className='row'>

                    <div className='col-md-3'>

                        <div className="card">
                            <img className="card-img-top" src="https://www.portofkiel.com/assets/images/0/burgmannchristine-86ad3fae.jpg" alt="Card" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Anja de Vries</h4>
                                <p className="card-text">Toilet medewerker, altijd schoon het is nooit schoon genoeg</p>
                            </div>
                        </div>

                    </div>

                    <div className='col-md-3'>
                        <div className="card">
                            <img className="card-img-top" src="https://petrieflom.law.harvard.edu/images/made/82e033b5d85a88b0/Cohen2015_people_300_300_85.jpg" alt="Card" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Harry van Slingerland</h4>
                                <p className="card-text">Man in het pak, altijd goed gekleed! Kleren maken de man!</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="card" >
                            <img className="card-img-top" src="data:image/jpeg;base64,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" alt="Card" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Li Wang Chow</h4>
                                <p className="card-text">De enige echte Asian, honky tong changhai!</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="card">
                            <img className="card-img-top" src="http://www.personsplasticsurgery.com/images/persons-sanfrancisco.jpg" alt="Card" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Betty Braadspit</h4>
                                <p className="card-text">Kantine jufvrouw, de soep van de dag is niet van gisteren</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Contact</h1>
                    </div>

                </div>

                <div className='row'>

                    <div className='col-md-6'>
                        <h1>Instagram</h1>
                        <img height='auto' width='300px' className='img-fluid' alt='insta' src='https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png' />
                    </div>

                    <div className='col-md-6'>
                        <h1>LinkedIn</h1>
                        <img height='auto' width='300px' className='img-fluid' alt='link' src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' />
                    </div>

                </div>
            </section>

            <section>
                <div className='row'>

                    <div className='col-md-6'>
                        <h1>Interesse?</h1>

                        <p>Mail met...</p>

                        <p>Of kom langs</p>
                    </div>

                    <div className='col-md-6'>
                        <h1>Bekijk ons werk</h1>
                    </div>

                </div>
            </section>


        </Layout>
    }
}
