import './rulesText.scss'

interface RulesTextProps {
    text?: string
}

export const RulesText: React.FC<RulesTextProps> = ({
    text = 'Текст по умолчанию',
}: RulesTextProps) => {
    return (
        <div className='rules-details'>
            <div className='rules-details__desc'>
                <p>{text}</p>
            </div>
        </div>
    )
}
