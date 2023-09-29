

const Bookmark = ({bookmark}) => {
    const{title}=bookmark;
    return (
        <div className="bg-slate-100 p-4 m-4">
            <h3 className="text-xl">{title}</h3>
        </div>
    );
};

export default Bookmark;
