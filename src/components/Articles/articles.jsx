import React from 'react';
import './articles.css';
import News from '../../images/news.jpg';
import { BsArrowRightSquareFill } from "react-icons/bs";
const Articles = () => {
    return (
        <div className='container margin-top-40'>
            <div className='row'>
                <div className='col-md-5'>
                    <div class="line size-100px mg-bottom-28px"></div>
                    <div className='d-flex justify-content-between'>
                    <h3 className='ml-4 display-text'>Articles & News</h3>
                    <BsArrowRightSquareFill className='svg-ic'/>
                    </div>
                    <div class="divider mg-30px---62px"></div>
                    <div className='d-flex m-4'>
                        <img src={News} alt={'News'} style={{ width: '150px', height: '150px' }} className='article-new'/>
                        <div className='margin-left-10'>
                            <div class="text-100 medium text-uppercase">Mar 9, 2023</div>
                            <h4 className='heading-h4-size'>How to use the most out of Data science program</h4>
                        </div>
                    </div>
                    <div className='d-flex m-4'>
                        <img src={News} alt={'News'} style={{ width: '150px', height: '150px' }} className='article-new'/>
                        <div className='margin-left-10'>
                            <div class="text-100 medium text-uppercase">Mar 9, 2023</div>
                            <h4 className='heading-h4-size'>How to use the most out of Data science program</h4>
                        </div>
                    </div>
                    <div className='d-flex m-4'>
                        <img src={News} alt={'News'} style={{ width: '150px', height: '150px' }} className='article-new'/>
                        <div className='margin-left-10'>
                            <div class="text-100 medium text-uppercase">Mar 9, 2023</div>
                            <h4 className='heading-h4-size'>How to use the most out of Data science program</h4>
                        </div>
                    </div>
                </div>
                <div className='col-md-2'></div>
                <div className='col-md-5'>
                    <div class="line size-100px mg-bottom-28px"></div>
                    <div className='d-flex justify-content-between'>
                    <h3 className='ml-4 display-text'>Upcoming Events</h3>
                    <BsArrowRightSquareFill className='svg-ic'/>
                    </div>
                    
                    <div class="divider mg-30px---62px"></div>
                    <div className='d-flex m-4'>
                        <img src={News} alt={'News'} style={{ width: '150px', height: '150px' }} className='article-new'/>
                        <div className='margin-left-10'>
                            <div class="text-100 medium text-uppercase">Mar 9, 2023</div>
                            <h4 className='heading-h4-size'>How to use the most out of Data science program</h4>
                        </div>
                    </div>
                    <div className='d-flex m-4'>
                        <img src={News} alt={'News'} style={{ width: '150px', height: '150px' }} className='article-new'/>
                        <div className='margin-left-10'>
                            <div class="text-100 medium text-uppercase">Mar 9, 2023</div>
                            <h4 className='heading-h4-size'>How to use the most out of Data science program</h4>
                        </div>
                    </div>
                    <div className='d-flex m-4'>
                        <img src={News} alt={'News'} style={{ width: '150px', height: '150px' }} className='article-new'/>
                        <div className='margin-left-10'>
                            <div class="text-100 medium text-uppercase">Mar 9, 2023</div>
                            <h4 className='heading-h4-size'>How to use the most out of Data science program</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Articles;