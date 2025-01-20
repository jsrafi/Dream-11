

const Player = ({player, handleSelected}) => {

    const {player_img,country,name,category,price,main_category} = player
    return (
        <div className=" flex flex-col gap-4 p-4 m-5 border border-gray-200 rounded-xl">
            <img className="w-full h-56 rounded-xl object-cover" src={player_img} alt="" />
            <h3 className="flex items-center gap-2 font-semibold"><img src={'../../../public/user 1.png'} alt="" />{name}</h3>
            <div className="flex items-center justify-between mb-2">
                <p className="flex items-center gap-2 text-sm text-gray-500"><img src={'../../../public/report 1.png'} alt="" />{country}</p>
                <button className="py-1 px-3 rounded-lg bg-gray-300 text-sm font-semibold">{category}</button>
            </div>
            <hr />
            <h4 className="font-semibold">Rating</h4>
            <div className="flex items-center justify-between text-sm">
                <h4 className="font-semibold">{main_category[0]}</h4>
                <h4 className="font-semibold text-gray-500">{main_category[1]}</h4>
            </div>
            <div className="flex items-center justify-between">
                <h4 className="font-semibold">Price: ${price} </h4>
                <button id="select-btn" onClick={()=>handleSelected(player)} className="border border-gray-300 py-1 px-3 rounded-lg font-semibold text-sm hover:bg-yellow-300">Choose Player</button>
            </div>

            
        </div>
    );
};

export default Player;