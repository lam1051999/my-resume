import React from 'react'
import {
    ApartmentOutlined
} from '@ant-design/icons'
import './items.css'

export default function Lab() {
    return (
        <div className="university-container">
            <div>
                <strong className="university-name">EDABK Lab</strong> <span className="university-time">7/2019-12/2019</span>
            </div>
            <div className="university-itemTag lab">
                <ApartmentOutlined className="university-tagIcon" />
                <span className="university-tagText">Lab of Dr.Nguyen Duc Minh</span>
            </div>
            <p className="university-description">
                Here I've learnt the most basic things about electronics under the guidance of a teacher
            </p>
        </div>
    )
}
