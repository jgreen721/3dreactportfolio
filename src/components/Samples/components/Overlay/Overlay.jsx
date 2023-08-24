import { Scroll } from '@react-three/drei'
import React from 'react'
import "./Overlay.css"


const Section = (props)=>{


    return (
        <div className={`sample-section ${props.className}`}>
            {props.children}
        </div>
    )
}

const Overlay = () => {
  return (
    <>
    <Scroll html>
        <Section className="start">
            <div className="sample-section-content">
                <h1>Exhibit 1</h1>
                <p className="exhibit-blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam nobis. Iste commodi accusantium fugit, suscipit nobis minima iusto fugiat!</p>
                <ul className="technologies-list">
                    <li className="technology-item">
                        <h5>React</h5>
                    </li>
                    <li className="technology-item">
                        <h5>GSAP</h5>
                    </li>
                </ul>

            </div>
        </Section>
        <Section className="end">
            <div className="sample-section-content">
                <h1>Exhibit 2</h1>
                <p className="exhibit-blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam nobis. Iste commodi accusantium fugit, suscipit nobis minima iusto fugiat!</p>
                <ul className="technologies-list">
                    <li className="technology-item">
                        <h5>Javascript</h5>
                    </li>
                    <li className="technology-item">
                        <h5>HTML</h5>
                    </li>
                    <li className="technology-item">
                        <h5>CSS</h5>
                    </li>
                </ul>

            </div>
        </Section>
        <Section className="start">
            <div className="sample-section-content">
                <h1>Exhibit 3</h1>
                <p className="exhibit-blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam nobis. Iste commodi accusantium fugit, suscipit nobis minima iusto fugiat!</p>
                <ul className="technologies-list">
                    <li className="technology-item">
                        <h5>Angular</h5>
                    </li>
                    <li className="technology-item">
                        <h5>Express</h5>
                    </li>
                    <li className="technology-item">
                        <h5>Mongoose</h5>
                    </li>
                    <li className="technology-item">
                        <h5>JWT</h5>
                    </li>
                </ul>

            </div>
        </Section>
        <Section className="end">
            <div className="sample-section-content">
                <h1>Exhibit 4</h1>
                <p className="exhibit-blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam nobis. Iste commodi accusantium fugit, suscipit nobis minima iusto fugiat!</p>
                <ul className="technologies-list">
                    <li className="technology-item">
                        <h5>React</h5>
                    </li>
                    <li className="technology-item">
                        <h5>GSAP</h5>
                    </li>
                </ul>

            </div>
        </Section>
        <Section className="start">
            <div className="sample-section-content">
                <h1>Exhibit 5</h1>
                <p className="exhibit-blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam nobis. Iste commodi accusantium fugit, suscipit nobis minima iusto fugiat!</p>
                <ul className="technologies-list">
                    <li className="technology-item">
                        <h5>React</h5>
                    </li>
                    <li className="technology-item">
                        <h5>GSAP</h5>
                    </li>
                </ul>

            </div>
        </Section>
    </Scroll>
    </>
  )
}

export default Overlay