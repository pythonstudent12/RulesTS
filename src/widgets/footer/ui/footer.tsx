// import { Link } from 'react-router-dom'
import clsx from 'clsx'
import Engine from 'shared/assets/icons/engine.svg?react'
import Telegram from 'shared/assets/icons/telegram.svg?react'

import './footer.scss'

export const Footer = ({ className }: { className?: string }) => {
    return (
        <div className={clsx('footer', className)}>
            <div className='footer__wrapper _container'>
                <div className='footer__col'>
                    <ul className='footer__list'>
                        <li>
                            <Telegram />
                            <a
                                href='https://t.me/mult_uroki_ru'
                                target='_blank'
                                rel='noreferrer'>
                                Telegram
                            </a>
                        </li>
                        <li>
                            <Engine />
                            <a
                                href='https://pointjs.ru/'
                                target='_blank'
                                rel='noreferrer'>
                                Сайт Point.js
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer__copyright'> Copyright 2012-2025 </div>
        </div>
    )
}
