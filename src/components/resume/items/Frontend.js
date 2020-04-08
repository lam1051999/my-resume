import React from 'react'
import {
    LaptopOutlined
} from '@ant-design/icons'
import './items.css'

export default function Frontend() {
    return (
        <div className="university-container">
            <div>
                <strong className="university-name">Front-end Developer</strong> <span className="university-time">6/2019-4/2020</span>
            </div>
            <div className="university-itemTag">
                <LaptopOutlined className="university-tagIcon" />
                <span className="university-tagText">Self Learning</span>
            </div>
            <p className="university-description">
                I attend many courses and live stream conferences online, i do online projects and also make my own projects for my portfolio
            </p>
        </div>
    )
}
