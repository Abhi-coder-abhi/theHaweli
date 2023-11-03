import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "../css/feedback.css"
import { Box } from '@mui/material';

export default function Feedback(props) {
    return (
        <div  >
            <div className='feedback-page-header'><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block', fontFamily: "cursive", color: "#B8860B" }}> Your-Feedback</span></div>
            <div className='feedback-page-container'><span style={{ display: 'inline-block', fontFamily: "cursive", color: "#990033" }}> We value your feedback and are committed to continuously improving our services.</span></div>
            <div className='feedback-page-container'><span style={{ borderBottom: "2px solid #990033", display: 'inline-block', fontFamily: "cursive", color: "#990033" }}>  Your input is invaluable in helping us provide the best possible experience for our guests.</span></div>
            <form className='feedback-page-form'>
                <div className='feedback-page-form-container'>
                    <div className='feedback-page-form-header'>Send  Your Feedback</div>
                    <div className='feedback-page-form-label'>Name</div>
                    <input type="text" className='feedback-page-form-input' />
                    <div className='feedback-page-form-label'>Email</div>
                    <input type="text" className='feedback-page-form-input' />
                    <div className='feedback-page-form-label'>Feedback</div>
                    <textarea className='feedback-page-form-input' />
                    <div className='feedback-page-form-label'>Rating</div>
                    <div className='feedback-page-form-rating'>
                        <input type="radio" id="rating5" name="rating" value="5" style={{cursor:'pointer'}} />
                        <label style={{color:"blue"}}>5</label>
                        <input type="radio" id="rating4" name="rating" value="4" style={{cursor:'pointer'}}/>
                        <label style={{color:"blue"}}>4</label>
                        <input type="radio" id="rating3" name="rating" value="3" style={{cursor:'pointer'}}/>
                        <label style={{color:"blue"}}>3</label>
                        <input type="radio" id="rating2" name="rating" value="2" style={{cursor:'pointer'}}/>
                        <label style={{color:"blue"}}>2</label>
                        <input type="radio" id="rating1" name="rating" value="1" style={{cursor:'pointer'}}/>
                        <label style={{color:"blue"}}>1</label>
                    </div>
                    <button className='feedback-page-form-button'>Submit</button>
                   
                </div>
            </form>
        </div>
    );
}
