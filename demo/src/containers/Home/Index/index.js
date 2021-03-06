import React from 'react';
import { Link } from 'react-router-dom';
import PrintText from '@/components/PrintText/index';
import { resumeIndex } from '@/util/resume';
import avatar from '@/assets/images/avatar.jpg';
import bg1 from '@/assets/images/bg1.png';
import bg2 from '@/assets/images/bg2.jpg';
import bg3 from '@/assets/images/bg3.gif';
import bg4 from '@/assets/images/bg4.png';
import bg5 from '@/assets/images/bg5.jpg';
import style from './index.less';
import './index.less';

console.log(style)

function getBg() {
  const random = Math.floor((Math.random() / 2) * 10) + 1;
  const bgs = { bg1, bg2, bg3, bg4, bg5 };
  return bgs[`bg${random}`]
}

const backGroundStyle = {
  // backgroundImage: `url(${getBg()})`,
  // backgroundPosition: '50% 50%',
  // backgroundSize: 'cover'
}

const Index = () => {
  return (
    <section className="index" style={backGroundStyle}>
      <span>
        <div className='index_avatar'>
          <span>{resumeIndex.name}</span>
          <img src={avatar} alt="avatar"/>
        </div>
        <div className="index_title"><span className="des">{resumeIndex.title}<span role="img" aria-label="Summer">☀️</span></span></div>
        <div className="index_nav">
          { resumeIndex.jianshu ? <a href={resumeIndex.jianshu} target="_blank" rel="noopener noreferrer">简书</a> : null }
          { resumeIndex.github ? <a href={resumeIndex.github} target="_blank" rel="noopener noreferrer">github</a> : null }
          { resumeIndex.blog ? <a href={resumeIndex.blog} target="_blank" rel="noopener noreferrer">Blog</a> : null }
        </div>
        <div className="index_description">
          <PrintText text={["每当无知的人们又想劝着你放弃", "我就不自觉产生反击他的抵抗力", "—— cblock KunfuPen"]} speed={100}/>
        </div>
      </span>
    </section>
  )
}

export default Index;
