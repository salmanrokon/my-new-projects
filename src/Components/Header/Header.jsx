import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div>
            <div className='flex justify-between p-4 max-w-7xl mx-auto border-b-2'>
                <h2 className='text-5xl font-semibold'>Knowledge Cafe</h2>
                <img src={profile}/>
            </div>
        </div>
    );
};

export default Header;
