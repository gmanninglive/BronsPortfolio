import PropTypes from "prop-types"
import React from "react"
import Card from "./Card"

const Cards = ({ portfolio, hideLastItemOnMobile = false }) => {
  return (
    <div className="container">
      <div className="flex flex-wrap -mx-3 lg:-mx-6">
        {portfolio.map(( { node } ) => (
          <div className={"w-full sm:w-1/2 lg:w-1/3 p-3 md:p-6"} key={node.id}>
            <Card portfolio={node} />
          </div>
        ))}
      </div>
    </div>
  )
}

Cards.propTypes = {
  portfolio: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Cards

// {
//   "last:hidden lg:last:block": hideLastItemOnMobile,
// }
