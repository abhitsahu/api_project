import React ,{useState,useEffect} from 'react'
import Spinner from 'react-bootstrap/Spinner';
import Pagination from 'react-bootstrap/Pagination';
import { motion } from "framer-motion"


function Home() {

      const [data, setData] = useState([]);
      const [page, setPage] = useState(1);
      const [pageCount,setPageCount] = useState(0);
      const [fdata,setFdata] = useState([])


//reactHook
      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=100`);
          const json = await response.json();
          setData(json);
        };
        fetchData();
      }, [page]);


      useEffect(() => {
        const fData = async () => {
          const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=100`);
          const json = await response.json();
          let first = json[0]
          setFdata(first);
        };
        fData();
      }, [page]);


      
      useEffect(()=>{
      
        const maxPage = 10;
        setPageCount(maxPage)
        window.scrollTo({top: 0});

      },[data])

//Handler

      const handleNextClick = () => {
        if(page === pageCount) return page;
        setPage(page + 1);
      };

      const handlePre = ()=>{

      if( page ===  1 ) return page;
      setPage(page-1);

      }

//Animation 

        const imgOption = {
          initial:{
              scale:0.1,
              opacity: 0,
          },
          whileInView:{
              scale:1,
              opacity:1,
          },
          transition: {
              delay: 0.3,
              
          }
        }

        const btnAnimation = {
          initial:{
              y: "100%",
              opacity: 0,
          },
          whileInView:{
              y:0,
              opacity:1,
          },
          transition: {
              delay: 0.3,
              ease: "easeIn"
          }
      }

//apiImages
        
     
      const Row = () =>{
        return(
          <div className='row'>
      
            <div className='col'>
              {
                data.length > 0 ?
                data.map((item,index) => (

                  <motion.div {...imgOption}  className="data-img" key={index}>
                    <img className='img-main' src={item.download_url} alt=""  />
                  </motion.div>
                  
                )):<div className="d-flex justify-content-center mt-5">
                <Spinner animation="border" variant="danger" />
                </div>
              }
              
      
            </div>
      
            
          </div>
        )
      }

//Pagination
      const Pagina = ()=>{

        return(
          <>
            <Pagination>

            <Pagination.Prev onClick={handlePre}disabled={page === 1} />
            <Pagination.Item>{page}</Pagination.Item>
            <Pagination.Next onClick={handleNextClick} disabled={page === pageCount} />
            </Pagination>
          </>
        )
      }

//
      
    return (

      <>
        <section className="section">

          <div className="masthead" style={{
            backgroundImage: `url(${`${fdata.download_url}`})`
          }}>
          </div>
              

          <div className="content">             
                <Row />
                
                <motion.div {...btnAnimation} className="d-flex justify-content-center" style={{paddingtop:'10px'}}>
                  <Pagina />
                </motion.div>

          </div>

        </section>
      </>
    )
}

export default Home