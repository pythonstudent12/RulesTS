import CAT from 'shared/ui/pictureRulesText/CAT.jpg'
import zombieVideo from 'shared/ui/pictureRulesText/zombieVideo.webm'

import './pictureRulesText.scss'

interface RulesTextPictureProps {
    text?: string
    picture?: string
    video?: string
}

export const PictureRulesText: React.FC<RulesTextPictureProps> = ({
    text = 'Текст по умолчанию',
    picture = CAT,
    video = zombieVideo,
}: RulesTextPictureProps) => {
    return (
        <div className='game-details'>
            {video ? (
                <div className='picture-video-wrapper'>
                    <video
                        className='visible-video'
                        controls
                        preload='auto'
                        autoPlay
                        muted
                        playsInline
                        onLoadedData={(
                            e: React.SyntheticEvent<HTMLVideoElement>
                        ) => {
                            e.currentTarget.pause()
                        }}
                        aria-describedby='video-description'>
                        <source src={video} type='video/webm' />
                        <track
                            kind='captions'
                            src={undefined} // Можно указать путь к .vtt файлу
                            default
                            label='English'
                        />
                        Ваш браузер не поддерживает видео.
                    </video>
                </div>
            ) : null}
            {picture ? (
                <div className='picture-wrapper'>
                    <img src={picture} alt='картинка' />
                </div>
            ) : null}
            <div className='game-details__desc'>
                <p>{text}</p>
            </div>
        </div>
    )
}
