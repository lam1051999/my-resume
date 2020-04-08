import React from 'react'
import './about.css'
import { Typography } from 'antd'
import {
    GiftOutlined,
    MailOutlined,
    GithubOutlined,
    SkypeOutlined,
    PhoneOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import facebook from '../../assets/fbnewpng.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import avatar from '../../assets/avatar.jpeg'

export default function About() {
    return (
        <div className="about-container">
            <div className="about-shape1">
                <div className='about-intro'>
                    <Typography.Text className="about-introName">Trần Thế Lâm</Typography.Text>
                    <br />
                    <span className="about-introDescript">WebApps and Applications Developer</span>
                </div>
                <div className="about-tag">
                    <div className='about-introTag' >
                        <GiftOutlined className="about-tagIcon" />
                        <span className="about-tagText">10/05/1999</span>
                    </div>
                    <br />
                    <div className='about-introTag'>
                        <PhoneOutlined className="about-tagIcon" />
                        <span className="about-tagText">0962007024</span>
                    </div>
                    <br />
                    <div className='about-introTag' >
                        <MailOutlined className="about-tagIcon" />
                        <span className="about-tagText">lam1051999@gmail.com</span>
                    </div>
                    <br />
                    <div className='about-introTag' >
                        <GithubOutlined className="about-tagIcon" />
                        <span className="about-tagText">https://github.com/lam1051999</span>
                    </div>
                    <br />
                    <div className='about-introTag' >
                        <SkypeOutlined className="about-tagIcon" />
                        <span className="about-tagText">0962007024</span>
                    </div>
                    <br />
                    <div className='about-introTag'>
                        <HomeOutlined className="about-tagIcon" />
                        <span className="about-tagText">The Pride Tower, To Huu Street, La Khe Ward, Ha Dong District, Ha Noi</span>
                    </div>
                </div>
                <div>
                    <a target="_blank" href="https://www.facebook.com/lam.tt173223" rel="noopener noreferrer" >
                        <img src={facebook} alt="facebook" className="about-fbicon" />
                    </a>
                    <a target="_blank" href="https://twitter.com/TrnLm29507341" rel="noopener noreferrer" >
                        <img src={twitter} alt="twitter" className="about-tticon" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/tr%E1%BA%A7n-l%C3%A2m-21b57b1a2/" rel="noopener noreferrer" >
                        <img src={linkedin} alt="twitter" className="about-liicon" />
                    </a>
                </div>
            </div>
            <div className="about-shape2">
                <img src={avatar} className="about-avatar" alt="avatar" />
            </div>
        </div>
    )
}

