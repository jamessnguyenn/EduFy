import Navbar from '../navbar/navbar';
import './store.css';
import Product from './product';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
export default function Store() {
    const [health, setHealth] = useState(0);
    const [coins, setCoins] = useState(0);
    const[profilePicLink, setProfilePicLink] = useState('./loading-image.gif');
    const[bought, setBought]=useState([]);
    const history = useHistory();
    useEffect(() => {
        axios.get(`https://edufy-space-api.herokuapp.com/users/${localStorage.getItem('user_id')}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => {
              
                setHealth(res.data.health);
                setCoins(res.data.gold);
                setProfilePicLink(res.data.avatar);
                setBought(res.data.bought);
                
            })
            .catch(err => {
                if (err.response.status == 401 || err.response.status == 403) {
                    localStorage.clear();
                    history.push('/');
                }
            })

    }, [])
  
    const subtractCoins = (value) =>{
        const newValue = coins-value;
        
        axios.put(`https://edufy-space-api.herokuapp.com/users/${localStorage.getItem('user_id')}/gold`,{gold:newValue},{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res=>{
            console.log("Sucessfully updated");
        })
        .catch(err=>{
            console.log(err);
        })
        setCoins(prevCoins=> prevCoins-value);
    }
    const addBought = (value)=>{
        setBought(prevBought =>[...prevBought, value]);
    }
    return (
        <div>
           <Navbar hp={health} coins={coins} profilePicLink={profilePicLink}/>
            <div className="store-header">
                <div className="footer-container">
                    <h1 className="footerTitle"> Time for Your Rewards</h1>
                </div>
            </div>
            <div className="product-holder">
                <Product
                    image="https://lh3.googleusercontent.com/pw/ACtC-3f8gwQfARhStNJ3gOj1IfzcsgP1GsUhvFPTEBGVYlgHuFl5GsDtN3gCNYadmKeNR6bGjVJMiSFqB4ierIcOQxINOGAidc6O5YjhwKS-7HUZajpn4wn-gk-q0BwW1W-XmRrzj6nrv5GUwRv4ifjDnpjc=s512-no?authuser=0"
                    name='Play Games'
                    amount='100'
                    isDisable={coins<100}
                    isBought={bought.includes(1)}
                    index={1}
                    subtractCoins={subtractCoins}
                    addBought={addBought}
                />
                <Product
                    image="https://lh3.googleusercontent.com/pw/ACtC-3dB5xUlg_WWgfWzA8fd_iMzXbUUdIHadLxlNVQU7a-LW4oKfj3jE4bu_oopeHHotYYA31PtFDPTUMdBhF4VZe7Q7SqB_PCwVPt4AesQrZsl98DPxINw2YRrWz0Mtx4ty3AbgZziP2Kb3IDO5p_P4CyS=s512-no?authuser=0"
                    name='Treat Yourself'
                    amount='100'
                    isDisable={coins<100}
                    isBought={bought.includes(2)}
                    index={2}
                    subtractCoins={subtractCoins}
                    addBought={addBought}
                />
                <Product
                    image="https://lh3.googleusercontent.com/pw/ACtC-3cMlgq1YUqq-B1mjHtiJoU1FCnnGBWYoZbPG4oQ1Co9i-uyMpAMqzoUB-PiVRWpHPGx9c1t_3VGpuReBNb3oFh2jgTkf6ujlGMbkKQiXcOY99qzMTFT8tm6vvq6hH_bEfXdZbC7Z4uQN9FZSMU9GOM6=s512-no?authuser=0"
                    name='15 Minute Break'
                    amount='50'
                    isDisable={coins<50}
                    isBought={bought.includes(3)}
                    index={3}
                    subtractCoins={subtractCoins}
                    addBought={addBought}
                />


            </div>
            <div className="product-holder">
                <Product
                    image="https://lh3.googleusercontent.com/pw/ACtC-3eCYSMyAFEjPlu6Ny0E2jcKQqBaok5MC57XJnYX7bNXTOCT3tDqnpgHABTU77rzucw7ZC-9G1jwWQJa3bG1KX73y73eKhmo0M7AGGAFu0EOBdaCe-w3p2LLI8jzUUUaviZVw-SWNePwXxuaXJk0lVUM=s512-no?authuser=0"
                    name='Avatar'
                    amount='500'
                    isDisable={coins<500}
                    isBought={bought.includes(4)}
                    index={4}
                    subtractCoins={subtractCoins}
                    addBought={addBought}
                />
                <Product
                    image="https://lh3.googleusercontent.com/pw/ACtC-3crc4aDexesFMdsHN80c0BnRBSc_ljjfTp2lpzqxPsf5eNjAqVhzNVxiA72vvB4zxyiG4VFkES2uDgJYgm4iH32JZYCkhIXB-igKjhqYyuoXB6_oXGQ69UdtSE4LzgHj_NmajaeTBiKEzRp4m5hbODw=s512-no?authuser=0"
                    name='Avatar'
                    amount='500'
                    isDisable={coins<500}
                    isBought={bought.includes(5)}
                    index={5}
                    subtractCoins={subtractCoins}
                    addBought={addBought}
                />
                <Product
                    image="https://lh3.googleusercontent.com/pw/ACtC-3cmswhKUw55mmCI0u9JkZTppf7_JaZVLpxlnJNViPcXROoyWECENxyGOXE6RutpDvHHQZUHRkYFZ1ewDitvG2rfoHnl-0YWQp-qwzIKxu4Ax4cvHJkO7I5QwTv5H75RptGANB16i3f8S7e6fP8S712k=s512-no?authuser=0"
                    name='Avatar'
                    amount='500'
                    isDisable={coins<500}
                    isBought={bought.includes(6)}
                    index={6}
                    subtractCoins={subtractCoins}
                    addBought={addBought}
                />

            </div>
            <div className="product-holder">
                <Product
                    image="https://lh3.googleusercontent.com/pw/ACtC-3eGyRt9JSWm1UD4hGtxUxhj7elEkQKAFP4XGWapoelH_FDEuhkcasAVq2800_30PvWzLxR2DnPkUOdkbHJJyMtssGEzZSik3kolh6njoCtIRaP6ZAZ8hW_zAsLGRlekd9-uEhU_2o1MrG4Oveaqai0-=s512-no?authuser=0"
                    name='Avatar'
                    amount='500'
                    isDisable={coins<500}
                    isBought={bought.includes(7)}
                    index={7}
                    subtractCoins={subtractCoins}
                    addBought={addBought}
                />
                <Product
                    image="https://lh3.googleusercontent.com/pw/ACtC-3e_caswcLlPIi60BLu3_r5nUmy1WK0RWe7_68VF_TJPpzdrRjkgkdmb8WAx26lCtm-7U6KrifaqsI1345OQycpmP8Z5FFeib91oTWJzpiNFeDKWSwhNQjRGcocL3cTCxz3UJ0tYj3rfziAvdUjoiVIh=s512-no?authuser=0"
                    name='Avatar'
                    amount='500'
                    isDisable={coins<500}
                    isBought={bought.includes(8)}
                    index={8}
                    subtractCoins={subtractCoins}
                    addBought={addBought}
                />
                <Product
                    image="https://lh3.googleusercontent.com/pw/ACtC-3frooqaBLbcRoNMbDgwxtmc8iO7m_Kdi_hVFDIIMErzZo1NzOjKmsToRQYTFvw4YulSl0-jmViQxQ6u_ncNhKA0GuYzJzyUkTRWob01gFfYBS8DFHcScbXWRVsCa8Q2OzvWzqahVj2JG150_-dbwsMY=s512-no?authuser=0"
                    name='Avatar'
                    amount='500'
                    isDisable={coins<500}
                    isBought={bought.includes(9)}
                    index={9}
                    subtractCoins={subtractCoins}
                    addBought={addBought}
                />
            </div>
            <div className="product-holder">
                <Product
                    image="https://lh3.googleusercontent.com/pw/ACtC-3epGaOLwsQy8jEs3TDBU2gpTBf3pBld_YOEn30o8xo4-eMOiTiwuaHvnMZa4UYP7F-rbbFAYvgxaOqf_PzxbNZFIbzT3tpFv3tV3NZEV6ZgU1J2MrekipxA9a3IKEXxHS5nA3TLocdqFxAIcmQhMoNO=s512-no?authuser=0"
                    name='Avatar'
                    amount='500'
                    isDisable={coins<500}
                    isBought={bought.includes(10)}
                    index={10}
                    subtractCoins={subtractCoins}
                    addBought={addBought}
                />
                <Product
                    image="https://lh3.googleusercontent.com/pw/ACtC-3eL9zyGdrrjxVm2JK0eKa_cHm2f4P7hDrkpwbKKKOho0LV8e8gPtUqAjDJYIa1w4Z9C-nxq4OfwwxsKz7VidzQA-9MU-HBrLKAEyPMChlpeNyqba6r3EoQ6tAKO7drJ21_THk3xiH5LBa63KE1n-e39=s512-no?authuser=0"
                    name='Avatar'
                    amount='500'
                    isDisable={coins<500}
                    isBought={bought.includes(11)}
                    index={11}
                    subtractCoins={subtractCoins}
                    addBought={addBought}
                />
                <Product
                    image="https://lh3.googleusercontent.com/pw/ACtC-3d599vZGN0XqmtPc0SzFcKIugnJvIaHzSGXgQy7n3Fe4i_b_kCjMK1NlXQ3_DnkGBnINZsziP__Hqf7-WDCQNUHyIOs_frM6OY6eAi4MDdeNkgJOgNmq4-0gg1QDpU1e7dOl-iUdA9cgtl3SYLOXgDs=s512-no?authuser=0"
                    name='Avatar'
                    amount='500'
                    isDisable={coins<500}
                    isBought={bought.includes(12)}
                    index={12}
                    subtractCoins={subtractCoins}
                    addBought={addBought}
                />

            </div>
            <div className="product-holder">
                <Product
                    image="https://lh3.googleusercontent.com/pw/ACtC-3e04bVsMUsRD3sHZNL_y_yO362_X_hQEqvxAhaGou6ZRqLEY9SvVvCBn4XS_9TlSnAY6e62aNwNxfltLcDZ_hZIW4_QilDklPJcKN6L2kMSwhr8dTNGyJ3K6L7TdBycDXH5XoIUHvQrF_PdoGDqXvbK=s512-no?authuser=0"
                    name='Avatar'
                    amount='500'
                    isDisable={coins<500}
                    isBought={bought.includes(13)}
                    index={13}
                    subtractCoins={subtractCoins}
                    addBought={addBought}
                    
                />
                <Product
                    image="https://lh3.googleusercontent.com/pw/ACtC-3couZ1Mo0uX3kwTvqMiwrkEhIKA2FWNSGLaRca7h1q1NjlbuICanSQOgTLwOYsSSkT8L963Qgs0D6C5icIPcRWa-wird2s4JA7-xznZHjmhKX7qPqRcbSPmOmxBsa2ujvxS3UWdIqS7CjWw5ZJSpZrN=s512-no?authuser=0"
                    name='Badge To Flex'
                    amount='1000'
                    isDisable={coins<1000}
                    isBought={bought.includes(14)}
                    index={14}
                    subtractCoins={subtractCoins}
                    addBought={addBought}
                />
                <Product
                    image="https://lh3.googleusercontent.com/pw/ACtC-3dSIR7v8hK7GFYQCfhSrvdWQNwFbpbjAsSQqFcElXz_-86P9_EPT14xZZ_lmIGViHzZK9DycA_SMf6CQzm79QAYnnFf58T4r11reaKoQT4sN1ESqCDl2qmmo4n6jwD-HfRFGX_-fk57ufRx256kT1mb=s512-no?authuser=0"
                    name='Replenish Health'
                    amount='1500'
                    isDisable={coins<1000}
                    isBought={bought.includes(15)}
                    index={15}
                    subtractCoins={subtractCoins}
                    addBought={addBought}
                />

            </div>

        </div>

    );

}
