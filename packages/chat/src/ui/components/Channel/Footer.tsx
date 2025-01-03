import * as React from 'react'
import { IChannel } from '../../../types'

const Footer: React.FC<{channel: Pick<IChannel, 'name'>}> =
 ({ channel: { name: channelName } }) => (
  <footer className="flex-none px-4 pb-6 channel-footer">
    <form
      className="flex w-full overflow-hidden border-2 rounded-lg border-gray"
      aria-labelledby="message-label"
    >
      <p id="message-label" className="sr-only">
        Message Input
      </p>

      <button
        className="p-2 text-3xl border-r-2 text-gray border-gray"
        aria-label="add a file to this message"
      >
        <svg
          aria-hidden="true"
          className="block w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"></path>
        </svg>
      </button>

      <label htmlFor="message-input" className="sr-only">
        Send a message to the channelName channel
      </label>

      <input
        id="message-input"
        className="w-full px-4 channel-footer__message-input"
        placeholder={`Send a message to the #${channelName} channel`}
        type="text"
      />

      <button
        disabled
        className="p-2 font-bold text-white uppercase bg-gray-600 border-teal-600 opacity-50 channel-footer__message-send-button"
      >
        SEND
      </button>
    </form>
  </footer>
)

export default Footer
