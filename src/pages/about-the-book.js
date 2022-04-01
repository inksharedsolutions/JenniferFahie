import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/book.png'
import Book2 from '../../static/book/book1.png'
import { Helmet } from "react-helmet"

const ATB = (props) => {


    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'jennifer-fahie',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="About the Book | Jennifer Fahie" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `Essence of Life: Poetry & Life in Motion I`,
                                spanTitle: '',
                                imgSrc: Book1,
                                id: 'the_gifted_one',
                                content:    
                                    `
                                    When you are in your darkest hour, 

                                    Always remember to give God the power, 

                                    When the road is rough and dry, 

                                    Look up to the savior on high 



                                    It is with such faith-filled words such as these in "A Friend" that Jennifer A. Fahie invites us to examine our own faith in this heartfelt collection of evocative poetry. 

                                    She goes on a step further in "Consequences" and shares her thoughts on the violent and crime-ridden society that seems to surround us today: 



                                    They shouldn't let you pay a dime! 

                                    Your punishment should fit the crime. 

                                    For every action 

                                    There is a reaction. 



                                    Reminding us to be aware of the world around us and how we can change it for the better while encouraging us to look above for our saving grace, Jennifer A. Fahie gives us a personal glimpse into her innermost thoughts and feelings in her Collection of Poetry.
                                    `,
                                ebooks: {
                                    stratton: '',
                                    barnes: 'https://www.barnesandnoble.com/w/essence-of-life-jennifer-fahie/1140316556?ean=9781648954818',
                                    amazon: 'https://www.amazon.com/Essence-Life-Poetry-Motion-ebook/dp/B09HXY273K/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1634323913&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Essence-Life-Poetry-Motion/dp/1648954804/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1634323913&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/essence-of-life-jennifer-fahie/1140593205?ean=9781648954801',
                                    booksamillion: 'https://www.booksamillion.com/p/Essence-Life/Jennifer-Fahie/9781648954801?id=8158356429268',
                                },
                            }}
                        />

                            <BookInfo
                            data={{
                                title: `Essence of Life: Poetry & Life in Motion II`,
                                spanTitle: '',
                                imgSrc: Book2,
                                id: 'the_gifted_one',
                                content:
                                    `
                                    This book takes you on the journey of my life. These poems are reflections of various situations that you may or may not personally encounter.  



                                    I strive to take you with me on these adventures as we experience love, prejudice, hate, and war-just to name a few.  
                                    
                                    
                                    
                                    My goal is to share with you my experience and encourage you to use them as motivation to continue your journey. Don't sit and cry about the things you have been through. Instead, look back, laugh, and reflect on what you have learned and how you have grown. It is not about what you did or did not do, it's about how you pick yourself up and push to be better than you were the day before. Enjoy and stay tuned for part 2.
                                    `,
                                ebooks: {
                                    stratton: '',
                                    barnes: 'https://www.barnesandnoble.com/w/essence-of-life-jennifer-fahie/1140316555?ean=9781648955914',
                                    amazon: 'https://www.amazon.com/Essence-Life-Poetry-Motion-II-ebook/dp/B09HXXPSGN/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1634323890&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Essence-Life-Poetry-Motion-II/dp/1648955908/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1634323890&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/essence-of-life-jennifer-fahie/1140593147?ean=9781648955907',
                                    booksamillion: 'https://www.booksamillion.com/p/Essence-Life/Jennifer-Fahie/9781648955907?id=8158356429268',
                                },
                            }}
                        />
                        <div className="commentSection" >
                            <DiscussionEmbed {...disqusConfig} />
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}


export default ATB;