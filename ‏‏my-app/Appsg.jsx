import { useState } from 'react';

export default function SendMessage() {
  const [text, setText] = useState('');

  const sendMessage = async () => {
    const res = await fetch('/api/sendSlackMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    console.log('Response:', data);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your message"
      />
      <button onClick={sendMessage}>Send to Slack</button>
    </div>
  );
}
