import React from 'react'
import {IoMdNotifications} from "react-icons/io"
import {FaUserAlt} from "react-icons/fa"
import '../css/Navbar.css'

export default function Navbar() {
  return (
    <div>
        <div className="navbar">
            <div className="for_start_nav">
            <img src="https://whitebird.io/assets/images/light-logo.svg" alt="" />
            </div>
            <ul className="for_center_nav">
                <li>Вопросы-ответы</li>
                <li>Новости</li>
                <li>Поддержка</li>
                </ul>
                <div className="for_end_nav">
                    <IoMdNotifications style={{display:"none"}} className='nav_icon'/>
                    <div className='for_button'><svg style={{display:"none",marginRight:"10px"}} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-ezWOiH fdcHno"><circle cx="8" cy="4" r="4" fill="#0069FF"></circle><path d="M14 17C15.1046 17 16.0246 16.091 15.7513 15.0208C15.6573 14.6527 15.537 14.291 15.391 13.9385C14.989 12.9679 14.3997 12.086 13.6569 11.3431C12.914 10.6003 12.0321 10.011 11.0615 9.60896C10.0909 9.20693 9.05057 9 8 9C6.94942 9 5.90914 9.20693 4.93853 9.60896C3.96793 10.011 3.08601 10.6003 2.34315 11.3431C1.60028 12.086 1.011 12.9679 0.608963 13.9385C0.462954 14.291 0.342678 14.6527 0.248703 15.0208C-0.0245724 16.091 0.89543 17 2 17L8 17H14Z" fill="#0069FF"></path></svg><p>Войти</p></div>
                </div>
        </div>
    </div>
  )
}
