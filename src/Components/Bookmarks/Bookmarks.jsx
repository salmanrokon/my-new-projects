import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks,readingTime}) => {
    // const{bookmarks} = bookmarks;
    return (
        <div className="md:1/3 bg-gray-300 ml-4">
            <div>
                <h3 className='text-2xl'>Reading Time:{readingTime}</h3>
            </div>
            <h2 className='text-center text-3xl'>Book Marked Blog:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;
