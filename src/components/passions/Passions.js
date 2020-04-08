import React from 'react'
import './passions.css'
import passions from '../../assets/passions.png'
import { Typography, Col, Row } from 'antd'
import passion1 from '../../assets/passion1.jpg'
import passion2 from '../../assets/passion2.jpg'
import passion3 from '../../assets/passion3.jpg'

export default function Passions() {
    return (
        <div className="passions-container">
            <div className="passions-title">
                <div className="passions-titleImage">
                    <img src={passions} alt="passions" className="passions-image" />
                </div>
                <Typography.Text className="passions-titleText">PASSIONS</Typography.Text>
            </div>
            <Row className="passions-row">
                <Col xs={24} sm={24} md={17}>
                    <div className="passions-passion">
                        <img className="passions-images" src={passion3} alt="passion1" />
                        <div className="passions-contentDescription">
                            <span className="passions-description listen">I love listening to audio<br />books and musics</span>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={7}>
                    <Row>
                        <Col xs={12} sm={12} md={24}>
                            <div className="passions-passion">
                                <img className="passions-images" src={passion2} alt="passion2" />
                                <div className="passions-contentDescription">
                                    <span className="passions-description developer">Become<br />a developer</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={24}>
                            <div className="passions-passion">
                                <img className="passions-images" src={passion1} alt="passion3" />
                                <div className="passions-contentDescription">
                                    <span className="passions-description sport">I like<br/>playing sports</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
