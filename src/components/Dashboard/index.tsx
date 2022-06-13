import './dashboard.css'

type Props = {
    children: JSX.Element | JSX.Element[]
}

export function Dashboard({ children }: Props) {
    return(
        <div className="dashboard">
            { children }
        </div>
    )      
}