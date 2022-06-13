import './box.css'

type Props = {
    data: number
    period: string
}

export function Box({ data, period }: Props) {
    return(
        <div className="box">
            <h3 className='box--title'>transactions</h3>
            <span className="box--transaction">{ data }</span>
            <span className="box--period">{ period }</span>
        </div>
    )
}