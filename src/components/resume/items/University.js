import React from 'react'
import {
    BankOutlined
} from '@ant-design/icons'
import './items.css'

export default function University() {
    return (
        <div className="university-container">
            <div>
                <strong className="university-name">University</strong> <span className="university-time">2017-2022</span>
            </div>
            <div className="university-itemTag">
                <BankOutlined className="university-tagIcon" />
                <span className="university-tagText">Ha Noi University of Science and Technology</span>
            </div>
            <p className="university-description">
                I study Electronics and Telecommunications in university, majoring in Computer Engineering
            </p>
        </div>
    )
}
