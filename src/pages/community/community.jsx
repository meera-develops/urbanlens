import { useParams } from "react-router-dom";

function community() {

  const { citySlug } = useParams();

  return (
    <>
        <h2>Community Board for {citySlug.replace("-", " ")}</h2>    
    </>
  )
}

export default community;