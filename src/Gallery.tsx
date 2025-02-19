import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const clientId = import.meta.env.VITE_ACCESS_KEY;

const url = `https://api.unsplash.com/search/photos?client_id=${clientId}&query=office`;

const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });
  console.log(response);

  return <div>Gallery</div>;
};

export default Gallery;
