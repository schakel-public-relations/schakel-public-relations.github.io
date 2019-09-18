import React from "react"
import Layout from "../components/Layout"
import Modal from "../components/Modal"
import FlipBox from "../components/FlipBox"

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <Layout>

            <section id='top'>
                <div>
                    <div className='row'>

                        <div className='col-md-6'>

                            <h1 className='schakel-theme xlg-text'>De Schakel tussen mens en maatschappij</h1>
                        </div>

                        <div className='col-md-6'>
                            <img className='img-main' alt='nice' src='https://cdn.getyourguide.com/img/tour_img-1007871-146.jpg' />
                        </div>

                    </div>
                </div>
            </section>

            <section id='about'>
                <div className='row'>

                    <div className='col-md-12'>

                        <p className='about'>
                            <h1 className='schakel-theme'>Wie zijn wij?</h1>

                            Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.
                        </p>

                    </div>

                </div>
            </section>

            <section id='people'>

                <h1>Onze mensen</h1>
                <div className='row'>

                    <div className='col-md-3'>
                        <div className="card">
                            <FlipBox backImg='https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'>
                                <img className="card-img" src="https://www.portofkiel.com/assets/images/0/burgmannchristine-86ad3fae.jpg" alt="Card" />
                            </FlipBox>
                            <div className="card-body">
                                <h4 className="card-title">Anja de Vries</h4>
                                <p className="card-text">Toilet medewerker, altijd schoon het is nooit schoon genoeg</p>
                            </div>
                            <div className='card-footer'>
                                <Modal openText='Lees meer'>
                                    Maakt het toilet schoon zoals niemand dat kan, ze heeft al jaren ervaring bij Dixi.
                                </Modal>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="card">
                            <FlipBox backImg='https://familyfirstmalaysia.com/wp-content/uploads/2016/08/profile-pics-18.jpg'>
                                <img className="card-img" src="https://petrieflom.law.harvard.edu/images/made/82e033b5d85a88b0/Cohen2015_people_300_300_85.jpg" alt="Card" />
                            </FlipBox>
                            <div className="card-body">
                                <h4 className="card-title">Harry van Slingerland</h4>
                                <p className="card-text">Man in het pak, altijd goed gekleed! Kleren maken de man!</p>
                            </div>
                            <div className='card-footer'>
                                <Modal openText='Lees meer'>
                                    Draagt al sinds zijn geboorte een pak, zo kan je goed voor de dag komen. #AllWaysWellDressed
                                </Modal>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="card" >
                            <FlipBox backImg='data:image/jpeg;base64,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'>
                                <img className="card-img" src="data:image/jpeg;base64,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" alt="Card" />
                            </FlipBox>
                            <div className="card-body">
                                <h4 className="card-title">Li Wang Chow</h4>
                                <p className="card-text">De enige echte Asian, honky tong changhai!</p>
                            </div>
                            <div className='card-footer'>
                                <Modal openText='Lees meer'>
                                    Geboren en getogen Chinees, zeer trots op zijn vaderland. Eet een halve kilo nassi per dag, ja doe dat maar eens na.
                                </Modal>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="card">
                            <FlipBox backImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRECefTWCO3duA6OujZL_khfQO98_MWCL6APP56wnSBsNX-7aty0A'>
                                <img className="card-img" src="http://www.personsplasticsurgery.com/images/persons-sanfrancisco.jpg" alt="Card" />
                            </FlipBox>
                            <div className="card-body">
                                <h4 className="card-title">Betty Braadspit</h4>
                                <p className="card-text">Kantine jufvrouw, de soep van de dag is niet van gisteren</p>
                            </div>
                            <div className='card-footer'>
                                <Modal openText='Lees meer'>
                                    Maak geen ruzie met de kantine jufvrouw, weet wat je wilt bestellen anders slaat ze je tegen de vlakte.
                                </Modal>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section id='contact'>

                <h1>Contact</h1>

                <div className='row'>

                    <div className='col-md-6'>
                        <div className='row socials'>
                            <div className='col-md-6'>
                                <h1>Instagram</h1>
                                <img height='auto' width='300px' className='img-fluid' alt='insta' src='https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png' />

                            </div>

                            <div className='col-md-6'>
                                <h1>LinkedIn</h1>
                                <img height='auto' width='300px' className='img-fluid' alt='link' src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' />

                            </div>
                        </div>

                    </div>

                    <div className='col-md-6'>
                        <div className='contact-info'>
                            <div className='row'>
                                <div className='col-md-12'></div>
                                <h1>Interesse?</h1>
                            </div>

                            <div className='row'>
                                <div className='col-md-6'>
                                    <p>Mail met: <b className='underline'>schakel@example.com</b></p>
                                </div>

                                <div className='col-md-6'>
                                    <p>Of kom langs op: <b className='underline'>Wijnhaven 117</b></p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <div className='row'>

                    <div className='col-md-6'>
                        <div className='our-work'>
                            <h1>Bekijk ons werk</h1>
                            <button className='my-btn'>==></button>
                        </div>

                    </div>

                    <div className='col-md-6'>
                        <div className='last-project'>
                            <h1>Laatste project</h1>

                            <p>
                                <h3>Titel</h3>

                                Some text this a nice project about the verification of the human race where we investigate the...
                            </p>
                        </div>


                    </div>

                </div>

            </section>


        </Layout>
    }
}
