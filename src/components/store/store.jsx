import NavBar from '../navbar/navbar';
import './store.css';
import Product from './product';
export default function Store(){

    return(
        <div>
          <NavBar/>
          <div className="store-header">
                <div className="footer-container">
                    <h1 className="footerTitle"> Time for Your Rewards</h1>
                </div>
            </div>
            <div className="product-holder">
         <Product 
         image="https://lh3.googleusercontent.com/aFCvQ1o6XN5xODO98-Wdvg73Nf2Fz_K0pF2KVWUoLa5W4qURxI3-jX9Sx0C2M5MsObZpB5iOLi1kmExF23XB9SV9kipJCjIL0p2c623ZNZDqETzij6ksXL4wpjMLvluUYmExesanx8LdEpWuFkoTQ7XALwGsyelYARgpSug2S8Rf1W4aoErq61GEP9zhdn6y3r-5iY_ZU7B7JdqSWXptssYGP4KpqXcxF4nL3km258Cs-v3dQKi3C0RKq_B0Gy65mpEDQwVV6mtrhDn3s6hZfHGoZzKgMXaX66dwvabOlrCShxmxi9P4TlXh4rpfKI-sNajOxTspWgCBFVILmHd3FHujgMYS4u7BxHVmzNPsvDBYKYa5FqKCaIOzoNEQKmTE-GRBLqqGkhT3XsafEEqTEO6BDRxQ0JEhq-LvrMJgduhw-Kh_fhn1vEpA8s7ZgqLVZLLeWUZ82MuyDJBV8_lTCUZ7yZYqS5bexWJC8Kttrfd7Pd2I6Isjy_pUM0U8Otp9A3UTjOjBpmo2u3IvjVmo1RvAvLet7zTt8Sdt4bIzxhtj2oo61zaCNlAwoQLK6XCrNcpXZKtbYHKRHV_u108vg2Zm8LbZuC9fFD0XmE80sjf70K3D_uJ6T6gXGKP6mrQuki0TePQ6wVDz7AzFm1lXQQSInqHrneNKKYKUrvmP5QojZPHR-ZryHVQ4IsLzbA=s512-no?authuser=0"
         name='Avatar'
         amount='500'
         />
         <Product 
         image="https://lh3.googleusercontent.com/Ol-JIWNwPeQMGhuwMYmHkMw2NjGIyt5h9UHdn0Q-pdcGfYQ8mXxa4BSvWwWQiAiBRM8UYDr2nSjXBBM04HjI_7G2ixO1OzGWaOIsEPc6vd6_F4LTM3i2_bzNJQ5OjurTAbImh7gfu3qcaNACVgRH1WpxYej65MskFggTQr-T-dppon8M6V-VFgh_VAs0U0QxLGdxWSOLkTh2nuVJdfFC0TK8YR_RqOoEXmH_nTuny2hPj7CAQ5wkEb3oajEGgbNMlxzlKy0yNy2kx43Yw2WYkdd1lc1VdLSYABgLvDibYHug9e5frm8_XN_cHWpmjzMAc4gOrDMSUHg231nHu37QG3JrgWjSHesG6jLXGDay0CnQMZ_DEAjqvV6jtrKttsCq-lnRRiJ9F47d5_VwC2vKUskUW-bUVHE153A8rpb8rXHNkM-GCzv6oseSn2VlYPjYHkePktF5qRozBCwJnZmgoIhz9OO6HyobIeS6Shq0xk-Qe61KdM7ydrWjmHYZ35ITJSAMFUrc4y-P7RqyaJmSQifO_vLY2ew2Z2r-lG1d0KNFRoQDDHl5tXrIDf3gQC4Db9ZAmOiJ8idFP2pfW7DVIb8T0m9tNqYZsLM-MUv9oV6M3a97Qyvq47z9QFKDCRVH1kwKuQTj0aAxjlM-FOy8DqDMpA7jY6TuS3o9hx7BdIG3a2JdqhHgUeYV-PD6MQ=s512-no?authuser=0"
         name='Avatar'
         amount='500'
         />
         <Product 
         image="https://lh3.googleusercontent.com/YCswS_Lfea_sADwaieoAq61eEb6xhpQ_SFgHxl1xWwyU2lAvIn8c549GWNjOBWp4KdfU_lZZmH8Zh9KSKvVQUmcCHwG2BWvV_zGDHMT8l4JnAWG-9CASYENFvJlL1cg5BHmAfGDFETg6u6DegvzT3TwuNoIN-2jPVYUpO8aPXmGOKB2wZ6YhtcUK5YdKHIaZaSq96aCxQK9pdrvZwELJssKMae5l3RuMfU8M5tiOocgPOvBxIEiDFihKpkp5HU_6Bd9GUH4abvP2hCSbRkwrwtOU6geP8dto6xLexUw1DqJDObslEXJxg183vJCrGQxIpGpB7wtW8gyDp_ztwWx6nyVnRAoRpHu4AnPhKGB4SMCWB881ICjNHs4kmi_XIXXuV77HCocY15bhfhucKjjTAg9SID0cFizmitSvgo4gjPQhxp27dpmHQHWOdvYMGgazUKE1OQ-qfzgnTKqpbrkcDlYvQd0QR3zr7-u333IeD1c1AbLRtly-AlGBFIkQE7qDgePriX43m_mcW69FRgKIFPxbtfR0Rh7-ojxw5e8AhxU7uAY-_NuDKmY2Mvd1taR_oeddzMVaLDlDfnabrrC5w96gjMkLvu4lxhSJaqEEGABVAMyQnquYvrSYpfaNbJroTGtN6mAGm9LtxtnA4SnxzrWn7VWlRCj7vdnmFcbX6LhaIsEJzlyRK_aQUtwniw=s512-no?authuser=0"
         name='Avatar'
         amount='500'
         />
         
         </div>
         <div className="product-holder">
         <Product 
         image="https://lh3.googleusercontent.com/FssrGQ9hZR5SbvTkp7m8lcst7gXIYwk1VTI8C0PhNs29Agvj5NobtqQ9K3qOeXrLrkG0Bq4xaec7UQug4_31HQ5RQslePZSIqD2agWGpMq-ENgQzC3n8seimMTFsvBv1UcHNKI_EIhdqJStd91xCFjSthE94tuq-SMBD6uRok4ru4PX7oPC2xvDyBikYMkfeU4mrpsGm9qCPV4kiesWBzJekJe4HmY1p8M3H3GBJ2BTq2Yt-dRY2QAA1IRut15mpjREW9aQtx3gYgnCSeKRvW9wFVq2SPbw9ZMnxFCw8Xn_N2Q2sUmrL5pxir_k53cLnCgmG0qjxNnmoAPUXQHPadI2xxZfR6tuGSh8PI123LyQlozoYDzzW2c3OS7bg77_6KI_2V22lEUJs1eZntpCSrzUCxVf3e_c49m3tNCqYCAgNffdoz4mLb1XPT9SckBUTCb2XnVIbU99EQWD1fGfIlXZb_n2o_7nVFu97GGdu_mLD1RJsWgt6bM4H4AcRvdu7SQS2e3cZcWNLIkWobUI3lZE-Z-BvLQvkTJ6MrShPrV71OJX8XLihOgl_keofn4UURf7Vhwlv1SY5gSzZAPR8DsDt7mBemJCECGSTkMgOjfR0O9UJI_zCJq8lBrSryukckdJszJoIRpbFEGW8fyq2t0P2JAAuvYPbLtWtTD6vTFx94zwHQBx52iLamfCwSA=s512-no?authuser=0"
         name='Avatar'
         amount='500'
         />
        <Product 
         image="https://lh3.googleusercontent.com/180yqdlYEtUJwZ1UWFsyng1nSB7UX6lE_i5sDk7OD0nVCm3aWJg-3B2xS4AHYr1WGPg5-iQq4w4Hhw9AWXqrfZNx7Uu0w3SWpilFkCPR2cd3L3iSTkRbeqQUi_2EIXpuhZ3-vVMYmcl8rE91692kuA-oW1JbepdppmlLykcl9jf5G_4cQzbMqGuiVmowbJnA9AK5bdw5yivivALKfAGecUscKNuxs4fjl0NphyM42gLNgV6kI4YPoPLumZiF4-UJ7FrZm9hfqoi5MaFPA2gse4BjKyBX22_9D4TD0udU4pXRq6AumeuCNbpV2Mf1iDrk3FhDYFdaZh99jCGrarNxLDWugvfN2FQo_ZAonLfCS-nqVYZ-m-hRjJKpxSItDlLGLXXqXy-fozlMjU9L0ld7r-rw_kf9GPJkf0a6Y7YluU6SL0SgaY1uTnciwnAlu_lO6HUj1fKzX8wk93-d0xT_8Q0zqxrILncc1izrNZi42gRduyLvPNkdHagwnn1B57yEmoYfnczGo1zRk_UvQH4z_St6E1b15wS-KgZlNV7pgrP5kVs3n0U6n-_R5mqwtt4bXicGnVxaMGsduFtgGc1iURpivPSF0sllyNC-3N_qSNpynIJPgiyVX1h8fed99AU48yJ7OwXmkrI7U-H_D-zVjAUn1_hG9JVnpRrxgtvxunk5_1YZU8fz8htbovgEig=s512-no?authuser=0"
         name='Avatar'
         amount='500'
         />
        <Product 
         image="https://lh3.googleusercontent.com/_SbqG4Xha4wOmejMHp6ZITqCIeTRxSG5MxVX-ZrYZ1eMl5toKps4uoK93if9_WwB_fObBCEUtm7Bmn5yI94yapMjgwyU4d0mIdZhDiSN9HTsanY6y4p1Cxr1eK8oDZq0xa95wMXs9lZzjYhsOb4F9mZX9qmVjRu-HQVVPa6-TU4mFKjhE67fXSpO-hNgsaawaloq2NLghGOWdxpGqxbZlnUEnqLbOYql4drMf7KKLOzGTeGJNO7CdNdumfuU79ZAwweLfjwdeVZQDa2mSiqFdB4ZwCaAQfGUSe1_CjL8DtzAVK1o6iqVKyT6I5j2lsEAAQlfdu0kq0JdAIv4wP-GgU6JFr3Ot5pBxIkI_zOPXx-x59S1wlmidTE8tgPcUXcPrKH1iiwKU8Azcan9mFGXAZ_-P5yd3GUX9a0wLL8jnbgEtbE8qExVnFQ2-A1h_MxHVROjemFplOHXIT4PglbhLe6BXnGmVj8dlY267WV71oLUFcE_8MbNmE3TaqQ8pgGV4mnL-LRoXIrY3HgNBQC1WWjl7q1XDun6G7ne6mIIhvOpRhj_RJ69sjYRzN839WCpvlWIvhs7vHews4hwy6ApPj3yAUE5xHs6fvM5ATXvCfAOqKaX641q94d05ucDp9Iz8uCkExaqX6i84Mn7wwYOshwFKdCkPYtTq2mKNsz1qQfOhwFnj7-h5yR2O_sOdQ=s512-no?authuser=0"
         name='Avatar'
         amount='500'
         />
         </div>
         <div className="product-holder">
         <Product 
         image="https://lh3.googleusercontent.com/pw/ACtC-3epGaOLwsQy8jEs3TDBU2gpTBf3pBld_YOEn30o8xo4-eMOiTiwuaHvnMZa4UYP7F-rbbFAYvgxaOqf_PzxbNZFIbzT3tpFv3tV3NZEV6ZgU1J2MrekipxA9a3IKEXxHS5nA3TLocdqFxAIcmQhMoNO=s512-no?authuser=0"
         name='Avatar'
         amount='500'
         />
         <Product 
         image="https://lh3.googleusercontent.com/Y-bJqgUhLsU3-xF6uc2CPKLtM-ACK4iVyY_Ca8W9i-KIACTg7oRubFTxrboAUszD9IDem_KIsXcSnpAHbRksI4my1FUm_eRMAWIYrwmmhZmVdFzyOiQuaFymyA3_1zb7Uu9A8JspyYl2w7cgzV0_0o5WObdk2oIAWgojMEeJHi5MBE2JqyWRgDy3yM4XW8elm-Mt2HhG0dpR5OB8zbU3dtpA_k3C6Nq0aWNpqx3Rp8xvzx00QV_nrmo6uCBAubBmEXLQF7EgQLf_2fwACbSmd5ecf3jSKJkxdhB6R4dnK39rJA-rj3SwX_FqBOB6k6vFTFxQ7YD6cD8UN0NZRrTikHFulXyaO3wn5RkLPo4B09WDjR0X0EkrMwsacXvuoglhxeYMQtht-mmuPErNrrGxbaLAd-ejmYiYE1J9z_j4lZ9N7GInuL4yrY05qMlghmH93gK3hQ50oZM34an7qq2jMfbOss7tk29iHIxL6Km-4ENB5Fpee59FWMHZJ8Fwrf6kxH6pvzVs5LidUxVqp2LmVOCSupC68wkhPwITU57dvhWnTTcBPLo479qlq8MOLuPMN5lGUsYirWLXEcEy0A2pDZ0bzqLFPtEryu3blzgP7SnSfOMtm_hzkJq3SYmddcOljA5TEXQEREH086Vk27I6yDolpQPPOj5HU0oCRCdBmeZWBi4QFUvJku_4F6lYaw=s512-no?authuser=0"
         name='Avatar'
         amount='500'
         />
        <Product 
         image="https://lh3.googleusercontent.com/6ib4EXWvknex-OkYb2JzwMFDLVGa7U8BKb7R1hkji7hu_j0CmlFJwuvOIvp1wZuNUWJB7TesE7TEyt-uGBpoWMb9FmCK3bQZ9M-W-pZJpWXFnQyiyA_4VjcL8u6TOdi6y09lX051NJFNL8tWwLYaUeyo7FGwIro1YX7O_8Fu7yZGvDRakbCWs9qOHhD48DzxWUDtVZ_0kEQHfNxZOYoE7fLJAY-NGD1cgSzLzMqeIv3cDcEWd1KOU9q8GZFPhA0Mjwi1E2c41CeTubp2OR3SfkjbvnGxbK562RbthcP3OZQFhIx_MBzkEYTSC5RPjteqFU__8tUPt4oHb8WdAqG6RBOMQSC8tpN2s3Pklp-8BLf_0RlyNLW7aKTr64M-RtshZalmTwZ7G-yELsLkXd8tzjs8x58O3kvgva12fctcYwWhRcdvINNzTGcG93ZbdMPZTLiec1DTpVAhR5bI5AxdWaE--EhRNNiNyO-Ryqmj2d_Z0j7BCKZFZltyLk7xTtfT-3JRYqPk3A0JYj5Fb6Z6cGspuuYWhxNsSLYXgjam0508xySIEFanmtqKm-F8BXaiF4uX4AtsfqIo2RBe-IfX6AVBvJZpKivFz6DoRg5HvZuBkTmULEi68zCD57rcPXha58O3sUx6pAuG2WSd5jdJtsb40VHasKN9E80td3nLgaSb6hTjEcuLZJzomwpOYg=s512-no?authuser=0"
         name='Avatar'
         amount='500'
         />
         
         </div>
         <div className="product-holder">
         <Product 
         image="https://lh3.googleusercontent.com/pw/ACtC-3e04bVsMUsRD3sHZNL_y_yO362_X_hQEqvxAhaGou6ZRqLEY9SvVvCBn4XS_9TlSnAY6e62aNwNxfltLcDZ_hZIW4_QilDklPJcKN6L2kMSwhr8dTNGyJ3K6L7TdBycDXH5XoIUHvQrF_PdoGDqXvbK=s512-no?authuser=0"
         name='Avatar'
         amount='500'
         />
          <Product 
         image="https://lh3.googleusercontent.com/pw/ACtC-3couZ1Mo0uX3kwTvqMiwrkEhIKA2FWNSGLaRca7h1q1NjlbuICanSQOgTLwOYsSSkT8L963Qgs0D6C5icIPcRWa-wird2s4JA7-xznZHjmhKX7qPqRcbSPmOmxBsa2ujvxS3UWdIqS7CjWw5ZJSpZrN=s512-no?authuser=0"
         name='Badge To Flex'
         amount='1000'
         />
         <Product 
         image="https://lh3.googleusercontent.com/pw/ACtC-3dSIR7v8hK7GFYQCfhSrvdWQNwFbpbjAsSQqFcElXz_-86P9_EPT14xZZ_lmIGViHzZK9DycA_SMf6CQzm79QAYnnFf58T4r11reaKoQT4sN1ESqCDl2qmmo4n6jwD-HfRFGX_-fk57ufRx256kT1mb=s512-no?authuser=0"
         name='Replenish Health'
         amount='1500'
         />
         
         </div>
         <div className="product-holder">
         <Product 
         image="https://lh3.googleusercontent.com/pw/ACtC-3dB5xUlg_WWgfWzA8fd_iMzXbUUdIHadLxlNVQU7a-LW4oKfj3jE4bu_oopeHHotYYA31PtFDPTUMdBhF4VZe7Q7SqB_PCwVPt4AesQrZsl98DPxINw2YRrWz0Mtx4ty3AbgZziP2Kb3IDO5p_P4CyS=s512-no?authuser=0"
         name='Treat Yourself'
         amount='100'
         />
          <Product 
         image="https://lh3.googleusercontent.com/pw/ACtC-3cMlgq1YUqq-B1mjHtiJoU1FCnnGBWYoZbPG4oQ1Co9i-uyMpAMqzoUB-PiVRWpHPGx9c1t_3VGpuReBNb3oFh2jgTkf6ujlGMbkKQiXcOY99qzMTFT8tm6vvq6hH_bEfXdZbC7Z4uQN9FZSMU9GOM6=s512-no?authuser=0"
         name='15 Minute Breaks'
         amount='50'
         />
         <Product 
         image="https://lh3.googleusercontent.com/pw/ACtC-3f8gwQfARhStNJ3gOj1IfzcsgP1GsUhvFPTEBGVYlgHuFl5GsDtN3gCNYadmKeNR6bGjVJMiSFqB4ierIcOQxINOGAidc6O5YjhwKS-7HUZajpn4wn-gk-q0BwW1W-XmRrzj6nrv5GUwRv4ifjDnpjc=s512-no?authuser=0"
         name='Play Games'
         amount='100'
         />
         
         </div>
        </div>

    );
    
}
