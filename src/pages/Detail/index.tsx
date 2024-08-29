import { useQueries, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import api from "../../utils/api";
import Loader from "../../componants/Header/Loader";
import Error from "../../componants/Header/Error";
import { Shose } from "../../types";
import Head from "./Head";
import Size from "./Size";
import Color from "./Color";

const Detail = () => {

  const {id} = useParams();
  const {isLoading , error , data} =  useQuery<Shose>({

queryKey:["shoes"],
queryFn:()=> api.get(`/shoes/${id}`).then((res)=> res.data)

  });
   console.log(data)
  return (
    <div   className="mt-8 ">
   {isLoading ? 
   (<Loader/>):
    error ?
    ( <Error message={error.message}/>) :
    (data && (
    <section className=" grid   grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-4">
    <div className="lg:col-span-2 h-fit grid gap-4 rounded-[48px]  grid-cols-2  overflow-hidden">
 {data?.picture.map((url, i) => (<img key={i} src={url}/>
))}
    </div>
    <div className=" flex flex-col gap-8">

<Head data={data}/>
<Color data={data.color}/>
<Size data={data.size}/>

<p>
  <h2 className="font-semibold">About this product</h2>
  <p dangerouslySetInnerHTML={{__html:data.description}}></p>
</p>

    </div>


    
    
    
    </section>))}
    </div>
  )
}

export default Detail
