import PropTypes from "prop-types";

export const Props = (props) => {

    const { getvalue } = props;

    const { click } = props

    return (
        <div>
            <p style={{ color: getvalue }}>Hello This color is {getvalue}</p>
            <button onClick={click}>Click here</button>
        </div>
    )
}

Props.propTypes = {
    // oneOf => whatever we given inside the oneOf method is required or else its showing warning
    getvalue: PropTypes.oneOf(['red', 'blue', 'green']).isRequired,
    // oneOfType => is checking data type is given data type is there or not
    getvalue: PropTypes.oneOfType([PropTypes.string]).isRequired
}

Props.propTypes = {
    click: PropTypes.func.isRequired
}

// import React, { Component } from 'react'

// export default class Props extends Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.name}</p>
//                 <p>{this.props.age}</p>
//                 <p >{this.props.isMarried ? "No" : "Yes"}</p>
//             </div>
//         )
//     }
// }

// Props.propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//     isMarried: PropTypes.bool
// }

// Props.defaultProps = {
//     name: "Sathish",
//     age: 27,
//     isMarried: false
// }

