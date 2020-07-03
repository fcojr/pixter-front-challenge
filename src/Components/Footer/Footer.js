import React from 'react'
import './Footer.scss'
import Form from './Form/Form'

function Footer() {
    return (
        <footer id="footer">
            <div className='container'>
                <Form />
                <ul className='social-network'>
                    <li>
                        <a href="https://facebook.com" target="_blank">
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.1875 0.125H4.8125C3.5693 0.125 2.37701 0.61886 1.49794 1.49794C0.61886 2.37701 0.125 3.5693 0.125 4.8125L0.125 39.1875C0.125 40.4307 0.61886 41.623 1.49794 42.5021C2.37701 43.3811 3.5693 43.875 4.8125 43.875H18.2158V29.001H12.0635V22H18.2158V16.6641C18.2158 10.5947 21.8291 7.24219 27.3633 7.24219C30.0137 7.24219 32.7852 7.71484 32.7852 7.71484V13.6719H29.7314C26.7227 13.6719 25.7842 15.5391 25.7842 17.4541V22H32.501L31.4268 29.001H25.7842V43.875H39.1875C40.4307 43.875 41.623 43.3811 42.5021 42.5021C43.3811 41.623 43.875 40.4307 43.875 39.1875V4.8125C43.875 3.5693 43.3811 2.37701 42.5021 1.49794C41.623 0.61886 40.4307 0.125 39.1875 0.125Z" fill="#FCDB00"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank">
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.0625 0H4.6875C2.09961 0 0 2.09961 0 4.6875V39.0625C0 41.6504 2.09961 43.75 4.6875 43.75H39.0625C41.6504 43.75 43.75 41.6504 43.75 39.0625V4.6875C43.75 2.09961 41.6504 0 39.0625 0ZM34.2871 15.5078C34.3066 15.7812 34.3066 16.0645 34.3066 16.3379C34.3066 24.8047 27.8613 34.5605 16.084 34.5605C12.4512 34.5605 9.08203 33.5059 6.25 31.6895C6.76758 31.748 7.26563 31.7676 7.79297 31.7676C10.791 31.7676 13.5449 30.752 15.7422 29.0332C12.9297 28.9746 10.5664 27.1289 9.75586 24.5898C10.7422 24.7363 11.6309 24.7363 12.6465 24.4727C9.7168 23.877 7.51953 21.2988 7.51953 18.1836V18.1055C8.36914 18.584 9.36523 18.877 10.4102 18.916C9.53167 18.3317 8.81151 17.5389 8.31394 16.6085C7.81637 15.6782 7.55687 14.6391 7.55859 13.584C7.55859 12.3926 7.87109 11.2988 8.42773 10.3516C11.582 14.2383 16.3184 16.7773 21.6309 17.0508C20.7227 12.7051 23.9746 9.17969 27.8809 9.17969C29.7266 9.17969 31.3867 9.95117 32.5586 11.2012C34.0039 10.9277 35.3906 10.3906 36.6211 9.6582C36.1426 11.1426 35.1367 12.3926 33.8086 13.1836C35.0977 13.0469 36.3477 12.6855 37.5 12.1875C36.6309 13.4668 35.5371 14.5996 34.2871 15.5078Z" fill="#FCDB00"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://google.com" target="_blank">
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.1875 0.125H4.8125C2.22461 0.125 0.125 2.22461 0.125 4.8125V39.1875C0.125 41.7754 2.22461 43.875 4.8125 43.875H39.1875C41.7754 43.875 43.875 41.7754 43.875 39.1875V4.8125C43.875 2.22461 41.7754 0.125 39.1875 0.125ZM16.1406 31.7656C10.7402 31.7656 6.375 27.4004 6.375 22C6.375 16.5996 10.7402 12.2344 16.1406 12.2344C18.7773 12.2344 20.9746 13.1914 22.6836 14.793L20.0371 17.3418C19.3145 16.6484 18.0547 15.8379 16.1504 15.8379C12.8203 15.8379 10.1055 18.5918 10.1055 22.0098C10.1055 25.418 12.8203 28.1816 16.1504 28.1816C20.0176 28.1816 21.4629 25.3984 21.6973 23.9727H16.1406V20.6133H25.3594C25.457 21.1016 25.5156 21.5996 25.5156 22.2344C25.5156 27.8105 21.7754 31.7656 16.1406 31.7656ZM37.625 23.7773H34.793V26.6094H31.9414V23.7773H29.1094V20.9258H31.9414V18.0938H34.793V20.9258H37.625V23.7773Z" fill="#FCDB00"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://pinterest.com" target="_blank">
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M43.875 4.8125V39.1875C43.875 41.7754 41.7754 43.875 39.1875 43.875H15.2031C16.1602 42.2734 17.3906 39.9688 17.8789 38.084C18.1719 36.9609 19.373 32.3809 19.373 32.3809C20.1543 33.875 22.4395 35.1348 24.8711 35.1348C32.1074 35.1348 37.3125 28.4844 37.3125 20.2227C37.3125 12.3027 30.8477 6.375 22.5273 6.375C12.1758 6.375 6.6875 13.3184 6.6875 20.8867C6.6875 24.4023 8.5625 28.7773 11.5508 30.1738C12.0098 30.3887 12.2441 30.291 12.3516 29.8516C12.4297 29.5195 12.8398 27.8887 13.0156 27.1367C13.0742 26.8926 13.0449 26.6875 12.8496 26.4531C11.8633 25.252 11.0625 23.0449 11.0625 20.9844C11.0625 15.6914 15.0664 10.5742 21.8926 10.5742C27.7812 10.5742 31.9121 14.5879 31.9121 20.3301C31.9121 26.8145 28.6406 31.3066 24.373 31.3066C22.0195 31.3066 20.2617 29.3633 20.8184 26.9707C21.4922 24.1191 22.8008 21.043 22.8008 18.9824C22.8008 13.8066 15.4277 14.5195 15.4277 21.4238C15.4277 23.543 16.1406 24.9883 16.1406 24.9883C13.0742 37.957 12.6152 38.123 13.25 43.7969L13.4648 43.875H4.8125C2.22461 43.875 0.125 41.7754 0.125 39.1875V4.8125C0.125 2.22461 2.22461 0.125 4.8125 0.125H39.1875C41.7754 0.125 43.875 2.22461 43.875 4.8125Z" fill="#FCDB00"/>
                            </svg>
                        </a>
                    </li>
                </ul>
                <div className='addresses' id="addresses">
                    <address>
                        <p>Alameda Santos, 1970</p>
                        <p>6th floor - Jardim Paulista</p>
                        <p>São Paulo - SP</p>
                        <p>+55 11 3090 8500</p>
                    </address>
                    <address>
                        <p>London - UK</p>
                        <p>125 Kingsway</p>
                        <p>London WC2B 6NH</p>
                    </address>
                    <address>
                        <p>Lisbon - Portugal</p>
                        <p>Rua Rodrigues Faria, 103</p>
                        <p>4th floor</p>
                        <p>Lisbon - Portugal</p>
                    </address>
                    <address>
                        <p>Curitiba – PR</p>
                        <p>R. Francisco Rocha, 198</p>
                        <p>Batel – Curitiba – PR</p>
                    </address>
                    <address>
                        <p>Buenos Aires – Argentina</p>
                        <p>Esmeralda 950</p>
                        <p>Buenos Aires B C1007</p>
                    </address>
                </div>
            </div>                  
        </footer>
    )
}

export default Footer
