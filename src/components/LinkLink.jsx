import React from 'react'
import PropTypes from 'prop-types'
import './LinkLink.css'
const LinkLink = ({href, title, extra}) => {
    return (
        <a href={href} className="lineLink">
            <span className="lineLink__title">{title}</span>
            <span className="lineLink__extra">{extra}</span>
            <i className="lineLink__arrow"/>
        </a>
    )
}
LinkLink.propTypes = {
    title:PropTypes.string.isRequired,
    extra:PropTypes.string,
    href:PropTypes.string
}
export default LinkLink;
