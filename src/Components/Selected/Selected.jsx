

const Selected = ({ select , removePlayer }) => {

    const { player_img, name, main_category,price } = select
    return (
        <div className="md:mx-0 mx-2 flex justify-between items-center border p-3 border-slate-300 bg-slate-50 shadow rounded-lg">

            <div className="flex items-center gap-3  ">
                <img className="w-16 h-16 rounded-3xl object-cover" src={player_img} alt="" />
                <div className="flex flex-col gap-2">
                    <h4 className="font-semibold">{name}</h4>
                    <p className="text-sm">{main_category[0]} & {main_category[1]}</p>
                    <p className="text-sm">{price}</p>
                </div>
            </div>
            <img onClick={()=>removePlayer(select)} src={'Frame.png'} alt="" />

        </div>




    );
};

export default Selected;