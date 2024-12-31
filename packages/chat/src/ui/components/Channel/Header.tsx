import * as React from 'react'

const Header: React.FC<{title: string, description: string}> = ({ title, description }) => (
  <header className="flex flex-row items-center px-6 py-2 border-b channel-header">
    <div className="flex-1">
      <h3 className="mb-1 font-extrabold text-gray-800 channel-header__title">
        <span aria-hidden="true">#</span>
        {title}
      </h3>
      <h4 className="text-sm text-gray-600 truncate channel-header__description">
        {description}
      </h4>
    </div>
  </header>
)

export default Header
