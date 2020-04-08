import React from 'react'
import {
    AndroidOutlined
} from '@ant-design/icons'
import './items.css'

export default function Mobile() {
    return (
        <div className="university-container">
            <div>
                <strong className="university-name">Hybrid mobile Developer</strong> <span className="university-time">1/2020-4/2020</span>
            </div>
            <div className="university-itemTag mobile">
                <AndroidOutlined className="university-tagIcon" />
                <span className="university-tagText">Self Learning</span>
            </div>
            <p className="university-description">
                I do stuffs like tutorials and make private apps like weather broadcast,... and there are some .apk ready to deploy
            </p>
        </div>
    )
}
