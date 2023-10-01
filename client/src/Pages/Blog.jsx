import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import BlogSidebar from '../components/BlogSIdebar/BlogSidebar';
import Pagination from '../components/pagination/Pagination';
import Posts from '../components/Posts/Posts';
import { StrogeData } from '../components/context/Context';

const Blog = () => {
  const [sblog, setSBlog] = useState()
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10)
  const [isLoading,setIsLoading] = useState(false)
  const {searchPost} = useContext(StrogeData);
  const [postQuery,setPostQuery] = searchPost

  useEffect(() => {
    const getBlog = async () => {
      setIsLoading(true)
      try{
        const response = await axios.get(`https://newsapi.org/v2/everything?q=apple&from=2023-03-09&to=2023-03-09&sortBy=popularity&apiKey=${import.meta.env.VITE_API_KEY}`);
        setSBlog(response?.data)
        setIsLoading(false)
      }catch{
        setIsLoading(false)
      }
    }
    getBlog()
  }, [])

  // get Current Post
  const indexOffLastPost = currentPage * postPerPage
  const indexOffFirstPost = indexOffLastPost - postPerPage;
  const currentPosts = sblog?.articles?.slice(indexOffFirstPost, indexOffLastPost);

  // Change Page
  const paginate = (PageNumber) => setCurrentPage(PageNumber)

  return (
    <div className='BlogPage'>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-8 col-md-12">
            <Posts posts={currentPosts} query={postQuery} loadStatus={isLoading}/>
            <Pagination postPerPage={postPerPage} totalPost={sblog?.articles?.length} paginate={paginate}/>
          </div>
          <div className="col-lg-4 col-md-12">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;


