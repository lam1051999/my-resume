import React from 'react'
import './services.css'
import { Typography, Row, Col } from 'antd'
import services from '../../assets/services.png'
import {
    ReadOutlined,
    GithubOutlined,
    SecurityScanOutlined,
    UsergroupDeleteOutlined,
    TaobaoOutlined
} from '@ant-design/icons'

export default function Services() {
    return (
        <div className="services-container">
            <div className="services-title">
                <div className="services-titleImage">
                    <img src={services} alt="services" className="services-image" />
                </div>
                <Typography.Text className="services-titleText">WHAT I DO</Typography.Text>
            </div>
            <Row className="services-row">
                <Col xs={24} sm={12} md={8}>
                    <div className="services-service">
                        <ReadOutlined className="services-icon" />
                        <br />
                        <Typography.Text className="services-serviceName">University</Typography.Text>
                        <p className="services-serviceDescription">Programming Language(C,C++), System Design Analysis, General Information, Data Structures and Algorithms</p>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <div className="services-service">
                        <GithubOutlined className="services-icon" />
                        <br />
                        <Typography.Text className="services-serviceName">Programming self learning</Typography.Text>
                        <p className="services-serviceDescription">I've learnt courses, tutorials online and also done some private projects<br />
                            WebApp: HTML5, CSS, Javascript, ReactJs, NodeJs, MySQL, git <br />
                            Mobile: React Native, Java</p>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <div className="services-service">
                        <SecurityScanOutlined className="services-icon" />
                        <br />
                        <Typography.Text className="services-serviceName">EDABK Lab</Typography.Text>
                        <p className="services-serviceDescription">I've learnt stuffs like Digital Signal Processing, Embedded System</p>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <div className="services-service">
                        <UsergroupDeleteOutlined className="services-icon" />
                        <br />
                        <Typography.Text className="services-serviceName">Internship</Typography.Text>
                        <p className="services-serviceDescription">I was an intern in MilkyDev Team outsource team</p>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <div className="services-service">
                        <TaobaoOutlined className="services-icon" />
                        <br />
                        <Typography.Text className="services-serviceName">English</Typography.Text>
                        <p className="services-serviceDescription">I've learnt TOEIC at Ecorp English Center</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
