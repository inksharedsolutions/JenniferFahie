import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author.jpg'
import { Helmet } from "react-helmet"
const ATB = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Layout>
                <Helmet title="About the Author | Jennifer Fahie" />
                <Nav pathExt={props.path} />
                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />


                <div className="container">
                    <section className="body-author-contents">

                        <div className="heading-quote">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="author-profile" />
                            </div>

                            <div className="heading-quote">
                                {/* <h4>
                                    “Sounds a lot like God to me”.
                                </h4>

                                <span className="ata-span-fx">
                                    The God Particle, Chapter 11, Going Within.
                                </span> */}
                            </div>
                        </div>

                        <article  className="article-section-android">
                            <p>
                            I am Jennifer Fahie, I’m the Author of The Essence of Life (Poetry and Life in Motion) parts 1 and 2. I am a proud mother of 3 wonderful children Conrad, Clifford, and Chamara Fahie. I was born on the Island of Anguilla but at the age of six I migrated to Saint Thomas U.S Virgin Islands. I went from a Junior A level in the British to a third grade level at the Seventh Day Adventist School. From there my journey was on to Madison Elementary School and then at Nazareth Bay High School where I graduated in 1978. Upon graduating I thought about the schools and furthering my education so I took some courses at The College of the Virgin Islands but before completing I joined the US Army and deployed to Europe.
                            </p>

                            <p>
                            It wasn’t easy for me growing up, I started out living on a boat until I moved in with family. I lived in Anna’s Fancy #54. I remembered water being ten cents a gallon and all tenants used the same bathroom. In the year 1982 I was honorably discharged from the army. Then later on in 1982 I arrived back to Saint Thomas where I went to spend a few years with my parents at their home in Frydenhoj. From sharing a bathroom with tenants to using a family owned out-house (outside bathroom) I was making progress. I wanted my own house with an indoor bathroom one day and with my determination I made it happen. In 1992 I finished building my own home and yes equipped with two indoor bathrooms.
                            </p>

                            <p>
                            I’ve always been what some may call a “hustler”, a hard working person doing whatever jobs to get what I want or where I want to be. I started working in the sixth grade selling Encyclopedias (The book of Knowledge and Medical Encyclopedias), Lucky Heart, and Avon products from door to door. Shortly after that I ended up in the hotel industry. I started working with Wyndham Hotel where I was for 19 and a half years. I saw the company change names/management from Wyndham to Stouffers then Renaissance Grand Beach to Palace Resort. I also worked for Sapphire Beach Resort. Working at the hotels in various departments allowed me to travel often with my family and friends. I kept up with travels then included different family, friends, and some of my children’s classmates. As we know, nothing good lasts forever, find out what happened in the poem The Ultimate Vacation. Sapphire Beach Resort closed due to hurricane damages. The next step included working for Kmart and from there I worked for IHOP restaurant. I even sold water, Gatorade, and sometimes fruits on the streetside, just to keep an income. Thereafter I pursued a job in construction in St John until finally I enlisted in the National Guard where I was honorably discharged, to now providing my services as a veteran officer. 
                            </p>

                            <p>
                            I’ve brought to you 61 years of experiences that you might be able to read and relate to with enjoyment, remembering that there is only one man who holds your future and the key to your success, “Jesus Christ”. Always say “Thank You Jesus”! in good and bad times. I wanted to write a book before retirement, instead I wrote two. Don’t give up on yourself. Be Blessed.
                            </p>
                            
                            <p>
                                What made me want to write? My social life seemed to be a constant prodding toward the literary. Several women (who I will not mention) saw the writer in me before I did. After writing my first two novels, I reflected on the beautiful guiding hands who realized authorship would fill me with pride. It does. 
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                        Jennifer Fahie
                                </span>
                            </p>
                        </article>


                    </section>
                </div>

            </Layout>
        </>
    )
}


export default ATB;