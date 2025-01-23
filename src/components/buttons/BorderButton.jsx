import "./BorderButton.css"

// eslint-disable-next-line react/prop-types
export default function BorderButton({children}) {
    return (
        <button className="border-btn">
        {children}
        </button>
    )
}