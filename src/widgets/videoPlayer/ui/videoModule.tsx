import top from 'widgets/videoPlayer/model/top.webm'

import './videoModule.scss'

interface VideoModuleProps {
    text?: string
    video?: string
}

export const VideoModule: React.FC<VideoModuleProps> = ({
    text = 'Видео модуль',
    video = top,
}: VideoModuleProps) => {
    return (
        <div className='video-module'>
            {video ? (
                <div className='video-module-wrapper'>
                    <video
                        className='video'
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
            <div className='video-module__desc'>
                <p>{text}</p>
            </div>
        </div>
    )
}
