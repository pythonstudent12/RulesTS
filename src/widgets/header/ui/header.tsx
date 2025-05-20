import { useState, useRef, useEffect } from 'react'
import { InView } from 'react-intersection-observer'
import { Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { CartPreview } from 'entities/cart'
import Menu from 'shared/assets/icons/menu.svg?react'
import { CONTENT_NAVIGATION_MENU } from 'shared/consts'
import ReactDOM from 'react-dom'

import './header.scss'

export const Header = () => {
    const [isViewHeader, setIsViewHeader] = useState(true)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMobileView, setIsMobileView] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    const onChangeViewHeader = (inView: boolean): void => {
        setIsViewHeader(inView)
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.matchMedia('(max-width: 768px)').matches)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (isMobileMenuOpen && isMobileView) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }

        // Очистка при размонтировании
        return () => {
            document.body.classList.remove('no-scroll')
        }
    }, [isMobileMenuOpen, isMobileView])

    const portalRoot = document.getElementById('portal-root') as HTMLElement
    // const menuRef = useRef<HTMLDivElement>(null)

    const navigationContent = CONTENT_NAVIGATION_MENU.map((item) => (
        <li key={item.title} className='layout__navigation-menu-item'>
            <NavLink
                to={item.link}
                end
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={({ isActive }) =>
                    clsx(
                        'layout__navigation-menu-link',
                        isActive && 'layout__navigation-menu-link_active'
                    )
                }>
                {item.title}
            </NavLink>
        </li>
    ))

    return (
        <>
            <InView as='div' onChange={(inView) => onChangeViewHeader(inView)}>
                <header className='header _container'>
                    <div className='header__wrapper'>
                        <Link to='/'>
                            <h2 className='header__title'>Zombie Tap Game</h2>
                        </Link>
                        {/* <Search className='header__search' />
                        <div className='header__btn-wrapper'>
                            <CartPreview onClick={() => navigate('/cart')} />
                        </div> */}

                        <button
                            type='button'
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            aria-label='toggle view menu'
                            className='header__menu-open-btn'>
                            <Menu className='header__menu-icon' />
                        </button>
                    </div>
                </header>
            </InView>
            <nav
                className={clsx(
                    'header__navigation-menu',
                    !isViewHeader && 'layout__navigation-menu_sticky'
                )}>
                <div
                    className={clsx(
                        'header__navigation-menu-wrapper',
                        // !isViewNavigationMenu &&
                        'header__navigation-menu-wrapper_hide',
                        '_container'
                    )}>
                    <ul className='header__navigation-menu-list'>
                        {navigationContent}
                    </ul>

                    <div className='header__navigation-menu-btn-wrapper'>
                        <CartPreview className='header__navigation-menu-button' />
                    </div>
                </div>
            </nav>
            {/* Мобильное меню через портал */}
            {/* сделать меню на весь экран, но прозрачное! */}
            {/* сделать выезжающее меню всегда справа сбоку, или по центру всегда, но прозрачное! */}
            {isMobileMenuOpen &&
                portalRoot &&
                isMobileView &&
                ReactDOM.createPortal(
                    <div className='menu-portal-layer'>
                        {/* Затемняющий оверлей */}
                        <div
                            className='menu-overlay'
                            // onClick={() => setIsMobileMenuOpen()}
                        />

                        {/* Контейнер меню */}
                        <nav
                            ref={menuRef}
                            className={clsx(
                                'mobile-menu',
                                isMobileMenuOpen && 'active'
                            )}>
                            <div className='menu-content'>
                                <ul className='header__navigation-menu-list'>
                                    {navigationContent}
                                </ul>

                                {/* <div className='menu-footer'>
                                    <CartPreview />
                                </div> */}
                            </div>
                        </nav>
                    </div>,
                    portalRoot
                )}
        </>
    )
}
