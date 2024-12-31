import * as React from 'react'
import { formatTimestamp } from '../../../utils/date.cjs'
import { IMessage } from '../../../types'

const Message: React.FC<Pick<IMessage, 'user' | 'createdAt' | 'body' >> = ({ user, createdAt, body }) => {
  const date = new Date(createdAt)

  return (
  <div
    className="flex items-start px-6 py-2 text-sm hover-target hover:bg-gray-100 message"
    role="listitem"
  >
    <figure className="w-10 h-10 mr-3 overflow-hidden rounded">
      <img
        className="message__user-avatar"
        src={user.iconUrl}
        alt={user.name}
      />
    </figure>

    <div className="flex-1">
      <h5 className="text-sm">
        <a
          href="#"
          className="font-bold text-black no-underline message__user-name hover:underline"
        >
          {user.name}
        </a>
        <span className="sr-only">at</span>
        <time className="ml-1 text-xs font-normal text-gray-500 message__timestamp">
          {formatTimestamp(date)}
        </time>
      </h5>

      <p className="leading-normal text-black message__body">
        {body}
      </p>
    </div>

    <button
      className="py-1 pl-3 pr-2 mb-1 border-transparent rounded message__delete-button hover:border-red-400 show-on-hover hover:bg-red-100 border-1"
      aria-label="permanently delete this message"
    >
      🗑
    </button>
  </div>
  )
}

export default Message
