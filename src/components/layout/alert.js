import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function Alert({alerts}) {
    return (
        <div className="pt-4">
            { alerts !== null && alerts.length > 0 && alerts.map(alert => (
                <div className={`alert alert-${alert.alertType}`} key={alert.id}>
                    { alert.msg}
                </div>
            ))}
        </div>
    )
}

// Alert.propTypes = {
//     alert: PropTypes.array.isRequired
// }

const mapStateToProps = (state) => {
    return {
        alerts: state.alert
    }
}

export default connect(mapStateToProps) (Alert)
