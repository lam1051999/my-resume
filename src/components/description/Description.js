import React from 'react'
import './description.css'
import { Divider } from 'antd'
import { Button } from 'antd'
import { Row, Col } from 'antd'

export default function Description() {
    return (
        <div className="description-container">
            <p className="description-descrip">Hello! I'm Trần Thế Lâm. I'm 20 years old boy with many passions and goals. <br />
            I am student at Ha Noi University of Science and Technology. My major is Electronics and Telecommunications,
            majoring in Computer Engineering. <br />
            I'm now a junior WebApps and Applications Developer with almost 1 year of experience specializing in
            front-end development and mobile applications. Experienced with many stages of development cycle
            for dynamic web projects. Having much knowledges including HTML5, CSS, Javascript, ReactJs, NodeJs,
            React Native, MySQL, Java, C/C++.
            </p>
            <Divider />
            <Row justify="center" className="description-buttons">
                <Col className="description-col download" md={12} sm={24} xs={24} >
                    <Button className="description-button" href="https://www.google.com.vn/" target="_blank" >
                        DOWNLOAD CV
                    </Button>
                </Col>
                <Col className="description-col" md={12} sm={24} xs={24} >
                    <Button className="description-button" href="https://www.linkedin.com/in/tr%E1%BA%A7n-l%C3%A2m-21b57b1a2/" target="_blank">
                        CONTACT ME
                    </Button>
                </Col>
            </Row>
        </div>
    )
}
