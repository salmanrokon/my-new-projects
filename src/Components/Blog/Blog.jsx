import PropTypes from 'prop-types';
import {BsBookmark} from 'react-icons/bs';

const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
   const{title,cover, author,author_img, date, hashtag,reading_time}=blog
    return (
        <div className='mb-20'>
            <img className='w-full' src={cover} alt={`cover picture of title:${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex mb-2'>
                    <img className='w-16' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-xl'>{author}</h3>
                        <p>{date}</p>
                    </div>
                </div>
                <div>
                <span>{reading_time} min read</span>
                <button 
                onClick={()=>handleAddToBookmark(blog)}
                className='m-2 text-red-600'> <BsBookmark> </BsBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>{
                hashtag.map((tag,index)=> <span key={index}><a href=""> #{tag}</a></span> )
                }</p>
                <button onClick={()=>handleMarkAsRead(reading_time)}>Mark As Read</button>
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
}
export default Blog;
