import React,{useEffect, useState} from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/author.jpg'

const UpperMain =()=>{

    const [stateUpper, statFunc] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', scrollEffect);
    });

    const scrollEffect = (e)=>{
        let axisY =window.scrollY;

        if(axisY > 500 ){
            statFunc(true);
        }
    }   
    
    
    return  (
        <>
            <section className={`upper-main upper-style`}>
                <div className="container-gt">

                    <div className="grid-two-columns" >
                        <div className={`img-wrapper-form ${stateUpper && 'image-author'}`}>
                            <img src={AuthorImg} alt="author-profile"/>
                        </div>

                        <div classNames="content-img-wrapper">
                            <section className="content-wrapper-body">
                                <h1>Jennifer Fahie</h1>
                                <span>Author & Writer</span>

                                <p>
                                Jennifer Fahie the Author of The Essence of Life (Poetry and Life in Motion) parts 1 and 2. A proud mother of 3 wonderful children Conrad, Clifford, and Chamara Fahie. 
                                Jennifer Fahie was born on the Island of Anguilla but at the age of six she migrated to Saint Thomas U.S Virgin Islands...
                                </p>

                                <button>
                                    <Link to="/about-the-author">
                                        Read More
                                    </Link>
                                </button>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpperMain