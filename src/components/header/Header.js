import React, { useState, useEffect } from 'react'
import { Row, Col, Drawer } from 'antd'
import './header.css'
import { Typography } from 'antd'
import {
    MenuOutlined
} from '@ant-design/icons'
import { scroller } from 'react-scroll';

export default function Header() {
    const [openDrawer, setOpenDrawer] = useState(false)
    const [headerShown, setHeaderShown] = useState(false)
    const handleHeader = () => {
        window.scrollY > 0 ? setHeaderShown(true) : setHeaderShown(false)
    }
    useEffect(() => {
        window.addEventListener("scroll", handleHeader)
        return () => {
            window.removeEventListener("scroll", handleHeader)
        }
    }, [])
    return (
        <div style={{ position: 'fixed', top: 0, backgroundColor: headerShown ? 'rgb(27, 94, 32, 0.8)' : 'rgb(27, 94, 32, 0.4)', zIndex: 1000, width: '100%' }}>
            <Row className="header-container" align="middle">
                <Col xs={20} sm={20} md={12} className="header-nameContainer"><Typography.Text onClick={() => scrollToElement("about", -260)} className="header-name">T.Lâm Dev</Typography.Text></Col>
                <Col md={12} sm={0} xs={0} >
                    <Row justify="end">
                        <HeaderItems />
                    </Row>
                </Col>
                <Col xs={4} sm={4}>
                    <MenuOutlined className="header-menu" onClick={() => setOpenDrawer(true)} />
                </Col>
            </Row>
            <Drawer
                className="header-drawer"
                placement="right"
                closable={false}
                onClose={() => setOpenDrawer(false)}
                visible={openDrawer}
            >
                <Row>
                    <HeaderItems />
                </Row>
            </Drawer>
        </div>
    )
}

const scrollToElement = (element, offset) => {
    scroller.scrollTo(element, {
        duration: 1000,
        delay: 100,
        smooth: true,
        offset: offset
    })
}

function HeaderItems() {
    return (
        <>
            <Col className="header-section" xl={4} lg={6} md={6} sm={24} xs={24} onClick={() => scrollToElement("about", -260)}>About</Col>
            <Col className="header-section" xl={4} lg={6} md={6} sm={24} xs={24} onClick={() => scrollToElement("resume", -50)}>Resume</Col>
            <Col className="header-section" xl={4} lg={6} md={6} sm={24} xs={24} onClick={() => scrollToElement("services", -50)}>Services</Col>
            <Col className="header-section" xl={4} lg={6} md={6} sm={24} xs={24} onClick={() => scrollToElement("expertise", -50)}>Expertise</Col>
            <Col className="header-section" xl={4} lg={6} md={6} sm={24} xs={24} onClick={() => scrollToElement("projects", -50)}>Projects</Col>
            <Col className="header-section" xl={4} lg={6} md={6} sm={24} xs={24} onClick={() => scrollToElement("passions", -50)}>Passions</Col>
        </>
    )
}