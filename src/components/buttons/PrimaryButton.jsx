import "./PrimaryButton.css"

// eslint-disable-next-line react/prop-types
export default function PrimaryButton({children}) {
    return (
        <button className="primary-btn">
        {children}
        </button>
    )
}