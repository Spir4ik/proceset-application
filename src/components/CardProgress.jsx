import React from 'react'


function CardProgress(props) {
    const {data} = props
    return(
        <>
            {data.map(({name}) => {
                return(
                    <div className='process_list'>
                        <div className="header">
                            <h4>{name}</h4>
                        </div>
                        <div className="container-fluid">
                            <div className="numberOfExecutions">
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M11 2.99994L6.5 5.59802V4.18896C3.91211 4.85504 2 7.20416
                          2 9.99994C2 12.2527 3.24146 14.2154 5.07751 15.2413L3.13513
                          16.3513C1.229 14.8891 0 12.588 0 9.99994C0 6.09436 2.79858 2.84241
                          6.5 2.14032V0.401855L11 2.99994ZM10.9225 4.75854C12.7585 5.78448 14
                          7.74719 14 9.99994C14 12.7957 12.0879 15.1448 9.5 15.8109V14.4019L5
                          16.9999L9.5 19.598V17.8596C13.2014 17.1575 16 13.9055 16 9.99994C16
                          7.41187 14.771 5.11078 12.8649 3.64856L10.9225 4.75854Z" fill="#535374"/>
                                </svg>
                                <span>986 231</span>
                                <p>выполнено раз</p>
                            </div>
                            <div className="row justify-content-center info_time">
                                <div className="col-4">
                                    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M6 0C5.44775 0 5 0.447693 5 1C5 1.55231 5.44775 2 6
                                  2H7V3.06189C3.05359 3.55396 0 6.92041 0 11C0 15.0796 3.05359
                                  18.446 7 18.9381C7.32764 18.9789 7.66138 19 8 19C12.4183 19 16
                                  15.4183 16 11C16 6.92041 12.9464 3.55396 9 3.06189V2H10C10.5522 2
                                  11 1.55231 11 1C11 0.447693 10.5522 0 10 0H6ZM7 16.9171C7.3252 16.9716
                                  7.6593 17 8 17C11.3137 17 14 14.3137 14 11C14 7.68628 11.3137 5 8 5C7.6593
                                  5 7.3252 5.02838 7 5.08295C4.16223 5.55902 2 8.02698 2 11C2 13.973 4.16223
                                  16.441 7 16.9171ZM9 8.10547C9 7.55322 8.55273 7.10547 8 7.10547C7.44727
                                  7.10547 7 7.55322 7 8.10547V11.2964C7 11.8645 7.32031 12.384 7.83008
                                  12.6382L9.55273 13.5C10.0469 13.7468 10.6465 13.5466 10.8945 13.0527C11.1406
                                  12.5586 10.9414 11.958 10.4473 11.7109L9 10.9875V8.10547Z" fill="#535374"/>
                                    </svg>
                                    <span>10ч 30мин</span>
                                    <p>среднее время выполнения</p>
                                </div>
                                <div className="col-4">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11 0C10.3375 0 9.4491 0.0678101 8.68958 0.349121C8.24707 0.513062 7.7395 0.799438 7.39722 1.26093C7.00256 1.10138 6.53662 1 6 1C5.16577 1 4.22314 1.13483 3.4519 1.56335C2.62048 2.02521 2 2.83447 2 4C2 4.31854 1.9248 4.55792 1.82153 4.8161C1.81189 4.84003 1.7998 4.86938 1.78625 4.90228L1.77722 4.92426C1.73242 5.03247 1.6748 5.17181 1.63513 5.28436C1.57202 5.4632 1.5 5.7113 1.5 6C1.5 6.26477 1.5614 6.52698 1.61658 6.72003C1.67615 6.92834 1.75171 7.13446 1.82153 7.3089C1.89209 7.48541 1.96204 7.64246 2.01392 7.755L2.0376 7.80603C2.04565 7.84839 2.05554 7.89728 2.0675 7.95129C2.10608 8.12439 2.17004 8.36761 2.27148 8.6214C2.36914 8.86536 2.52515 9.17999 2.77515 9.44794C2.95471 9.6402 3.20203 9.82635 3.51514 9.92572C3.53113 10.0331 3.54431 10.1739 3.55066 10.3488C3.56152 10.6485 3.5509 10.9734 3.53564 11.2691C3.53174 11.3469 3.52686 11.4307 3.52197 11.514C3.51526 11.628 3.50867 11.7411 3.50452 11.8372C3.46838 11.8758 3.41089 11.9305 3.32397 12.0009C3.05908 12.2153 2.68213 12.4496 2.23547 12.7175L2.09021 12.8045L2.08765 12.806C1.70862 13.0327 1.28723 13.2847 0.955566 13.528C0.766968 13.6662 0.560303 13.8349 0.39209 14.0305C0.240356 14.207 0 14.5425 0 15V15.0047V15.0093V15.014V15.0186V15.0232V15.0278V15.0323V15.0368V15.0413V15.0458V15.0503V15.0547V15.0591V15.0635V15.0679V15.0723V15.0767V15.081V15.0853V15.0895V15.0938V15.0981V15.1023V15.1065V15.1107V15.1149V15.119V15.1231V15.1272V15.1313V15.1354V15.1394V15.1434V15.1475V15.1514V15.1554V15.1594V15.1633V15.1672V15.1711V15.1749V15.1788V15.1826V15.1865V15.1902V15.194V15.1978V15.2015V15.2053V15.209V15.2126V15.2163V15.22V15.2236V15.2272V15.2308V15.2344V15.238V15.2415V15.2451V15.2485V15.2521V15.2556V15.259V15.2625V15.2659V15.2692V15.2726V15.276V15.2794V15.2827V15.286V15.2893V15.2926V15.2959V15.2991V15.3024V15.3056V15.3088V15.312V15.3151V15.3183V15.3215V15.3246V15.3277V15.3307V15.3339V15.3369V15.34V15.343V15.3459V15.3489V15.3519V15.3549V15.3578V15.3608V15.3637V15.3666V15.3695V15.3724V15.3752V15.3781V15.3809V15.3837V15.3865V15.3893V15.392V15.3948V15.3975V15.4003V15.403V15.4056V15.4083V15.411V15.4137V15.4163V15.4189V15.4215V15.4241V15.4267V15.4293V15.4318V15.4344V15.4369V15.4394V15.4419V15.4444V15.4469V15.4493V15.4518V15.4542V15.4566V15.459V15.4614V15.4638V15.4662V15.4685V15.4709V15.4732V15.4755V15.4778V15.4801V15.4824V15.4847V15.4869V15.4891V15.4914V15.4936V15.4958V15.498V15.5002V15.5024V15.5045V15.5067V15.5088V15.5109V15.513V15.5151V15.5172V15.5193V15.5214V15.5234V15.5255V15.5275V15.5295V15.5315V15.5335V15.5355V15.5375V15.5394V15.5414V15.5433V15.5453V15.5472V15.5491V15.551V15.5529V15.5548V15.5566V15.5585V15.5604V15.5622V15.564V15.5659V15.5677V15.5695V15.5713V15.5731V15.5748V15.5766V15.5783V15.5801V15.5818V15.5836V15.5853V15.587V15.5887V15.5903V15.592V15.5937V15.5953V15.597V15.5986V15.6003V15.6019V15.6035V15.6052V15.6068V15.6083V15.6099V15.6115V15.6131V15.6146V15.6162V15.6177V15.6193V15.6208V15.6223V15.6238V15.6254V15.6268V15.6284V15.6298V15.6313V15.6328V15.6342V15.6357V15.6371V15.6385V15.64V15.6414V15.6428V15.6443V15.6457V15.6471V15.6484V15.6498V15.6512V15.6526V15.6539V15.6553V15.6567V15.658V15.6594V15.6607V15.662V15.6633V15.6647V15.666V15.6673V15.6686V15.6699V15.6711V15.6724V15.6737V15.675V15.6763V15.6776V15.6788V15.6801V15.6813V15.6825V15.6838V15.685V15.6862V15.6874V15.6887V15.6899V15.6911V15.6923V15.6935V15.6947V15.6959V15.697V15.6982V15.6994V15.7006V15.7017V15.7029V15.7041V15.7053V15.7064V15.7075V15.7087V15.7098V15.7109V15.7121V15.7133V15.7144V15.7155V15.7166V15.7177V15.7189V15.72V15.7211V15.7222V15.7233V15.7244V15.7255V15.7266V15.7277V15.7288V15.7299V15.731V15.732V15.7331V15.7342V15.7353V15.7363V15.7374V15.7385V15.7396V15.7406V15.7417V15.7427V15.7438V15.7449V15.7459V15.747V15.748V15.7491V15.7502V15.7512V15.7523V15.7533V15.7543V15.7554V15.7565V15.7575V15.7585V15.7596V15.7606V15.7617V15.7628V15.7638V15.7648V15.7659V15.7669V15.7679V15.769V15.77V15.7711V15.7721V15.7731V15.7742V15.7752V15.7762V15.7773V15.7784V15.7794V15.7805V15.7815V15.7825V15.7836V15.7846V15.7857V15.7867V15.7878V15.7888V15.7899V15.791V15.792V15.793V15.7941V15.7952V15.7962V15.7973V15.7983V15.7994V15.8005V15.8016V15.8026V15.8037V15.8047V15.8058V15.8069V15.808V15.8091V15.8102V15.8113V15.8123V15.8134V15.8145V15.8156V15.8167V15.8178V15.8189V15.8201V15.8212V15.8223V15.8234V15.8245V15.8256V15.8268V15.8279V15.829V15.8301V15.8313V15.8325V15.8336V15.8347V15.8359V15.837V15.8382V15.8394V15.8406V15.8417V15.8429V15.8441V15.8453V15.8465V15.8477V15.8489V15.8501V15.8513V15.8525V15.8537V15.8549V15.8561V15.8574V15.8586V15.8599V15.8611V15.8624V15.8636V15.8649V15.8661V15.8674V15.8687V15.87V15.8713V15.8726V15.8739V15.8752V15.8765V15.8778V15.8792V15.8805V15.8818V15.8832V15.8845V15.8859V15.8872V15.8886V15.89V15.8914V15.8928V15.8942V15.8956V15.897V15.8984V15.8998V15.9012V15.9026V15.9041V15.9055V15.907V15.9084V15.9099V15.9114V15.9129V15.9144V15.9159V15.9174V15.9189V15.9205V15.922V15.9235V15.925V15.9266V15.9282V15.9297V15.9313V15.9329V15.9345V15.9361V15.9377V15.9393V15.941V15.9426V15.9443V15.9459V15.9476V15.9493V15.9509V15.9526V15.9543V15.9561V15.9578V15.9595V15.9612V15.963V15.9647V15.9665V15.9683V15.9701V15.9719V15.9737V15.9755V15.9773V15.9791V15.981V15.9828V15.9847V15.9866V15.9885V15.9904V15.9922V15.9942V15.9961V15.998V16V17H1H4V18H5H17H18V16.9996V16.9982V16.993V16.973V16.8987V16.6464V16C18 15.0317 17.7072 14.2744 17.1812 13.7C16.6885 13.1619 16.0608 12.8651 15.5654 12.66C15.3804 12.5834 15.2194 12.5208 15.0752 12.4648L15.0715 12.4633C14.7733 12.3474 14.5475 12.2595 14.3301 12.1343C14.0693 11.984 13.9998 11.8721 13.9683 11.7501C13.9294 11.5998 13.8811 11.4382 13.8412 11.3049C13.8259 11.254 13.812 11.2073 13.8002 11.1668C13.7505 10.9959 13.7229 10.8815 13.7111 10.792C13.7054 10.7501 13.7048 10.7236 13.7053 10.7089L13.7072 10.7071L13.7333 10.681C14.2063 10.2083 14.8901 9.52515 14.9882 8.30182C15.0778 8.25354 15.203 8.18323 15.3131 8.10608C15.5031 7.97314 15.7345 7.76709 15.8944 7.4472C16.1218 6.99249 16.262 6.5141 16.262 6C16.262 5.4859 16.1218 5.00751 15.8944 4.5528C15.7836 4.33118 15.5928 4.1012 15.2938 3.96771C15.1929 3.92261 15.0939 3.89496 15 3.87958V3.87555V3.87036V3.86517V3.85999V3.85474V3.84955V3.8443V3.83905V3.83386V3.82861V3.82336V3.81812V3.81287V3.80762V3.80231V3.79706V3.79181V3.7865V3.78119V3.77594V3.77063V3.76532V3.76001V3.7547V3.74939V3.74408V3.73877V3.7334V3.72809V3.72272V3.71741V3.71204V3.70667V3.70135V3.69598V3.69061V3.68524V3.67987V3.67444V3.66907V3.6637V3.65826V3.65289V3.64746V3.64209V3.63666V3.63123V3.62579V3.62036V3.61493V3.6095V3.60406V3.59863V3.5932V3.58771V3.58228V3.57678V3.57135V3.56586V3.56042V3.55493V3.54944V3.54395V3.53845V3.53296V3.52747V3.52197V3.51648V3.51093V3.50543V3.49988V3.49438V3.48883V3.48334V3.47778V3.47223V3.46674V3.46118V3.45563V3.45007V3.44452V3.43896V3.43341V3.4278V3.42224V3.41669V3.41107V3.40552V3.3999V3.39435V3.38873V3.38312V3.37756V3.37195V3.36633V3.36072V3.3551V3.34949V3.34387V3.33826V3.33264V3.32703V3.32135V3.31573V3.31012V3.30444V3.29883V3.29315V3.28748V3.28186V3.27618V3.27051V3.26489V3.25922V3.25354V3.24786V3.24219V3.23651V3.23083V3.22516V3.21948V3.21375V3.20807V3.20239V3.19672V3.19098V3.1853V3.17957V3.17389V3.16815V3.16248V3.15674V3.151V3.14532V3.13959V3.13385V3.12811V3.12238V3.11664V3.1109V3.10516V3.09943V3.09369V3.08795V3.08221V3.07648V3.07074V3.06494V3.0592V3.05347V3.04767V3.04193V3.03613V3.0304V3.02466V3.01886V3.01306V3.00732V3.00153V2.99579V2.98999V2.98419V2.97839V2.97266V2.96686V2.96106V2.95526V2.94946V2.94366V2.93787V2.93207V2.92627V2.92047V2.91467V2.90887V2.90308V2.89728V2.89148V2.88562V2.87982V2.87402V2.86823V2.86237V2.85657V2.85077V2.84491V2.83911V2.83331V2.82745V2.82166V2.8158V2.81V2.80414V2.79834V2.79248V2.78668V2.78082V2.77502V2.76917V2.76331V2.75751V2.75165V2.74579V2.73999V2.73413V2.72827V2.72247V2.71661V2.71075V2.7049V2.6991V2.69324V2.68738V2.68152V2.67566V2.66986V2.664V2.65814V2.65228V2.64642V2.64056V2.6347V2.62885V2.62299V2.61719V2.61133V2.60547V2.59961V2.59375V2.58789V2.58203V2.57617V2.57031V2.56445V2.55859V2.55273V2.54688V2.54102V2.53516V2.5293V2.52344V2.51758V2.51172V2.50586V2.5C15 1.25842 14.0616 0.62738 13.3104 0.349182C12.5509 0.0678101 11.6625 0 11 0ZM4.12048 15C4.25232 14.4973 4.49084 14.0739 4.82861 13.7247C5.32886 13.2076 5.96594 12.9454 6.44202 12.767C6.56494 12.7209 6.67737 12.6801 6.78113 12.6424L6.78503 12.641C7.14087 12.5117 7.39417 12.4197 7.62183 12.2811C7.84924 12.1426 7.96875 12.002 8.02991 11.7574C8.06995 11.5973 8.11963 11.4294 8.1604 11.292C8.17383 11.2468 8.18616 11.2049 8.1969 11.1677C8.24695 10.9948 8.2749 10.8798 8.28711 10.7893C8.2926 10.7485 8.29346 10.7224 8.29285 10.7071L8.26672 10.681C7.7937 10.2083 7.10986 9.52515 7.01184 8.30182C6.92224 8.25354 6.797 8.18323 6.68689 8.10608C6.49695 7.97314 6.2655 7.76709 6.10559 7.4472C5.87817 6.99249 5.73804 6.5141 5.73804 6C5.73804 5.4859 5.87817 5.00751 6.10559 4.5528C6.21643 4.33118 6.40723 4.1012 6.70618 3.96771C6.80713 3.92261 6.90613 3.89496 7 3.87958V3.87762V3.87323V3.86877V3.86438V3.85999V3.85559V3.85114V3.84674V3.84235V3.83795V3.83356V3.82916V3.82477V3.82031V3.81592V3.81152V3.80713V3.80273V3.79834V3.79395V3.78955V3.78516V3.78076V3.77637V3.77197V3.76758V3.76318V3.75879V3.75439V3.75V3.74561V3.74121V3.73682V3.73242V3.72803V3.72363V3.71924V3.71484V3.71045V3.70605V3.70166V3.69727V3.69287V3.68848V3.68408V3.67963V3.67523V3.67084V3.66644V3.66205V3.65765V3.65326V3.6488V3.64441V3.64001V3.63562V3.63123V3.62677V3.62238V3.61798V3.61353V3.60913V3.60474V3.60028V3.59589V3.59143V3.58704V3.58258V3.57819V3.57373V3.56934V3.56488V3.56042V3.55603V3.55157V3.54712V3.54266V3.53821V3.53381V3.52936V3.5249V3.52045V3.51599V3.51154V3.50708V3.50256V3.49811V3.49365V3.4892V3.48474V3.48022V3.47577V3.47125V3.4668V3.46228V3.45782V3.45331V3.44885V3.44434V3.43982V3.4353V3.43079V3.42627V3.42175V3.41724V3.41272V3.4082V3.40369V3.39917V3.39459V3.39008V3.38556V3.38098V3.37646V3.37189V3.36731V3.36273V3.35822V3.35364V3.34906V3.34448V3.3399V3.33533V3.33069C6.9624 3.29669 6.91382 3.25873 6.85266 3.21997C6.67969 3.11041 6.40613 3 6 3C5.33423 3 4.77686 3.11517 4.4231 3.31165C4.12952 3.47479 4 3.66553 4 4C4 4.68146 3.8252 5.19208 3.67847 5.5589C3.64429 5.64441 3.61816 5.70721 3.59644 5.75916L3.5946 5.76343C3.5647 5.83545 3.54333 5.88672 3.52112 5.95001C3.51099 5.97882 3.50525 5.99829 3.50208 6.01001C3.50549 6.03198 3.51489 6.0838 3.53967 6.17059C3.57385 6.29041 3.62329 6.42804 3.67847 6.5661C3.73291 6.70209 3.78796 6.82629 3.82983 6.91687C3.85059 6.96179 3.86755 6.99756 3.87903 7.0213L3.89172 7.0473L3.89441 7.0528L3.96912 7.20221L3.99084 7.36475L3.99121 7.36743L3.99573 7.39551C4.00049 7.42285 4.0083 7.46527 4.0199 7.51746C4.04395 7.62561 4.07996 7.75739 4.12842 7.8786C4.15149 7.93597 4.17273 7.9798 4.19055 8.01208C4.92883 8.10815 5.24976 8.75305 5.35999 9.06946C5.49512 9.45752 5.53601 9.90814 5.54932 10.2762C5.56348 10.664 5.54919 11.0578 5.53308 11.3715C5.526 11.511 5.51929 11.6237 5.51379 11.7147L5.51257 11.7361C5.50488 11.8646 5.5 11.9471 5.5 12C5.5 12.4196 5.31848 12.7537 5.15515 12.9758C4.98828 13.2026 4.77905 13.3961 4.58228 13.5554C4.19092 13.8723 3.69287 14.1754 3.26453 14.4325L3.12109 14.5184L3.11646 14.5212C2.81982 14.6989 2.55847 14.8554 2.34082 15H4.12048ZM8.21387 4.22717C8.22632 4.23291 8.22791 4.23468 8.21655 4.22864L8.21387 4.22717ZM13.7834 4.22864C13.7721 4.23468 13.7737 4.23291 13.7863 4.22717L13.7834 4.22864ZM9 2.5C9 2.45703 9.00549 2.4491 9.0271 2.4259C9.06885 2.3811 9.17236 2.3031 9.38428 2.22461C9.81592 2.0647 10.4275 2 11 2C11.5725 2 12.1841 2.0647 12.6157 2.22461C12.8275 2.3031 12.9312 2.3811 12.9729 2.42596C12.9945 2.4491 13 2.45703 13 2.5V2.50586V2.51172V2.51758V2.52344V2.5293V2.53516V2.54102V2.54688V2.55273V2.55859V2.56445V2.57031V2.57617V2.58203V2.58789V2.59375V2.59961V2.60547V2.61133V2.61719V2.62299V2.62885V2.6347V2.64056V2.64642V2.65228V2.65814V2.664V2.66986V2.67566V2.68152V2.68738V2.69324V2.6991V2.7049V2.71075V2.71661V2.72247V2.72827V2.73413V2.73999V2.74579V2.75165V2.75751V2.76331V2.76917V2.77502V2.78082V2.78668V2.79248V2.79834V2.80414V2.81V2.8158V2.82166V2.82745V2.83331V2.83911V2.84491V2.85077V2.85657V2.86237V2.86823V2.87402V2.87982V2.88562V2.89148V2.89728V2.90308V2.90887V2.91467V2.92047V2.92627V2.93207V2.93787V2.94366V2.94946V2.95526V2.96106V2.96686V2.97266V2.97839V2.98419V2.98999V2.99579V3.00153V3.00732V3.01306V3.01886V3.02466V3.0304V3.03613V3.04193V3.04767V3.05347V3.0592V3.06494V3.07074V3.07648V3.08221V3.08795V3.09369V3.09943V3.10516V3.1109V3.11664V3.12238V3.12811V3.13385V3.13959V3.14532V3.151V3.15674V3.16248V3.16815V3.17389V3.17957V3.1853V3.19098V3.19672V3.20239V3.20807V3.21375V3.21948V3.22516V3.23083V3.23651V3.24219V3.24786V3.25354V3.25922V3.26489V3.27051V3.27618V3.28186V3.28748V3.29315V3.29883V3.30444V3.31012V3.31573V3.32135V3.32703V3.33264V3.33826V3.34387V3.34949V3.3551V3.36072V3.36633V3.37195V3.37756V3.38312V3.38873V3.39435V3.3999V3.40552V3.41107V3.41669V3.42224V3.4278V3.43341V3.43896V3.44452V3.45007V3.45563V3.46118V3.46674V3.47223V3.47778V3.48334V3.48883V3.49438V3.49988V3.50543V3.51093V3.51648V3.52197V3.52747V3.53296V3.53845V3.54395V3.54944V3.55493V3.56042V3.56586V3.57135V3.57678V3.58228V3.58771V3.5932V3.59863V3.60406V3.6095V3.61493V3.62036V3.62579V3.63123V3.63666V3.64209V3.64746V3.65289V3.65826V3.6637V3.66907V3.67444V3.67987V3.68524V3.69061V3.69598V3.70135V3.70667V3.71204V3.71741V3.72272V3.72809V3.7334V3.73877V3.74408V3.74939V3.7547V3.76001V3.76532V3.77063V3.77594V3.78119V3.7865V3.79181V3.79706V3.80231V3.80762V3.81287V3.81812V3.82336V3.82861V3.83386V3.83905V3.8443V3.84955V3.85474V3.85999V3.86517V3.87036V3.87555V3.88074V3.88593V3.89111V3.8963V3.90149V3.90662V3.9118V3.91693V3.92212V3.92725V3.93237V3.9375V3.94263V3.94775V3.95288V3.95795V3.96307V3.96814V3.97327V3.97833V3.9834V3.98846V3.99353V3.9986V4.00366V4.00873V4.01373V4.0188V4.0238V4.02881V4.03387V4.03888V4.04388V4.04889V4.05383V4.05884V4.06384V4.06879V4.07379V4.07874V4.08368V4.08862V4.09357V4.09851V4.10345V4.10834V4.11328V4.11816V4.12311V4.12799V4.13287V4.13776V4.14264V4.14752V4.15234V4.15723V4.16211V4.16693V4.17175V4.17657V4.1814V4.18622V4.19104V4.19586V4.20062V4.20544V4.21021V4.21497V4.21973V4.22449V4.22925V4.23401V4.23877V4.24347V4.24823V4.25293V4.25763V4.26233V4.26703V4.27173V4.27643V4.28107V4.28577V4.29041V4.29504V4.29974V4.30438V4.30896V4.3136V4.31824V4.32281V4.32745V4.33203V4.33661V4.34119V4.34576V4.35034V4.35486V4.35944V4.36395V4.36853V4.37305V4.37756V4.38208V4.38654V4.39105V4.39557V4.40002V4.40448V4.40894V4.41339V4.41785V4.4223V4.42676V4.43115V4.43555V4.44V4.4444V4.44879V4.45312V4.45752V4.46191V4.46625V4.47058V4.47491V4.47925V4.48358V4.48792V4.49225V4.49652V4.50079V4.50513V4.5094V4.51361V4.51788V4.52216V4.52637V4.53064V4.53485V4.53906V4.54327V4.54749V4.55164V4.55585V4.56V4.56415V4.56836V4.57245V4.5766V4.58075V4.58484V4.58899V4.59308V4.59717V4.60126V4.60535V4.60938V4.61346V4.61749V4.62152V4.62555V4.62958V4.63361V4.63763V4.6416V4.64557V4.6496V4.65356V4.65747V4.66144V4.66541V4.66931V4.67322V4.67712V4.68103V4.68494V4.68884V4.69269V4.69653V4.70044V4.70428V4.70807V4.71191V4.71576V4.71954V4.72333V4.72711V4.7309V4.73468V4.73846V4.74219V4.74591V4.74963V4.75336V4.75708V4.7608V4.76447V4.76819V4.77185V4.77551V4.77917V4.78278V4.78644V4.79004V4.79364V4.79724V4.80084V4.80444V4.80798V4.81158V4.81512V4.81866V4.8222V4.82568V4.82922V4.8327V4.83618V4.83966V4.84314V4.84662V4.85004V4.85352V4.85693V4.86035V4.86377V4.86713V4.87054V4.8739V4.87726V4.88062V4.88397V4.88727V4.89062V4.89392V4.89722V4.90051V4.90381V4.90704V4.91034V4.91357V4.91681V4.92004V4.92322V4.92645V4.92963V4.9328V4.93597V4.93915V4.94232V4.94543V4.94855V4.95166V4.95477V4.95789V4.96094V4.96405V4.9671V4.97015V4.97314V4.9762V4.97919V4.98224V4.98523V4.98822V4.99115V4.99414V4.99707V5C13 5.12738 13.0105 5.47455 13.2655 5.7796C13.4114 5.9541 13.6041 6.07349 13.8147 6.12933C13.9858 6.17468 14.1377 6.17035 14.2474 6.1557C14.2306 6.24872 14.197 6.35687 14.1373 6.48651C14.1157 6.49969 14.0901 6.51343 14.0463 6.53687C14.0168 6.55255 13.9794 6.57257 13.9294 6.59973C13.8171 6.66083 13.5824 6.78894 13.3851 7.00372C13.1508 7.25879 13 7.59747 13 8C13 8.5603 12.7823 8.80341 12.2928 9.29291C11.7318 9.854 11.6566 10.5142 11.7284 11.0551C11.7611 11.3019 11.825 11.5367 11.8798 11.7254C11.901 11.7983 11.9203 11.8627 11.9384 11.9227C11.973 12.0383 12.0028 12.1377 12.0317 12.2499C12.2441 13.0732 12.7966 13.559 13.3315 13.8672C13.6893 14.0734 14.1359 14.2471 14.4917 14.3856L14.499 14.3884C14.6105 14.4318 14.7129 14.4717 14.8005 14.508C15.2441 14.6916 15.5249 14.8527 15.7061 15.0505C15.8539 15.2119 16 15.4683 16 16H6C6 15.4634 6.14429 15.2412 6.26611 15.1154C6.42944 14.9464 6.68884 14.8103 7.1438 14.6398C7.20874 14.6155 7.28064 14.5897 7.35779 14.562L7.36975 14.5576C7.74695 14.4221 8.24524 14.2431 8.66223 13.9891C9.23657 13.6393 9.75513 13.1025 9.97009 12.2426C9.99805 12.1305 10.0283 12.0286 10.0635 11.9097L10.0665 11.8994L10.0775 11.8621C10.0903 11.8187 10.1039 11.7729 10.1182 11.7233C10.1722 11.5364 10.2361 11.3024 10.2692 11.0566C10.3419 10.5177 10.2701 9.8559 9.70715 9.29291C9.21765 8.80341 9 8.5603 9 8C9 7.59747 8.84924 7.25879 8.61487 7.00372C8.4176 6.78894 8.18286 6.66083 8.07056 6.59973C8.02063 6.57257 7.98315 6.55255 7.95374 6.53687C7.90991 6.51343 7.88428 6.49969 7.86267 6.48651C7.80298 6.35687 7.76941 6.24872 7.75256 6.1557C7.8623 6.17035 8.01416 6.17474 8.1853 6.12933C8.39587 6.07349 8.58862 5.9541 8.7345 5.7796C8.9895 5.47455 9 5.12738 9 5V4.99414V4.98828V4.98248V4.97662V4.97083V4.96503V4.95929V4.95349V4.94775V4.94196V4.93622V4.93048V4.9248V4.91907V4.91339V4.90771V4.90198V4.89636V4.89069V4.88507V4.87939V4.87378V4.86816V4.86255V4.85699V4.85138V4.84583V4.84027V4.83472V4.82916V4.82361V4.81812V4.81262V4.80713V4.80164V4.79614V4.79065V4.78522V4.77972V4.77429V4.76886V4.76343V4.75806V4.75262V4.74725V4.74182V4.73645V4.73108V4.72577V4.7204V4.71509V4.70972V4.70441V4.6991V4.69379V4.68854V4.68323V4.67798V4.67267V4.66742V4.66217V4.65692V4.65173V4.64648V4.6413V4.63605V4.63086V4.62567V4.62048V4.61536V4.61017V4.60498V4.59985V4.59473V4.5896V4.58447V4.57935V4.57422V4.56915V4.56409V4.55896V4.55389V4.54883V4.54376V4.5387V4.53369V4.52863V4.52362V4.51862V4.51355V4.50854V4.50354V4.4986V4.49359V4.48859V4.48364V4.4787V4.47369V4.46875V4.46381V4.45892V4.45398V4.44904V4.44415V4.43921V4.43433V4.42944V4.42456V4.41968V4.41479V4.40991V4.40503V4.40021V4.39539V4.3905V4.38568V4.38086V4.37604V4.37122V4.36639V4.36157V4.35681V4.35199V4.34723V4.34241V4.33765V4.33289V4.32812V4.32336V4.3186V4.31384V4.30914V4.30438V4.29968V4.29492V4.29022V4.28552V4.28082V4.27612V4.27142V4.26672V4.26202V4.25732V4.25262V4.24799V4.24329V4.23865V4.23401V4.22937V4.22467V4.22003V4.21539V4.21075V4.20618V4.20154V4.1969V4.19226V4.18768V4.18304V4.17847V4.17389V4.16925V4.16467V4.1601V4.15552V4.15094V4.14636V4.14178V4.13721V4.13269V4.12811V4.12354V4.11902V4.11444V4.10992V4.10535V4.10083V4.09631V4.0918V4.08728V4.0827V4.07819V4.07367V4.06921V4.0647V4.06018V4.05566V4.05115V4.04669V4.04218V4.03772V4.0332V4.02869V4.02423V4.01978V4.01526V4.0108V4.00635V4.00189V3.99738V3.99292V3.98846V3.98401V3.97955V3.9751V3.97064V3.96619V3.96173V3.95734V3.95288V3.94843V3.94397V3.93958V3.93512V3.93066V3.92627V3.92181V3.91742V3.91296V3.90857V3.90411V3.89972V3.89526V3.89087V3.88647V3.88202V3.87762V3.87323V3.86877V3.86438V3.85999V3.85559V3.85114V3.84674V3.84235V3.83795V3.83356V3.82916V3.82477V3.82031V3.81592V3.81152V3.80713V3.80273V3.79834V3.79395V3.78955V3.78516V3.78076V3.77637V3.77197V3.76758V3.76318V3.75879V3.75439V3.75V3.74561V3.74121V3.73682V3.73242V3.72803V3.72363V3.71924V3.71484V3.71045V3.70605V3.70166V3.69727V3.69287V3.68848V3.68408V3.67963V3.67523V3.67084V3.66644V3.66205V3.65765V3.65326V3.6488V3.64441V3.64001V3.63562V3.63123V3.62677V3.62238V3.61798V3.61353V3.60913V3.60474V3.60028V3.59589V3.59143V3.58704V3.58258V3.57819V3.57373V3.56934V3.56488V3.56042V3.55603V3.55157V3.54712V3.54266V3.53821V3.53381V3.52936V3.5249V3.52045V3.51599V3.51154V3.50708V3.50256V3.49811V3.49365V3.4892V3.48474V3.48022V3.47577V3.47125V3.4668V3.46228V3.45782V3.45331V3.44885V3.44434V3.43982V3.4353V3.43079V3.42627V3.42175V3.41724V3.41272V3.4082V3.40369V3.39917V3.39459V3.39008V3.38556V3.38098V3.37646V3.37189V3.36731V3.36273V3.35822V3.35364V3.34906V3.34448V3.3399V3.33533V3.33069V3.32611V3.32153V3.31689V3.31232V3.30768V3.3031V3.29846V3.29382V3.28918V3.28461V3.27997V3.27527V3.27063V3.26599V3.26135V3.25665V3.25201V3.24731V3.24268V3.23798V3.23328V3.22858V3.22388V3.21918V3.21448V3.20978V3.20508V3.20032V3.19562V3.19086V3.1861V3.1814V3.17664V3.17188V3.16711V3.16235V3.15753V3.15277V3.14801V3.14319V3.13837V3.13361V3.12878V3.12396V3.11914V3.11432V3.1095V3.10461V3.09979V3.09491V3.09009V3.08521V3.08032V3.07544V3.07056V3.06567V3.06079V3.05585V3.05096V3.04602V3.04108V3.03613V3.03119V3.02625V3.0213V3.01636V3.01135V3.00641V3.0014V2.9964V2.99139V2.98639V2.98138V2.97638V2.97137V2.96631V2.96124V2.95624V2.95117V2.94611V2.94104V2.93591V2.93085V2.92572V2.92065V2.91553V2.9104V2.90527V2.90015V2.89496V2.88983V2.88464V2.87946V2.87433V2.86914V2.86389V2.8587V2.85352V2.84827V2.84302V2.83783V2.83258V2.82727V2.82202V2.81677V2.81146V2.80615V2.8009V2.79559V2.79022V2.78491V2.7796V2.77423V2.76886V2.76349V2.75812V2.75275V2.74738V2.74194V2.73651V2.73108V2.72565V2.72021V2.71478V2.70935V2.70386V2.69836V2.69287V2.68738V2.68188V2.67633V2.67084V2.66528V2.65973V2.65417V2.64856V2.64301V2.63739V2.63184V2.62622V2.62054V2.61493V2.60931V2.60364V2.59796V2.59229V2.58661V2.58093V2.5752V2.56946V2.56372V2.55798V2.55225V2.54651V2.54071V2.53491V2.52911V2.52332V2.51752V2.51166V2.5058V2.5Z" fill="#535374"/>
                                    </svg>
                                    <span>120 сотрудников</span>
                                    <p>участвует в процессе</p>
                                </div>
                            </div>
                            <div className="row justify-content-center info_time next_info">
                                <div className="col-4">
                                    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5 1C5 0.447693 5.44775 0 6 0H10C10.5522 0 11 0.447693 11 1C11 1.55231 10.5522 2 10 2H9V3.06189C12.9464 3.55396 16 6.92041 16 11C16 15.4183 12.4183 19 8 19C7.66138 19 7.32764 18.9789 7 18.9381V16.9171C7.3252 16.9716 7.6593 17 8 17C11.3137 17 14 14.3137 14 11C14 7.68628 11.3137 5 8 5C7.6593 5 7.3252 5.02838 7 5.08295V4V3.06189V2H6C5.44775 2 5 1.55231 5 1ZM4 5C3.44775 5 3 5.44769 3 6C3 6.55231 3.44775 7 4 7H5C5.55225 7 6 6.55231 6 6C6 5.44769 5.55225 5 5 5H4ZM3 17C3 16.4477 3.44775 16 4 16H5C5.55225 16 6 16.4477 6 17C6 17.5523 5.55225 18 5 18H4C3.44775 18 3 17.5523 3 17ZM1 8C0.447754 8 0 8.44769 0 9C0 9.55231 0.447754 10 1 10H3C3.55225 10 4 9.55231 4 9C4 8.44769 3.55225 8 3 8H1ZM0 13C0 12.4477 0.447754 12 1 12H3C3.55225 12 4 12.4477 4 13C4 13.5523 3.55225 14 3 14H1C0.447754 14 0 13.5523 0 13Z" fill="#535374"/>
                                        <path d="M8 7.10547C8.55273 7.10547 9 7.55322 9 8.10547V10.9875L10.4473 11.7109C10.9414 11.958 11.1406 12.5586 10.8945 13.0527C10.6465 13.5466 10.0469 13.7468 9.55273 13.5L7.83008 12.6382C7.32031 12.384 7 11.8645 7 11.2964V8.10547C7 7.55322 7.44727 7.10547 8 7.10547Z" fill="#535374"/>
                                    </svg>
                                    <span>1ч 7 мин</span>
                                    <p>среднее активное время</p>
                                </div>
                                <div className="col-4">
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2 0C0.895386 0 0 0.895447 0 2V4C0 5.10455 0.895386 6 2 6H2.07324C2.28931 7.42279 2.96765 8.50378 3.89355 9.33704C4.97632 10.3115 6.37793 10.9282 7.62866 11.4285C7.88049 11.5292 8.12488 11.6249 8.36121 11.7175C9.36658 12.1111 10.2261 12.4477 10.9025 12.8761C11.4688 13.2347 11.7917 13.5858 11.9259 14.0013C10.8556 14.0403 10 14.9202 10 16V18C10 19.1046 10.8954 20 12 20H14C15.1046 20 16 19.1046 16 18V16C16 14.8954 15.1046 14 14 14H13.9681C13.796 12.6842 12.95 11.8054 11.9725 11.1864C11.1168 10.6445 10.027 10.2194 9.01233 9.82361L9.00928 9.82245L8.97546 9.80927C8.77002 9.72906 8.56775 9.65015 8.37134 9.57153C7.12207 9.07184 6.02368 8.56348 5.23145 7.85046C4.69397 7.36676 4.29004 6.78247 4.10742 5.99719C5.16211 5.94135 6 5.06848 6 4V2C6 0.895447 5.10461 0 4 0H2ZM4 2H2V4H4V2ZM2 14C0.895386 14 0 14.8954 0 16V18C0 19.1046 0.895386 20 2 20H4C5.10461 20 6 19.1046 6 18V16C6 14.8954 5.10461 14 4 14V12C4 11.6412 3.77417 11.5105 3.42993 11.3112C3.04968 11.091 2.52478 10.7872 2 10V14ZM4 16H2V18H4V16ZM12 16H14V18H12V16Z" fill="#535374"/>
                                    </svg>
                                    <span>129 сценариев</span>
                                    <p>в процессе</p>
                                </div>
                            </div>
                            <div className="block_info_date">
                                <div className="row info_date">
                                    <div className="col-auto date_text"><span>Начало</span></div>
                                    <div className="col-auto date"><p>11 января 2017</p></div>
                                </div>
                                <div className="row info_date">
                                    <div className="col-auto date_text"><span>Окончание</span></div>
                                    <div className="col-auto date"><p>11 января 2017</p></div>
                                </div>
                                <div className="row info_date">
                                    <div className="col-auto date_text"><span>Загрузка</span></div>
                                    <div className="col-auto date"><p>11 января 2017</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default CardProgress