import React, { useState, useEffect } from 'react'
import './resume.css'
import book from '../../assets/book.png'
import { Typography } from 'antd'
import { Timeline } from 'antd';
import University from './items/University';
import Frontend from './items/Frontend';
import {
    Html5Outlined,
    UserOutlined,
    ClusterOutlined,
    AppleOutlined
} from '@ant-design/icons'
import Lab from './items/Lab';
import Mobile from './items/Mobile';

export default function Resume() {
    const [width, setWidth] = useState(true)
    const handleWindowSize = () => {
        window.innerWidth >= 768 ? setWidth(true) : setWidth(false)
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSize)
        return () => window.removeEventListener('resize', handleWindowSize)
    }, [width])

    return (
        <div className="resume-container">
            <div className="resume-title">
                <div className="resume-titleImage">
                    <img src={book} alt="book" className="resume-book" />
                </div>
                <Typography.Text className="resume-titleText">RESUME</Typography.Text>
            </div>
            <Timeline className="resume-timeline" mode={width ? "alternate" : 'left'}>
                <Timeline.Item dot={<UserOutlined className="resume-icon" />}><University /></Timeline.Item>
                <Timeline.Item dot={<ClusterOutlined className="resume-icon" />}><Lab /></Timeline.Item>
                <Timeline.Item dot={<Html5Outlined className="resume-icon" />}><Frontend /></Timeline.Item>
                <Timeline.Item dot={<AppleOutlined className="resume-icon" />}><Mobile /></Timeline.Item>
            </Timeline>
        </div>
    )
}
