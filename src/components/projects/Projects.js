import React, { useState } from 'react'
import './projects.css'
import projects from '../../assets/projects.png'
import { Typography, Row, Col } from 'antd'
import web1 from '../../assets/web1.png'
import web2 from '../../assets/web2.png'
import app1 from '../../assets/app1.png'
import app2 from '../../assets/app2.png'
import {
    SearchOutlined
} from '@ant-design/icons';

export default function Projects() {
    const [src, setSrc] = useState("")

    return (
        <div className="projects-container">
            <div className="projects-title">
                <div className="projects-titleImage">
                    <img src={projects} alt="projects" className="projects-image" />
                </div>
                <Typography.Text className="projects-titleText">PROJECTS</Typography.Text>
            </div>
            <Row justify="center" className="projects-row">
                <Col className="projects-image-col" xs={24} sm={24} md={14}>
                    <div>
                        <img className="projects-image-all" src={web1} alt="web1" />
                        <div className="projects-iconContainer">
                            <SearchOutlined onClick={() => setSrc(web1)} className="projects-iconSearch" />
                        </div>
                    </div>
                </Col>
                <Col className="projects-image-col" xs={12} sm={12} md={9}>
                    <div>
                        <img className="projects-image-all" src={app1} alt="app1" />
                        <div className="projects-iconContainer">
                            <SearchOutlined onClick={() => setSrc(app1)} className="projects-iconSearch" />
                        </div>
                    </div>
                </Col>
                <Col className="projects-image-col" xs={12} sm={12} md={9}>
                    <div>
                        <img className="projects-image-all" src={app2} alt="app2" />
                        <div className="projects-iconContainer">
                            <SearchOutlined onClick={() => setSrc(app2)} className="projects-iconSearch" />
                        </div>
                    </div>
                </Col>
                <Col className="projects-image-col" xs={24} sm={24} md={14}>
                    <div>
                        <img className="projects-image-all" src={web2} alt="web2" />
                        <div className="projects-iconContainer">
                            <SearchOutlined onClick={() => setSrc(web2)} className="projects-iconSearch" />
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="projects-modal" style={{ top: src === "" ? '-110vh' : '0' }}>
                <p className="projects-modalClose" onClick={() => setSrc("")} >+</p>
                <img src={src} alt="big" className="projects-modalImage" />
            </div>
        </div>
    )
}
