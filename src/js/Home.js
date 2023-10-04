import React from 'react'
import Navbar from './Navbar'
import '../css/Home.css'

export default function Home() {
  return (
    <div className='Home_page'>
        <Navbar/>
        <h1 className='home_h1' style={{textAlign:"center"}}>Просто. Быстро. Крипто.</h1>
        <h2 className='home_h2'>Покупка-продажа криптовалюты</h2>
        <div className="home_card">
            <div className="home_card1">
            <h2>1 BTC ≈ 27 656,8 USD</h2>
            <h3>Продаю</h3>
            <div className="for_calc">
            <input name="calculation.inputAsset" maxlength="10" inputmode="decimal" type="text" size="1" class="sc-gspIFj bqFMth"></input>
            </div>
            </div>
            <div className="home_card1">
            <svg width="36" height="12" viewBox="0 0 36 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-hrZiYQ dpturI"><path d="M18.2178 3.63693C18.1977 5.22145 19.6299 6.10574 20.7088 6.63144C21.8173 7.1709 22.1896 7.51679 22.1854 7.99913C22.177 8.73744 21.3011 9.06323 20.4814 9.07592C19.0513 9.09814 18.2199 8.68984 17.5588 8.38098L17.0437 10.7916C17.7069 11.0973 18.9349 11.3639 20.2085 11.3755C23.1977 11.3755 25.1535 9.89992 25.1641 7.61199C25.1757 4.70844 21.1478 4.54766 21.1753 3.24979C21.1848 2.85631 21.5603 2.43638 22.3832 2.32954C22.7905 2.2756 23.9148 2.23435 25.1894 2.8214L25.6898 0.489046C25.0043 0.239415 24.1232 0.000361443 23.0263 0.000361443C20.2127 0.000361443 18.2336 1.49603 18.2178 3.63693ZM30.4973 0.201335C29.9515 0.201335 29.4913 0.519721 29.2861 1.0084L25.016 11.2041H28.0031L28.5975 9.56143H32.2479L32.5927 11.2041H35.2255L32.928 0.201335H30.4973ZM30.9151 3.17363L31.7772 7.30524H29.4162L30.9151 3.17363ZM14.596 0.201335L12.2414 11.2041H15.0879L17.4414 0.201335H14.596ZM10.3851 0.201335L7.42229 7.69026L6.22385 1.32256C6.08317 0.611746 5.52784 0.201335 4.91117 0.201335H0.0676965L0 0.520778C0.994292 0.736561 2.12398 1.08456 2.80835 1.45689C3.22722 1.68431 3.34675 1.88317 3.48425 2.42369L5.7542 11.2041H8.76247L13.3743 0.201335H10.3851Z" fill="url(#paint0_linear)"></path><defs><linearGradient id="paint0_linear" x1="16.1946" y1="11.6037" x2="16.5239" y2="-0.0787429" gradientUnits="userSpaceOnUse"><stop stop-color="#222357"></stop><stop offset="1" stop-color="#254AA5"></stop></linearGradient></defs></svg>
            <h3>Получаю</h3>
            <div className="for_calc">
            <input name="calculation.inputAsset" maxlength="10" inputmode="decimal" type="text" size="1" class="sc-gspIFj bqFMth"></input>
            </div>
            </div>
        </div>
    </div>
  )
}
