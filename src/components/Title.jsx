import "./Title.css"

// eslint-disable-next-line react/prop-types
export default function Title({children, subtitle, title}) {
    return (
        <div className="title-block">
            <div className="content">
                <span>- {subtitle}</span>
                <p>{title}</p>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    )
}