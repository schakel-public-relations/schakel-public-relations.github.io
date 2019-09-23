import React from "react"
import Layout from "../components/Layout"
import FlipBox from "../components/FlipBox"
import { StaticQuery, graphql } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Modal from "../components/Modal"

library.add(faArrowRight)
library.add(faLinkedin)
library.add(faInstagram)



export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        return <StaticQuery
            query={graphql`query getSiteInfo {
                site {
                    siteMetadata {
                        title
                        oneLiner
                        mainImage
                        aboutUs
                        people {
                            fullName
                            description
                            extraInfo
                            profilePictureFront
                            profilePictureBack
                        }
                        instagram
                        linkedin
                        email
                        adress
                    }
                }
                allMarkdownRemark(sort: {
                    fields: [frontmatter___date]
                    order: DESC
                }
                filter: {
                  frontmatter:{
                    title: {ne: "This is a hidden file"}
                  }
                }
                ) {
                    totalCount
                    edges {
                        node {
                            fields {
                                slug
                                }
                                id
                                frontmatter {
                                    title
                                    author
                                    date
                                    }
                                    excerpt
                                }
                            }
                        }              
                }`}
            render={data => {
                return <Layout>

                    <section id='top'>
                        <div>
                            <div className='row'>

                                <div className='col-md-12'>
                                    <div className='big-quote' style={{ backgroundImage: `url(${data.site.siteMetadata.mainImage})` }}>
                                        <h1 className='schakel-theme xlg-text'>{data.site.siteMetadata.oneLiner}</h1>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='about'>
                        <div className='row'>

                            <div className='col-md-12'>

                                <div className='about'>
                                    <h1 className='schakel-theme'>Wie zijn wij?</h1>
                                    <p>
                                        Schakel is jonge organisatie waarbij gedrevenheid, oprechtheid en vertrouwen de drie belangrijkste pijlers
    vormen tot het geheel van Schakel.
    <br/>
    In tijden van razendsnelle technologische ontwikkelingen en alle dreigingen die daarmee
    samenhangen, lijkt er amper tijd om stil te staan voor de medemens. Wij van Schakel Public Relations
    gaan voor de herwaardering van de mens. Dit doen wij door mensen te verbinden met PR, zodat men
    (weer) oog krijgt voor elkaars kwaliteiten. We gaan voor opdrachten die mensen met elkaar verbindt met
    de maatschappij.
    <br/><br/>
    <b>Wij geloven in de kracht van onszelf als mensen. Persoonlijk contact is dan ook onze key.</b>
    <br/><br/>

    <Modal openText='Lees meer'>
    Wij creëren persoonlijke verhalen en content door middel van verschillende strategieën die merk en mens
    met elkaar verbinden. Wij bouwen relaties op met klanten op basis van vertrouwen en zullen gedreven
    aan de slag gaan met het vinden van de juiste oplossing. Schakel Public Relations richt zich op bedrijven
    die zich midden in de maatschappij bevinden. Wij verbinden relevante doelgroepen met elkaar tot
    waardevolle connecties.
    Wij richten ons op toonaangevende bedrijven die de maatschappelijke meerwaarde bieden. Vanuit eerder
    onderzochte trends bleek ook dat bedrijven met een sociaal doel of duidelijke Why hebben een positief
    effect op de maatschappij. Bedrijven die winst nastreven zullen minder snel gezien worden dan bedrijven
    die een positief effect willen bereiken met hun organisatie. Waar het afgelopen decennium de
    klantervaring heilig werd verklaard, maken steeds meer merken de draai naar sociale betekenis en
    maatschappelijke relevantie. Hierbij moet wel de geloofwaardigheid centraal komen te staan in alle
    uitingen.
    Mensen werken nadrukkelijk in loondienst en worden geacht te functioneren als medewerkers, te
    voldoen aan functieprofielen en hiërarchische procedures te volgen. Schakel Public Relations wil deze
    mensen een kans geven hun kwaliteiten naar voren te halen en deze optimaal te laten benutten.
    Wij werken volgens het principe PR te verbinden aan menselijke kwaliteiten. Hiermee zorgen wij voor een
    sterke strategische basis en doeltreffende communicatie. Bouw je organisatie op uit menselijke
    contacten, dat voegt de meerwaarde toe die vele missen.
    <br/><br/>
    Schakel Public Relations is het menselijkSTE pr-bureau omdat zij zich focussen op het verbinden van pr
    aan menselijke eigenschappen.
    </Modal>

                                    </p>
                                </div>

                            </div>

                        </div>
                    </section>

                    <section id='people'>

                        <h1>Het team van {data.site.siteMetadata.title}</h1>
                        <div className='row'>
                            {data.site.siteMetadata.people.map(p => <div key={p.fullName} className='col-md-3'>
                                <div className="card">
                                    <FlipBox backImg={p.profilePictureBack}>
                                        <img className="card-img" src={p.profilePictureFront} alt="Card" />
                                    </FlipBox>
                                    <div className="card-body">
                                        <h5 className="card-title">{p.fullName}</h5>
                                        <p className="card-text">{p.description}</p>
                                    </div>
                                </div>
                            </div>)
                            }
                        </div>

                    </section>

                    <section id='contact'>

                        <h1>Contact</h1>

                        <div className='row'>
                            <div className='col-md-12'>

                                <div className='contact-info'>
                                    <div className='row'>
                                        <div className='col-md-12'></div>
                                        <h1>Interesse?</h1>
                                    </div>

                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <p className='contact-details'>Mail met: <b onClick={event => window.location = `mailto: ${data.site.siteMetadata.email}`} className='underline pointer'>{data.site.siteMetadata.email}</b></p>
                                            <p className='contact-details'>Of kom langs op: <b className='underline'>{data.site.siteMetadata.adress}</b></p>
                                        </div>

                                        <div className='col-md-6'>
                                            <p className='socials'>
                                                <FontAwesomeIcon onClick={event => window.open(data.site.siteMetadata.instagram)} className='socials' icon={['fab', 'instagram']} />
                                                <FontAwesomeIcon onClick={event => window.open(data.site.siteMetadata.linkedin)} className='socials' icon={['fab', 'linkedin']} />
                                            </p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='row'>

                            <div className='col-md-6'>
                                <div className='our-work'>
                                    <h1>Bekijk ons werk</h1>
                                    <button onClick={event => window.location = '/cases'} className='my-btn'><FontAwesomeIcon icon={['fas', "arrow-right"]} /></button>
                                </div>

                            </div>

                            <div className='col-md-6'>
                                <div className='last-project'>
                                    <h1>Laatste project</h1>

                                    {
                                        data.allMarkdownRemark.totalCount === 0 ? <div className='last-project-container'>
                                            <h5 style={{ textAlign: 'center', color: 'white' }}>Nog geen projecten</h5>
                                        </div>
                                            :
                                            <div style={{ textAlign: 'center', color: 'white' }} onClick={event => window.location = data.allMarkdownRemark.edges[0].node.fields.slug} className='last-project-container pointer'>
                                                <h3>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h3>
                                                <i>Geschreven door {data.allMarkdownRemark.edges[0].node.frontmatter.author} op {data.allMarkdownRemark.edges[0].node.frontmatter.date}</i>
                                                <p>
                                                    {data.allMarkdownRemark.edges[0].node.excerpt}
                                                </p>
                                            </div>
                                    }



                                </div>


                            </div>

                        </div>

                    </section>


                </Layout>
            }}
        />
    }
}
