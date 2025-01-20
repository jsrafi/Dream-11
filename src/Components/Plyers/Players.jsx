import { useEffect, useState } from "react";
import Player from "../player/Player";
import Selected from "../Selected/selected";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Players = ({ credit, adjustCredit, addCredit }) => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('player.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    const [selected, setSelected] = useState([])

    const handleSelected = player => {
        if (selected.length < 6) {

            console.log(player)
            if (credit < player.price) {
                toast.error('Not enough money to buy this player. Claim some credit', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });


            }
            else {
                if (selected.find(select => select.id === player.id)) {
                    toast.error(`You have already selected ${player.name}!`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                else {
                    const newSelected = [...selected, player];
                    setSelected(newSelected);

                    toast.success(`Congrats!! ${player.name} is now in your squad`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    const price = player.price;
                    adjustCredit(price)
                }
            }




        }

        else {

            toast.error('you cant buy players more than 6 !!! If you want to buy please remove some players', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const removePlayer=(select)=>
    {
       const newSelected = selected.filter(selectx=> selectx.id !== select.id)
       setSelected(newSelected);
       addCredit(select)

       toast.warn('Player Has Been Removed', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

    const availableBtn = () => {
        const availBtn = document.getElementById('availBtn');
        availBtn.classList = "bg-yellow-500 join-item btn px-8 md:px-10  md:text-base text-xs"
        const selectBtn = document.getElementById('selectBtn')
        selectBtn.classList = "join-item btn px-8 md:px-10 bg-white md:text-base text-xs"
        const playerSlot = document.getElementById('playerSlot')
        playerSlot.classList.remove("hidden")
        const selection = document.getElementById('selection')
        selection.classList.add("hidden")
    }
    const selectedBtn = () => {
        const selectBtn = document.getElementById('selectBtn')
        selectBtn.classList = "bg-yellow-500 join-item btn px-8 md:px-10  md:text-base text-xs"
        const availBtn = document.getElementById('availBtn');
        availBtn.classList = "join-item btn px-8 md:px-10 bg-white md:text-base text-xs"
        const playerSlot = document.getElementById('playerSlot')
        playerSlot.classList.add("hidden")
        const selection = document.getElementById('selection')
        selection.classList.remove('hidden')
    }


    return (
        <>
            <div className="max-w-[1200px] mx-auto">
                <div className="flex  justify-end mt-10 mb-10 sticky top-[4rem] z-10 ">

                    <div className="join mx-2">
                        <button id="availBtn" onClick={availableBtn} className="join-item btn px-8 md:px-10 bg-white md:text-base text-xs">Available</button>
                        <button id="selectBtn" onClick={selectedBtn} className="join-item btn px-8 md:px-10 bg-white md:text-base text-xs">Selected ({selected.length})</button>
                    </div>
                </div>
                <div>

                    <div id="playerSlot">
                    <h1 className="text-2xl md:text-left text-center md:text-3xl font-bold mb-4 mx-2">Available Players</h1>
                    <div  className="grid grid-cols-1 md:grid-cols-3">
                        {
                            players.map(player => <Player key={player.id} player={player} handleSelected={handleSelected} ></Player>)
                        }


                    </div>
                    </div>
                </div>



                <div id="selection" className="hidden">
                    <div className="flex flex-col gap-5 ">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 mx-2">Selected Players : {selected.length}/6</h3>
                        {
                            selected.map(select => <Selected key={select.id} select={select} removePlayer={removePlayer}></Selected>)
                        }
                    </div>
                    <button onClick={availableBtn} className="py-2 mx-2 px-4 rounded-xl bg-yellow-400 font-bold text-sm border-2 border-slate-400 mt-5 mb-5">Add More Player</button>
                </div>




            </div>




        </>
    )
}

export default Players;