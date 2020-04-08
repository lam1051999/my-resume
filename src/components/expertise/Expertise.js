import React from 'react'
import './expertise.css'
import expertise from '../../assets/expertise.png'
import { Typography } from 'antd'
import { Progress } from 'antd';

export default function Expertise() {
    return (
        <div className="expertise-container">
            <div className="expertise-title">
                <div className="expertise-titleImage">
                    <img src={expertise} alt="expertise" className="expertise-image" />
                </div>
                <Typography.Text className="expertise-titleText">EXPERTISE</Typography.Text>
            </div>
            <div className="expertise-contents">
                <Typography.Text className="expertise-content">HTML, CSS, Javascript</Typography.Text>
                <Progress
                    strokeColor={{
                        from: '#108ee9',
                        to: '#87d068',
                    }}
                    percent={70}
                    status="active"
                    showInfo={false}
                    strokeWidth={15}
                />
                <Typography.Text className="expertise-content">ReactJs</Typography.Text>
                <Progress
                    strokeColor={{
                        from: '#c62828',
                        to: '#ffcdd2',
                    }}
                    percent={80}
                    status="active"
                    showInfo={false}
                    strokeWidth={15}
                />
                <Typography.Text className="expertise-content">React Native</Typography.Text>
                <Progress
                    strokeColor={{
                        from: '#7b1fa2',
                        to: '#e1bee7',
                    }}
                    percent={50}
                    status="active"
                    showInfo={false}
                    strokeWidth={15}
                />
                <Typography.Text className="expertise-content">NodeJs</Typography.Text>
                <Progress
                    strokeColor={{
                        from: '#1976d2',
                        to: '#bbdefb',
                    }}
                    percent={20}
                    status="active"
                    showInfo={false}
                    strokeWidth={15}
                />
                <Typography.Text className="expertise-content">MySQL</Typography.Text>
                <Progress
                    strokeColor={{
                        from: '#00796b',
                        to: '#b2dfdb',
                    }}
                    percent={20}
                    status="active"
                    showInfo={false}
                    strokeWidth={15}
                />
                <Typography.Text className="expertise-content">Java</Typography.Text>
                <Progress
                    strokeColor={{
                        from: '#f57c00',
                        to: '#ffe0b2',
                    }}
                    percent={20}
                    status="active"
                    showInfo={false}
                    strokeWidth={15}
                />
            </div>
        </div>
    )
}
