function Output(props) {
    return (
        <div>
            <div className="Output">
                {props.newGender
                    ? `${props.newName.charAt(0).toUpperCase() + props.newName.slice(1)} is ${props.newGender}`
                    : ''}
            </div>
        </div>
    )
}

export default Output